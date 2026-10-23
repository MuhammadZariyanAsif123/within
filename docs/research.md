# Design research (Awwwards)

**Method.** No Awwwards MCP server was connected in this session (the only failed server was `ux-auditor`, which is not Awwwards). The research below was done on awwwards.com directly, using the wellness, community and membership category listings plus each site's Awwwards page. Dates are as shown on Awwwards.

**Limits.** Awwwards pages give scores, tags, palettes and highlighted elements, but little visual description. I did not open the live sites. Where a note below is an inference from tags or descriptions, it is marked *(inferred)*. Nothing here was copied: no layouts, text or assets.

## Sites studied

| Site | Award on Awwwards | What the page shows |
|---|---|---|
| Vibrant Wellness (Noomo Agency) | Site of the Day, 20 Feb 2026; Developer Award | Two-colour blue palette (#8EBEF9, #0774C4). Tags: 3D, WebGL, storytelling, unusual navigation. Dev jury scored accessibility 7.2. |
| Sleep Well Creative (Victor Work) | Site of the Day, 28 Jan 2026; Developer Award | Deep blue #0042AF with pale cream #FEF1D0. Single page, illustration-led, storytelling. Dev jury scored accessibility only 6.4. |
| Dhun Wellness (planecrazy) | Nominee, 29 Jul 2025 | Described as "a serene interface built for clarity and calm": slow sensory animation, scroll-based image reveal, concern-based filters. |
| Antara Spa Wellness | Honorable Mention, 7 Feb 2025 | Deep green #425E40. Tags: parallax, storytelling, transitions. Stated goal: show visitors they can still find time for themselves. |
| The Drool Creative Community | Honorable Mention, 5 Sep 2026 | Charcoal #212121 with mint #AAF0CE. Headline pitches "a safe space" for a specific group. Highlights community onboarding as a key element. |
| The Renée Crown Wellness Institute (Studio_DAD) | Nominee, 8 May 2026 | Tags: clean, institution. Highlights one long storytelling page rather than many screens. |
| Readymag NYC Community Event | Nominee, 26 Mar 2026 | Event page whose highlighted elements are the registration form and a short "highlights" block. |

Also looked at: the Awwwards *membership* listing (only three entries, none relevant to peer communities), and the community listing, which is mostly agency and event sites.

## What I borrowed (ideas only)

1. **Two-colour restraint.** Vibrant Wellness, Sleep Well and Drool each use two main colours. Within already has a five-colour palette, so the page uses ink and glacier as the two big fields, with sun as the only accent. *Applied to:* section backgrounds alternate fog, glacier and ink; sun is reserved for the banner, the CTA, the rising sun and small markers.
2. **One strong hero moment, then quiet.** The SOTD wellness sites put the effort into a single opening scene. Within does the same with one sun that rises once, and no other animation on the page. This also keeps the Developer-jury weak spot in view: accessibility scored lowest on both SOTD sites, so reduced motion and visible focus are built in from the start.
3. **Calm pacing.** Dhun's "clarity and calm" brief *(inferred: slow, generous spacing)* became large vertical padding and short sections, one idea per screen.
4. **Specific audience in the first line.** Drool opens by naming exactly who it is for. Within's hero and the "who it is for / not for" section do the same for founders.
5. **Time-poor framing.** Antara's goal (visitors can still find time for themselves) matches Within's audience, so copy stays short and nothing asks for more than two details.
6. **Registration as a first-class element.** Drool and Readymag both highlight the sign-up flow itself. The waitlist form gets its own full-width section with three controls only.
7. **Single-page storytelling.** Sleep Well and the Crown Institute lean on one narrative scroll. Within is one page with one path: understood, explained, convert.

## What I deliberately did not take

- WebGL, 3D and heavy scroll-jacking. They suit the winners but fight the "calm, grounded, no hype" brief and hurt accessibility and load time.
- Dark-with-neon, luxury spa imagery and stock wellness photography.
- Identical card grids. Pillars are a staggered list, steps are a path with markers, and the audience split uses two differently shaped panels.

## Type and scale decisions

- Headings and UI: Bricolage Grotesque. Display size runs from about 40px on a phone to 92px on desktop, with tight tracking.
- Body: Source Serif 4 at about 17 to 20px, line height 1.6.
- Section headings sit between those at roughly 30 to 52px, giving three clear levels.

## Round 2: live-site pass (UI update)

No Awwwards MCP was available, so I opened three winners in Chrome. Observations are from what loaded on screen and from computed styles, not from source code.

- **Sleep Well Creatives** (SOTD): a single small mark and one word as a loader, a grainy warm background, editorial serif display (34px h1) over tiny light UI text (13 to 16px). Borrowed: a fine static grain over the page, and the strong size contrast between display and UI text.
- **Dhun Wellness** (nominee): a light background, an italic serif display h1 (about 45px) and small uppercase sans for navigation. Borrowed: italic serif accent words inside the display headings (Source Serif italic inside Bricolage). Not borrowed: the uppercase labels.
- **Drool Community** (HM): an illustrated desk scene on a grid, playful. Wrong mood for Within, so nothing was taken beyond noting that the first screen carries one idea.

### Changes made from this
- Italic serif accent words in every section heading.
- Larger hero type (up to 112px), a three-layer ridge with a soft sun glow, and one sun-rise animation as before.
- Ridge-shaped section edges replace flat colour joins.
- Two-column sections with a sticky heading for offer and waitlist.
- Pillars as a list with line glyphs; steps as a dashed trail (horizontal on desktop).
- The next gathering as one outlined panel; the footer wordmark scaled up.
- Static paper grain overlay.

## Round 3: awwwards-mcp (npm `awwwards-mcp` 1.12.0)

Queried the MCP server directly over stdio on 2026-10-23: `search_sites`, `get_site_details`, `create_design_brief`, `search_elements`, `list_categories`.

**What it returned**
- Its free-text search matches titles and tags only, and the tag list has no wellness, health or community tag. Searches for "wellness", "community" and "membership" returned nothing. Tag and colour searches mostly returned design-agency sites.
- Site details matched what the Awwwards pages already showed: palettes, tags, award and jury scores, and named design elements. No typography, spacing or layout data.
- `search_elements` returned no results for forms or footers.
- Live-capture, page-structure and motion tools need Playwright (and ffmpeg-static), which are not installed, so they were not run.

**Design brief (4 references: Sleep Well, Vibrant Wellness, Signal-A, Drool)**
- Shared signals: Web & Interactive 3/4; 3D, GSAP, storytelling, WebGL and Webflow 2/4 each.
- Its motion model, scroll and timing sections came back empty, and it states that no timing evidence was cached.
- Read against Within's brief: the shared signals (3D, WebGL, GSAP) are what Within deliberately avoids. Storytelling and single-page are the signals that carry over, and the current page already follows them. No design changes were made from this round.

## Round 4: live capture with awwwards-mcp

Installed Playwright, Chromium and ffmpeg-static globally, plus `awwwards-mcp` globally so it can find Playwright (the `npx` copy could not). The MCP entry now runs `awwwards-mcp` directly.

- `capture_live_site` on **Dhun Wellness** (full page, 1440 x 10,928): warm cream ground, centred narrow text blocks, very generous whitespace, arch-topped image shapes, a giant faded wordmark in the footer, pill buttons.
- `analyze_page_structure` on Dhun: 14 bands, about 400 to 1,750px tall (long, content-rich spa site). Within's own page measured with the same tool: about 700 to 900px per section, 6,300px total. Pacing is steady, so it was left alone.
- **Borrowed (idea only):** the arch form. "Next gathering" is now a centred arch-topped panel, with the waitlist button inside it.
- **Not borrowed:** photography, the cream and red palette, the logo-wall and press sections (Within has no press or partners).

## Round 5: Kinective as a reference

Captured kinective.com full page (1440 x 7200) and measured its bands with `awwwards-mcp`. It is a premium fitness club, so most of its character comes from photography, which Within does not have and must not invent.

**Borrowed (ideas only):**
- A split hero: a solid text panel beside a full-height scene.
- Light-weight, large display type on a calm ground (headings are now weight 300 with the italic serif accent).
- Sections that pair text with a big visual on the opposite side, flat colour joins and generous space.
- A quiet, centred footer with a large thin wordmark.
- Quiet text links with an underline instead of a second button.

**Not borrowed:** photographs, copy, imagery, colour palette, the oversized wordmark laid across the hero, the cream and black scheme, the member app and kids-club style feature cards. The visuals are Within's own ridge illustrations in its own palette.

## Round 6: full layout rebuild on the reference's structure

Rebuilt the page on the section structure captured from kinective.com (video hero with nav and giant wordmark, split statement band, big-image-plus-text intro, alternating text/image features, image tiles, centred dark footer), using Within's content. Media is one free stock clip from Mixkit plus stills cut from it; see README. Each crop of a 720p still is soft, so real photography is the main remaining design gap.
