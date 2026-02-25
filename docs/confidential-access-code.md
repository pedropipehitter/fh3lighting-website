# Confidential Portfolio Access Code

## Security model

The `/confidential` route is obscurity-gated, not cryptographically secured. The goal is to keep
private work off public search indexes and out of the main nav, not to protect state secrets. A
6-digit numeric code is sufficient for this purpose.

The access code lives in a `NEXT_PUBLIC_CONFIDENTIAL_CODE` environment variable. Because it is
prefixed `NEXT_PUBLIC_`, Next.js embeds it in the client bundle at build time. Anyone with devtools
can technically find it, which is intentional — this is portfolio access control, not authentication.

Unlock state is stored in `sessionStorage`, so it survives navigation within the same tab but clears
when the tab is closed.

## Setting the code in Vercel (production)

1. Open the Vercel dashboard and select the `fh3lighting-website` project.
2. Go to **Settings > Environment Variables**.
3. Add a new variable:
   - Name: `NEXT_PUBLIC_CONFIDENTIAL_CODE`
   - Value: your 6-digit code (e.g. `847291`)
   - Environments: Production (and Preview if you want it there too)
4. Click **Save**, then redeploy the project. The new code takes effect after the next build.

## Rotating the code

Repeat the steps above with the new value. After the deployment completes, any previously shared
URLs will require the new code. The old code stops working immediately.

## Testing locally

1. Open `.env.local` at the project root.
2. Set the value: `NEXT_PUBLIC_CONFIDENTIAL_CODE=123456` (use any 6 digits).
3. Restart the dev server (`npm run dev`).
4. Navigate to `http://localhost:3000/confidential` and enter your test code.

## Sharing access with a client

Send the client the direct URL and the code in separate messages (e.g., URL over email, code over
text). Do not include both in the same message. The page is not linked from the site nav and is
excluded from the sitemap and search index via `robots: { index: false }`.
