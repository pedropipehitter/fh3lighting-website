#!/usr/bin/env node

import path from "node:path";
import { promises as fs } from "node:fs";

const SOURCE_URL = "https://franciscohermosilloiii.com/lighting-design-1";
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const HEADING_TO_SLUG = new Map([
  ["holiday inn", "holiday-inn"],
  ["nebraska wesleyan university", "holiday-inn"],
  ["the marriage of figaro", "the-marriage-of-figaro"],
  ["shakesfear", "shakesfear"],
  ["eugene onegin", "eugene-onegin"],
  ["our town", "our-town"],
  ["traveling shoes", "traveling-shoes"],
  ["evenings of dance at the lied center", "evening-of-dance-2021"],
  ["student dance project", "student-dance-projects"],
  ["textiles, merchandising, & fashion design department installation", "tmfd-department-installation"],
]);

const EXPECTED_COUNTS = {
  "holiday-inn": 9,
  "the-marriage-of-figaro": 6,
  shakesfear: 7,
  "eugene-onegin": 6,
  "our-town": 10,
  "traveling-shoes": 7,
  "evening-of-dance-2021": 5,
  "student-dance-projects": 5,
  "tmfd-department-installation": 6,
};

const REQUEST_HEADERS = {
  "User-Agent": USER_AGENT,
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  Referer: "https://franciscohermosilloiii.com/",
};

function decodeHtml(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeHeading(value) {
  return decodeHtml(value).toLowerCase();
}

function sanitizeFileName(value) {
  return value.replace(/[<>:"/\\|?*\x00-\x1F]/g, "-");
}

function splitExt(fileName) {
  const ext = path.extname(fileName);
  if (!ext) return { base: fileName, ext: "" };
  return { base: fileName.slice(0, -ext.length), ext };
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: REQUEST_HEADERS,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function fetchBytes(url) {
  const response = await fetch(url, {
    headers: REQUEST_HEADERS,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image ${url}: ${response.status} ${response.statusText}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  return buffer;
}

function collectHeadingImages(html) {
  const tokenRegex =
    /<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>|(?:data-image|href)="https:\/\/images\.squarespace-cdn\.com\/content\/v1\/[^"]+"/gi;

  const byHeading = new Map();
  let currentHeading = null;
  let match;

  while ((match = tokenRegex.exec(html)) !== null) {
    const token = match[0];

    if (token.startsWith("<h")) {
      const heading = decodeHtml(token);
      if (heading) {
        currentHeading = heading;
        if (!byHeading.has(currentHeading)) {
          byHeading.set(currentHeading, []);
        }
      }
      continue;
    }

    if (!currentHeading) continue;

    const url = token.replace(/^(?:data-image|href)="/, "").replace(/"$/, "");
    byHeading.get(currentHeading).push(url);
  }

  return byHeading;
}

function mergeToSlugBuckets(byHeading) {
  const urlsBySlug = new Map();
  const seenBySlug = new Map();

  for (const [heading, urls] of byHeading.entries()) {
    const slug = HEADING_TO_SLUG.get(normalizeHeading(heading));
    if (!slug) continue;

    if (!urlsBySlug.has(slug)) {
      urlsBySlug.set(slug, []);
      seenBySlug.set(slug, new Set());
    }

    const slugUrls = urlsBySlug.get(slug);
    const seenUrls = seenBySlug.get(slug);

    for (const url of urls) {
      if (seenUrls.has(url)) continue;
      seenUrls.add(url);
      slugUrls.push(url);
    }
  }

  return urlsBySlug;
}

async function downloadSlugImages(slug, urls) {
  const dir = path.join(process.cwd(), "public", "images", "lighting-design", slug);
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir, { recursive: true });

  const usedNames = new Set();
  const localPaths = [];

  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const rawName = decodeURIComponent(path.basename(pathname)) || "image";
    const sanitizedName = sanitizeFileName(rawName);

    let fileName = sanitizedName;
    if (usedNames.has(fileName) || (await fileExists(path.join(dir, fileName)))) {
      const { base, ext } = splitExt(sanitizedName);
      let suffix = 2;

      while (
        usedNames.has(`${base}-${suffix}${ext}`) ||
        (await fileExists(path.join(dir, `${base}-${suffix}${ext}`)))
      ) {
        suffix += 1;
      }

      fileName = `${base}-${suffix}${ext}`;
    }

    const fileBuffer = await fetchBytes(url);
    await fs.writeFile(path.join(dir, fileName), fileBuffer);

    usedNames.add(fileName);
    localPaths.push(`/images/lighting-design/${slug}/${fileName}`);
  }

  return localPaths;
}

function validateCounts(manifest) {
  const failures = [];

  for (const [slug, expected] of Object.entries(EXPECTED_COUNTS)) {
    const actual = manifest[slug]?.length ?? 0;
    if (actual !== expected) {
      failures.push(`${slug}: expected ${expected}, got ${actual}`);
    }
  }

  if (failures.length > 0) {
    throw new Error(`Count validation failed:\n${failures.join("\n")}`);
  }
}

async function writeManifest(manifest) {
  const manifestPath = path.join(process.cwd(), "lib", "lightingDesignGalleries.ts");
  const slugs = Object.keys(manifest).sort((a, b) => a.localeCompare(b));

  const lines = [
    "// This file is auto-generated by scripts/import-lighting-design-galleries.mjs",
    "// Do not edit manually.",
    "",
    "export const lightingDesignGalleries: Record<string, string[]> = {",
  ];

  for (const slug of slugs) {
    lines.push(`  \"${slug}\": [`);
    for (const image of manifest[slug]) {
      lines.push(`    \"${image}\",`);
    }
    lines.push("  ],");
  }

  lines.push("};", "");

  await fs.writeFile(manifestPath, lines.join("\n"));
}

async function main() {
  const html = await fetchText(SOURCE_URL);
  const byHeading = collectHeadingImages(html);
  const bySlug = mergeToSlugBuckets(byHeading);

  const manifest = {};

  for (const slug of Object.keys(EXPECTED_COUNTS)) {
    const urls = bySlug.get(slug) ?? [];
    manifest[slug] = await downloadSlugImages(slug, urls);
  }

  validateCounts(manifest);
  await writeManifest(manifest);

  console.log("Imported lighting design galleries:");
  for (const slug of Object.keys(EXPECTED_COUNTS)) {
    console.log(`- ${slug}: ${manifest[slug].length}`);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
