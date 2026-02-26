#!/usr/bin/env node
/**
 * SmugMug Photography Gallery Importer
 *
 * Fetches Dance, Theatre, and Opera galleries from the SmugMug API,
 * downloads one representative thumbnail per album to /public/images/,
 * and outputs a TypeScript block ready to paste into lib/photography.ts.
 *
 * Usage:
 *   SMUGMUG_API_KEY=your_key node scripts/smugmug-import.mjs
 */

import { createWriteStream, promises as fs } from "node:fs";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const API_KEY = process.env.SMUGMUG_API_KEY;
if (!API_KEY) {
  console.error("Error: SMUGMUG_API_KEY env var is required");
  process.exit(1);
}

const BASE_URL = "https://api.smugmug.com/api/v2";
const IMAGES_DIR = path.resolve("public/images");

// Known category node IDs
const CATEGORIES = [
  { name: "Dance", nodeId: "9CJDKt" },
  { name: "Theatre", nodeId: "LGk9Sg" },
  { name: "Opera", nodeId: "GmCHKZ" },
];

// Album keys already in the site — skip these
const SKIP_ALBUM_KEYS = new Set(["S8gZ75"]);

async function smugmugGet(apiPath) {
  const separator = apiPath.includes("?") ? "&" : "?";
  const url = `${BASE_URL}${apiPath}${separator}APIKey=${API_KEY}&_accept=application/json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`SmugMug API ${res.status} for ${url}`);
  }
  return res.json();
}

async function fetchAllPages(apiPath) {
  const allItems = [];
  let start = 1;
  const count = 100;

  while (true) {
    const separator = apiPath.includes("?") ? "&" : "?";
    const data = await smugmugGet(
      `${apiPath}${separator}count=${count}&start=${start}`
    );
    const response = data.Response;
    const pages = response.Pages;

    const key = Object.keys(response).find(
      (k) => k !== "Uri" && k !== "Pages" && Array.isArray(response[k])
    );
    if (key) {
      allItems.push(...response[key]);
    }

    if (!pages || !pages.NextPage) break;
    start += count;
  }

  return allItems;
}

async function getImageSizes(imageKey) {
  const data = await smugmugGet(`/image/${imageKey}-0!sizes`);
  return data.Response?.ImageSizes ?? null;
}

async function getNodeChildren(nodeId) {
  return fetchAllPages(`/node/${nodeId}!children`);
}

async function getAlbumImages(albumKey) {
  return fetchAllPages(`/album/${albumKey}!images`);
}

// Recursively collect all albums under a node
async function collectAlbums(nodeId, categoryName) {
  const children = await getNodeChildren(nodeId);
  const albums = [];

  for (const child of children) {
    if (child.Type === "Album") {
      const albumUri = child.Uris?.Album?.Uri ?? "";
      const albumKey = albumUri.split("/").pop();
      albums.push({
        name: child.Name,
        nodeId: child.NodeID,
        albumKey,
        category: categoryName,
      });
    } else if (child.Type === "Folder") {
      const sub = await collectAlbums(child.NodeID, categoryName);
      albums.push(...sub);
    }
  }

  return albums;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pickSizeUrl(sizes) {
  if (!sizes) return null;
  return (
    sizes.X3LargeImageUrl ||
    sizes.X2LargeImageUrl ||
    sizes.XLargeImageUrl ||
    sizes.LargeImageUrl ||
    sizes.MediumImageUrl ||
    null
  );
}

async function downloadFile(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed ${res.status}: ${url}`);
  const out = createWriteStream(destPath);
  await pipeline(res.body, out);
}

// Fetch sizes for a batch of images with concurrency control
async function fetchSizesInBatches(images, concurrency = 5) {
  const results = new Array(images.length).fill(null);

  for (let i = 0; i < images.length; i += concurrency) {
    const batch = images.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map((img) =>
        getImageSizes(img.ImageKey).catch((e) => {
          console.error(`    Size fetch failed for ${img.ImageKey}: ${e.message}`);
          return null;
        })
      )
    );
    for (let j = 0; j < batchResults.length; j++) {
      results[i + j] = batchResults[j];
    }
  }

  return results;
}

async function main() {
  await fs.mkdir(IMAGES_DIR, { recursive: true });

  const results = [];

  for (const category of CATEGORIES) {
    console.error(`\nFetching ${category.name} (node: ${category.nodeId})...`);
    const albums = await collectAlbums(category.nodeId, category.name);
    console.error(`  Found ${albums.length} album(s)`);

    for (const album of albums) {
      if (SKIP_ALBUM_KEYS.has(album.albumKey)) {
        console.error(`  Skipping ${album.name} (already in site)`);
        continue;
      }

      console.error(`  Processing: ${album.name} (key: ${album.albumKey})`);

      let images;
      try {
        images = await getAlbumImages(album.albumKey);
      } catch (e) {
        console.error(`    Error fetching images: ${e.message}`);
        continue;
      }

      if (!images.length) {
        console.error(`    No images found, skipping`);
        continue;
      }

      console.error(`    ${images.length} images — fetching sizes...`);

      const sizesList = await fetchSizesInBatches(images);

      const slug = slugify(album.name);
      const coverSizes = sizesList[0];
      const coverUrl = pickSizeUrl(coverSizes);
      const thumbUrl = images[0].ThumbnailUrl;

      // Download thumbnail (use thumbnail URL since it's smaller)
      const ext = path.extname(images[0].FileName || ".jpg") || ".jpg";
      const thumbFilename = `smugmug-${slug}${ext}`;
      const thumbPath = path.join(IMAGES_DIR, thumbFilename);

      const downloadUrl = coverUrl ?? thumbUrl;
      if (downloadUrl) {
        try {
          await downloadFile(downloadUrl, thumbPath);
          console.error(`    Downloaded thumbnail: ${thumbFilename}`);
        } catch (e) {
          console.error(`    Thumbnail download failed: ${e.message}`);
        }
      }

      // Collect gallery URLs
      const galleryUrls = sizesList
        .map(pickSizeUrl)
        .filter(Boolean);

      results.push({
        slug,
        title: album.name,
        category: category.name,
        thumbFilename: downloadUrl ? thumbFilename : "",
        galleryUrls,
      });
    }
  }

  // Output TypeScript
  console.log("\n// ===== PASTE INTO lib/photography.ts =====\n");
  for (const r of results) {
    console.log(`  // [${r.category}]`);
    console.log(`  {`);
    console.log(`    slug: "${r.slug}",`);
    console.log(`    title: "${r.title}",`);
    console.log(`    company: "", // TODO: fill in company/venue`);
    console.log(`    year: 0, // TODO: fill in year`);
    if (r.thumbFilename) {
      console.log(`    image: "/images/${r.thumbFilename}",`);
    }
    console.log(`    gallery: [`);
    for (const url of r.galleryUrls) {
      console.log(`      "${url}",`);
    }
    console.log(`    ],`);
    console.log(`  },`);
  }

  console.log("\n// ===== END =====");
  console.error(`\nDone. ${results.length} album(s) processed.`);
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
