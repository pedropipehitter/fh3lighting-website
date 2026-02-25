# CMS Path Evaluation

This repo currently stores content in TypeScript files under `lib/`.  
Below are the practical options for future content management.

## Option A: Keep TypeScript data files (`lib/*.ts`)

### Pros

- Fastest and simplest.
- Strong typing already in place.
- No external service dependency.

### Cons

- Requires Git + code edits for every content update.
- Non-technical collaborators cannot self-serve.

### Best for

- Solo maintenance with infrequent updates.

## Option B: MDX content files (`content/*.mdx`)

### Pros

- Easier editorial workflow than TS objects.
- Git-based review and versioning still intact.
- Can embed rich content blocks when needed.

### Cons

- Requires schema + parser setup.
- Still Git-driven; not truly non-technical.

### Best for

- Medium update frequency with occasional long-form writeups.

## Option C: Headless CMS (e.g., Sanity/Contentful)

### Pros

- Non-technical editing UI.
- Structured content models and drafts.
- Great for frequent updates and collaboration.

### Cons

- Added cost/ops complexity.
- API integration and preview workflow needed.
- Migration effort from current `lib/*.ts`.

### Best for

- High update velocity and multi-editor workflow.

## Recommendation

Use a staged approach:

1. Keep current `lib/*.ts` workflow now (already stable).
2. If updates become frequent, migrate to MDX first (lowest complexity jump).
3. Move to headless CMS only if multiple non-technical editors need direct access.

## Trigger to reconsider

Re-evaluate CMS choice if either is true:

- More than 2 content updates per week for 4+ consecutive weeks.
- More than 1 non-developer needs to edit portfolio content directly.
