# TODO — fh3lighting-website

## Workflow note (going forward)

- [ ] **Branch-first feature workflow** — for every new feature/improvement:
  - Plan in detail on `todos` first.
  - Create a new feature branch from `main`.
  - Implement only on that feature branch.
  - Open PR and merge after review.

## Prioritized roadmap (with effort)

### P0 — Launch blockers (must complete before go-live)

- [ ] **Fix current lint failure in About page** — escape apostrophe in `app/about/page.tsx`  
  Effort: **XS (10–15 min)**

- [ ] **Finalize and merge typography alignment branch** (`squarespace-font-alignment`) to `main` after visual QA  
  Effort: **S (30–60 min)**

- [ ] **DNS cutover + domain verification** — point `franciscohermosilloiii.com` to Vercel and verify SSL  
  Effort: **M (1–2 hrs including propagation checks)**

### P1 — Core optimization (high impact)

- [ ] **SEO baseline** — add/expand metadata across pages:
  - `metadataBase`, canonical URLs, OpenGraph, Twitter card tags
  - Per-page/per-project descriptions
  - Add `app/sitemap.ts` and `app/robots.ts`  
  Effort: **M (2–4 hrs)**

- [ ] **Image performance pass**:
  - Add/verify `sizes` for all major `next/image` usage
  - Optimize local assets (convert heavy JPGs where practical)
  - Remove duplicate unused file `public/images/05022023-LNK-TPTGW-FH3-66.JPG`  
  Effort: **M (3–5 hrs)**

- [ ] **Accessibility pass (navigation + forms + lightbox)**:
  - Add focus-visible styles for interactive elements
  - Add dialog semantics/focus handling to `GalleryGrid` modal
  - Re-test keyboard navigation and labels  
  Effort: **M (3–5 hrs)**

### P2 — Quality, stability, and maintainability

- [ ] **CI quality gates** — run lint/build on PRs before merge  
  Effort: **S (1–2 hrs)**

- [ ] **Lighthouse baseline and budget targets** (mobile + desktop)  
  Effort: **S (1–2 hrs)**

- [ ] **Content update workflow** — define how new projects/credits are added (schema + checklist)  
  Effort: **M (2–4 hrs)**

### P3 — Post-launch growth features

- [ ] **Analytics events** — track CTA clicks, resume download, contact form submit  
  Effort: **S (1–3 hrs)**

- [ ] **Homepage featured work module** — highlight 3–4 key projects for faster conversion  
  Effort: **M (3–6 hrs)**

- [ ] **Optional content CMS path** — evaluate JSON/MDX vs lightweight headless CMS  
  Effort: **L (1–2 days, depending on choice)**
