# Lighthouse Baseline and Budget Targets

This project uses Lighthouse as a release quality gate for page performance and UX.

## Pages to test

- `/`
- `/lighting-design`
- `/production-photography`
- `/about`
- `/contact`

## Required score targets

- Performance: `>= 85`
- Accessibility: `>= 95`
- Best Practices: `>= 95`
- SEO: `>= 95`

## Web vitals targets

- Largest Contentful Paint (LCP): `<= 2.5s`
- Cumulative Layout Shift (CLS): `<= 0.1`
- Total Blocking Time (TBT): `<= 200ms`
- Speed Index: `<= 3.5s`

## How to capture baseline

1. Run local production server:
   - `npm run build`
   - `npm run start`
2. Run Lighthouse in Chrome DevTools (mobile + desktop) for each page listed above.
3. Save reports in `docs/performance/reports/` using file names:
   - `YYYY-MM-DD-home-mobile.html`
   - `YYYY-MM-DD-home-desktop.html`
4. Record summary metrics in the table below.

## Baseline tracking table

| Date | Route | Device | Perf | A11y | Best | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _TBD_ | `/` | Mobile |  |  |  |  |  |  |  |
| _TBD_ | `/` | Desktop |  |  |  |  |  |  |  |

## Release rule

Do not deploy if any score drops below the required targets or if LCP/CLS/TBT exceed the limits above without explicit approval.
