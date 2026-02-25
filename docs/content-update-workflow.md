# Content Update Workflow

Use this workflow whenever adding or editing portfolio/programming content.

## Files that hold content

- `lib/shows.ts`: lighting design projects
- `lib/photography.ts`: photography projects + gallery image URLs
- `lib/programming.ts`: programming credits table

## Update process

1. Create a new branch from `main`:
   - `git checkout -b content/<short-change-name>`
2. Make content edits in the correct `lib/*.ts` file.
3. Validate:
   - `npm run lint`
   - `npm run build` (if network allows font fetch)
4. Verify in local dev server:
   - `npm run dev`
5. Commit and push branch.
6. Merge into `main` only after review/approval.

## Content quality checklist

- [ ] Slug is unique and URL-safe (lowercase, hyphenated).
- [ ] Title, role/company, venue/location, and year are present and correct.
- [ ] `image` path exists in `public/images` (for local images).
- [ ] Gallery URLs open and load correctly.
- [ ] Credits names/roles are spelled correctly.
- [ ] New content appears in listing page and detail page.
- [ ] Metadata title/description still reads correctly on the updated page.

## Naming conventions

- Slugs: kebab-case, stable, no dates in slug unless required.
- Local image files: keep original filename unless renaming for clarity.
- Year fields:
  - numeric year for single-year credits
  - string only if a range or special text is required

## Safe edit notes

- Do not reorder existing entries unless intentional.
- Keep interfaces in each `lib/*.ts` file in sync with added fields.
- Prefer additive changes over deleting historical credits/projects.
