# Within: launch site prototype

A one-page concept preview for **Within**, a founder peer community run by Kuba Domanus. Vite + React + TypeScript, plain CSS, no UI kit.

> Concept preview prepared for Within by Zariyan. Draft copy, not a live site.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

Language: use the EN/PL toggle, or open `/?lang=pl` or `/?lang=en`. The `<html lang>` attribute, page title and meta description follow the chosen language.

## What is where

| Path | Purpose |
|---|---|
| `src/dictionary.ts` | Typed `Dict` interface plus the EN and PL copy. Polish must match the English shape or the build fails. |
| `src/i18n.tsx` | `I18nProvider` and the `useI18n()` hook (language, `t`, `setLang`). Reads `?lang=`, updates the URL and `<html lang>`. |
| `src/App.tsx` | Page sections. |
| `src/styles.css` | All styling and the single sun animation. |
| `docs/research.md` | Awwwards research notes. |

## Honesty rules in the build

- A sticky banner states this is a concept preview and draft copy.
- `<meta name="robots" content="noindex, nofollow">` is set.
- The "Within" wordmark is plain text. There is no logo, testimonial, member count, price, award, partner or statistic.
- The waitlist form sends nothing and stores nothing. On submit it shows "This is a preview, so nothing was sent." in an `aria-live` region.

## Accessibility notes

Skip link, visible double-ring focus, labelled fields, radio group with a `legend`, `aria-live` form status, `aria-pressed` language toggle, 44px+ touch targets. The only animation (the sun rising once on load) is disabled under `prefers-reduced-motion`. Checked for horizontal overflow at 360, 386 and 1280px wide.

## Placeholder / to confirm with Kuba

Everything below is an assumption, not a fact about the business.

**Audience (draft, informed assumption)**
- Founders and small-business owners, probably in Poland and Central Europe.
- Time-poor, under constant pressure, at risk of burnout and neglecting health.
- Often isolated; want peers and structure, not another course.
- Respond to calm, honest, specific language and distrust hype.

**Offerings (draft)**
- Three pillars: Health, Growth, Financial wellbeing.
- Health shown as training sessions; Growth as honest peer conversation; Financial wellbeing as a calmer approach to money. The one-line descriptions are illustrative.

**Gathering format (draft)**
- Three steps: show up, train and talk, leave with one clear next step.
- "Small group", "relaxed room", "no pitching" and "one thing to do this week" are invented to make the flow concrete.
- Group size, duration, location type, frequency and whether training is physical are all unknown.

**Who it is / is not for (draft)**
- The "is not for" list (no sales or investor networking, no guru or hustle plan, not therapy or medical care) is an assumed positioning. The medical disclaimer in particular should be reviewed.

**Next gathering**
- Date and place are placeholders ("to be announced").

**Waitlist**
- No backend, email service, consent wording or privacy policy exists. A real launch needs all three, plus a decision on where sign-ups go.
- The "What would help you most right now?" options are as briefed.

**Other**
- Tagline: "Keeping founders in the game. Less noise. More direction." is as briefed. The Polish version ("Pomagamy founderom wytrwać w grze. Mniej szumu. Więcej kierunku.") should be checked by a native speaker, as should the wording for "founder" (kept as an English loanword).
- The footer says "Within is run by Kuba Domanus." No contact details, social links or legal entity are included because none were provided.
- No domain, favicon or logo exists; the page uses an empty favicon on purpose.
- Fonts are bundled through `@fontsource-variable` (Bricolage Grotesque, Source Serif 4) rather than loaded from Google.

## Layout and media (updated)

The page now follows the structure of a premium fitness-club site: a fullscreen video hero with the nav over it and a giant light "Within" wordmark, a split statement band, alternating text/image sections, two image tiles, a quiet "next gathering" band, a photo-plus-form waitlist and a centred dark footer. Only the structure is borrowed. No text, photos, video, logo or code from that site is used.

**Media (placeholder, replace before launch)**
- `public/media/hero.mp4`: "The silhouette of a woman at sunrise", Mixkit clip 4397, 720p, Mixkit Stock Video Free License (free for commercial use, no attribution required; check the licence text before launch). Downloaded from mixkit.co with approval.
- `public/media/poster.jpg` and `still-1..4.jpg`: frames cut from that one clip with ffmpeg, used as the section "photos". They are soft because the source is 720p and out of focus.
- The ridge illustrations are drawn in code and belong to this project.
- None of this shows real Within members or events, and the footer says so. With `prefers-reduced-motion` the video does not autoplay and the poster frame shows instead.

**Also to confirm with Kuba**
- Real photography and video of Kuba's gatherings and training sessions, plus permission from anyone shown.
- Display headings now use Source Serif 4 in a light weight (the earlier design used Bricolage Grotesque for headings). Bricolage remains for navigation, labels and buttons.

**Hero update:** the hero is now two looping videos side by side (stacked on phones) with a large "WITHIN" wordmark across the seam. The second clip is Mixkit 43736, "People practicing yoga together" (`public/media/hero-2.mp4`, poster `poster-2.jpg`), same Mixkit Free licence, downloaded with approval. Both loops are muted, and with `prefers-reduced-motion` neither autoplays. The visible "WITHIN" is decorative (`aria-hidden`); the real page heading is the h1 "Keeping founders in the game."

**Hero montage (updated):** the hero now cycles through four split-screen scenes, each a pair of looping clips side by side, with "WITHIN" fixed across the seam (the same idea as the reference site). A scene lasts 5.5 s and cross-fades in 0.7 s. Only the current and next scene preload; the others stay paused. A pause button (bottom right) stops all motion, and with `prefers-reduced-motion` the hero stays on the first pair of still frames. Clips (all Mixkit Free licence, 720p, downloaded with approval): 4397, 43736, 4803, 43798, 33066, 45874, 40766, 43737, in `public/media/` (`hero*.mp4`, `clip-*.mp4`, with `.jpg` posters). Total about 28 MB, so compress or replace them before launch. All are stock placeholders.

**Section photos (updated):** each photo below the hero is a still from a different clip, so no image repeats: statement band = 43737 (studio stretch), "You already know this" = 45874 (boxer in a dark ring), "What Within is" = 40766 (runner on a bridge), "who it is for" tile = 33066 (cliff yoga at sunset), waitlist = 43798 (sky portrait). Files: `public/media/sec-*.jpg`. The three remaining visuals (small image beside the problem text, the "How a gathering works" image and the "not for you" tile) are drawn ridge illustrations. The hero montage still plays the same clips, in motion. Replace all of it with Kuba's own photography before launch.
