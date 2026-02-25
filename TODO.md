# TODO — fh3lighting-website

## Before going live

- [x] **Resume PDF** — drop `resume.pdf` into `public/` and push to main
  ```bash
  cp /path/to/resume.pdf /root/fh3lighting-website/public/resume.pdf
  cd /root/fh3lighting-website && git add public/resume.pdf && git commit -m "Add resume PDF" && git push
  ```

- [ ] **DNS cutover** — point `franciscohermosilloiii.com` to Vercel
  - In Squarespace DNS (or Cloudflare if transferred): set A record `@` → `76.76.21.21` and CNAME `www` → `cname.vercel-dns.com`
  - In Vercel project → Settings → Domains → add `franciscohermosilloiii.com`
  - Then cancel Squarespace hosting plan (keep domain-only if still registered there)

- [x] **Verify 3 possibly mismatched show images** — these were assigned by page position, not filename, so Francisco should confirm:
  - Eugene Onegin → `IMG_2856.JPG`
  - TMFD Department Installation → `IMG_0216.JPG`
  - Student Dance Projects → `IMG_8890.JPG`
  - To swap: replace the `image:` value in `lib/shows.ts` and push

## Nice to have

- [x] **Individual photography gallery pages** — currently show a 6-placeholder grid. Add real photos per project once Francisco supplies them (or scrape sub-pages from Squarespace gallery pages)
- [x] **Hero image** — homepage hero is a gradient placeholder. Could use one of the show photos as a full-bleed background
- [x] **Mobile nav** — current nav wraps on small screens; could collapse into a hamburger menu
- [x] **Lighting design show galleries from legacy site** — imported and organized per-show local image folders from Squarespace
- [x] **Lighting design detail page galleries + lightbox** — each matched show page now uses standard site lightboxing with hero-first gallery behavior
