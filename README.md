# Shifa Medical Centre — website

Next.js 15 (App Router) + Tailwind CSS + TypeScript. Patient-facing site, a WhatsApp
booking flow, and an unlisted investor brief.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Pages

| Route        | What it is                                                        |
| ------------ | ----------------------------------------------------------------- |
| `/`          | Home — hero, departments, why-us, work, reviews, map               |
| `/services`  | The nine departments with what's included and published rates      |
| `/gallery`   | "Our work" — facility, camps, treatment results, team (filterable) |
| `/about`     | Story, approach, ten-year timeline                                 |
| `/contact`   | Phone, WhatsApp, email, timings, map, directions                   |
| `/investors` | **Unlisted** investor brief. Not in the nav, not in the sitemap, `noindex`. |

## Change the content — start here

Everything on the site is driven by five files. No page component needs editing to
change clinic details.

| File                        | Controls                                                     |
| --------------------------- | ------------------------------------------------------------ |
| `src/data/clinic.ts`        | **Name, phone, WhatsApp number, address, map, hours, insurers** |
| `src/data/services.ts`      | Departments, descriptions, what's included, prices            |
| `src/data/gallery.ts`       | "Our work" items and their photos                             |
| `src/data/testimonials.ts`  | Patient quotes                                                |
| `src/data/investor.ts`      | Everything on `/investors`                                    |
| `src/data/specialities.ts`  | The "Medical fields" cards on the home page                    |

### First three things to change

1. **`phone` / `phoneHref` / `whatsapp` in `src/data/clinic.ts`** — every call-to-action
   on the site points at these. WhatsApp takes a country code, no `+`, no spaces
   (e.g. `919846012345`).
2. **`mapEmbed` and `mapLink`** — from Google Maps → Share → Embed a map.
3. **`heroImage`** — the building photograph, see below.

## The hero photograph

Save the photo of the building as `public/hero/facade.jpg`. It is shown **full frame**,
never cropped, so the whole facade and the signboard stay visible. Landscape, about
2000px wide, under 500 KB. A 4:3 frame fits the declared box exactly; any other ratio
still shows in full, the plate just changes height.

Set `heroImage: ""` in `src/data/clinic.ts` and the hero falls back to a designed navy
glass panel instead.

## Photos

The site ships with designed placeholder tiles so nothing looks broken before the
photography arrives. To use real photos:

1. Drop images into `public/gallery/`.
2. Add the path to the matching item in `src/data/gallery.ts`, e.g.
   `image: "/gallery/op-wing.jpg"`.

Anything without an `image` keeps rendering its placeholder tile — you can swap them
in one at a time.

## The admin content manager

`/admin` lets staff change the phone number, address, map link and OP timings without
a developer. It is a real login, not a decorative one:

* The password is checked **on the server** and never reaches the browser or the
  JavaScript bundle. Compare that with a client-side check, where anyone can read the
  password with View Source.
* The session is an **httpOnly, HMAC-signed cookie** — no script on the page can read
  it and it cannot be forged without `SESSION_SECRET`.
* Saved edits go to a **shared store**, so everyone sees them — not to one browser's
  localStorage, where nobody else ever would.
* Five wrong passwords locks the form for a minute.
* `/admin` is `noindex` and disallowed in `robots.ts`.

### Setting it up

```bash
cp .env.example .env.local
```

Fill in:

| Variable | What it is |
| --- | --- |
| `ADMIN_PASSWORD` | what staff type at `/admin/login` |
| `SESSION_SECRET` | signs the cookie — `openssl rand -base64 32` |
| `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` | where edits are stored in production |

Without the Upstash pair, edits save to `.content/site.json`. That works on your own
machine and on a VPS with a real disk. **It will not work on Vercel**, where the
filesystem is wiped between requests — the admin page says so in a banner when it
detects that backend. A free Upstash Redis database fixes it with two environment
variables and no code change.

### What is editable, and what isn't

`src/lib/content.ts` lists the editable fields — identity, contact, address, timings.
Everything else (department descriptions, prices, the gallery, the investor page) still
lives in the data files, so a change there goes through a code review before it ships.
That split is deliberate: the values that go stale are editable, the ones that carry
clinical or pricing claims are not.

## No online booking

The site deliberately has no appointment form and no doctor directory. Every
call-to-action goes to the phone number or to WhatsApp, and the clinic's OP hours are
shown in the header, the hero bar, the footer and on `/contact`.

If you want online booking back later, the pieces to build are a form component and a
route handler at `src/app/api/book/route.ts`; nothing in the current structure blocks
it.

## The investor page

`/investors` is deliberately unlinked: not in the nav, not in the sitemap, `noindex`
in metadata and disallowed in `robots.ts`. Anyone with the URL can still open it, so
if the numbers become sensitive, put it behind Vercel password protection or a
middleware check before sharing.

**Every figure in `src/data/investor.ts` is an illustrative placeholder.** Replace
them with real, audited numbers before that link goes to anyone.

## Deploying

Push to a Git repo and import it on Vercel — no configuration needed. Set the real
domain in `metadataBase` (`src/app/layout.tsx`) and in `src/app/sitemap.ts`.

## Fonts

Outfit (display) and Plus Jakarta Sans (body) load from Google Fonts via a `<link>`
in `src/app/layout.tsx`, rather than `next/font`, so the project builds on machines
without outbound access to `fonts.googleapis.com`. Self-host the woff2 files if you
want fully offline builds.
