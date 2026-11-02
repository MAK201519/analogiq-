# Build brief: /events/from-search-to-suitcase

Invite-only roundtable breakfast landing page. Tuesday 8 December 2026, 8.30 to 10.30, Duck and Waffle, 110 Bishopsgate, London EC2N 4AY. Audience: marketing and digital leads at tour operators, airlines, cruise lines and hotel groups.

Reference files, all in this folder:

- `from-search-to-suitcase-mock.html`: the approved design and the complete copy, with the four venue photos embedded. Build to this. It is the source of truth for every word on the page.
- `event-from-search-to-suitcase-venue-1.jpg` to `-4.jpg`: the venue photos, for `public/img/`.
- This brief: wiring and rules.

Ignore any earlier brief or mock named "knowing-every-customer", and any earlier version of this brief that describes stat cards, a "now/next/later" table, demo cards or a "the band" section. None of those are on the page any more.

## Before building

Look before building. Audit the existing B2B workshop page at `/events/b2b-agentic-workforce` and report the real file paths for: the page route, the form component, the success state, the Zapier post, the venue section with photos and map, the host cards, the "can't make the date" section, and how SiteShell seals `/events/` routes. Report, then wait for approval. Then build one section at a time with approval at each step.

Clone the B2B page's structure and style. This page is in the same family: purple hero with the form, amber marquee, hard ink borders with offset shadows, tilted badge, running order on ink, audit offer on amber. Reuse the B2B components wherever they exist.

## Page structure (seven sections, in this order)

1. Header: wordmark, "Analogue intelligence", tag "In person · London · Breakfast".
2. Hero: question eyebrow, headline "From search to suitcase" with the amber line "AI agents in travel: now to 2030" beneath it, two short paragraphs, five facts (date, time, venue, format, for), the "analogiq builds bespoke AI systems..." line, and the seat-request form with the "Invitation only" badge hanging off its top-right corner. The badge must not overlap the card's text at any width; the mock positions it above the card edge and pads the card heading on the right.
3. Marquee: Now to 2030 ✦ Front stage ✦ Back stage ✦ Roundtable ✦ Breakfast included.
4. "Two questions every travel brand is now facing": two columns (front stage on white, back stage on ink), each a question headline, a paragraph, and three "On the morning" lines. Beneath them, full width, the "Where this goes" roadmap panel on ink with four points in two columns.
5. "A view of the next three years, and what to do about it now": on purple, one line, three outlined boxes.
6. Running order on ink: 8.30, 8.50, 9.20, 10.00, 10.30.
7. Venue (headline, four photos, map, address), then the closing section on lilac (who is it for, logo strip, three hosts), then the audit offer on amber, then the footer.

## Page rules

- Route: `app/events/from-search-to-suitcase/`.
- Sealed by SiteShell (matches `/events/`): no site nav, minimal header, one-line footer as the B2B page. Footer location line is "London" only.
- `noindex`, not in the sitemap, no card on the AI in the Wild hub. Invitation only.
- `netlify.toml`: capitalisation-variant redirects only. Never a trailing-slash redirect with `force = true`.
- Copy exactly as in the mock. British English, sentence case, no em dashes. Do not edit or "improve" copy.
- Fonts: Switzer from Fontshare, as the rest of the site.

## Form

- Fields: first name, last name, work email, company, role (as the B2B form), plus hidden `event` = `from-search-to-suitcase`. Match the B2B form's field names exactly so the Zapier mapping is a copy; if they differ from the mock's, use the B2B names and tell me.
- Posts to a Zapier Catch Hook in `NEXT_PUBLIC_ZAPIER_TRAVEL_BREAKFAST_WEBHOOK`. The env var must exist in Netlify before the build (baked in at build time). Tell me before the first deploy so I can add it.
- No `Content-Type` header on the request (a JSON header triggers a preflight and the CORS fails; Zapier parses the body anyway).
- Success state only after the webhook accepts. On failure: a retry and a mailto fallback to mario@analogiq.io.
- Success replaces the form with the confirmation card ("Thanks, we have your request.") and reveals the site navigation, as on the B2B page. The mock shows the state.
- No opt-in checkbox. Every submission goes to Brevo.

## Zapier and Brevo (after launch, done by hand)

- New Zap: Catch Hook, then Brevo "add or update contact", lists "travel breakfast december 2026" and "Website subscribers".
- Brevo automation triggered on joining "travel breakfast december 2026" sends the confirmation email, built in the automation as pasted HTML (templates made through the API do not show up there). Sender mario@analogiq.digital, reply-to mario@analogiq.io.
- Email subject: Your seat request, From search to suitcase, 8 December.
- Email body: Thanks for asking for a seat at From search to suitcase, our roundtable on AI agents in travel. It's on Tuesday 8 December at the Duck and Waffle, 110 Bishopsgate, from 8.30 to 10.30. We'll be in touch to confirm your seat. If anything changes, reply to this email. Mario

## Assets

- Venue photos: the four JPGs in this folder go to `public/img/` under their existing names. Photos 3 and 4 are low resolution (about 480px wide) and photo 4 carries a listing-site watermark; use them for now and swap when better versions arrive. Do not upscale.
- Host portraits: Mario, Steve and Ruairi from `public/team/`, titles only (Co-founder, Co-founder, AI consultant), in the B2B page's portrait-card treatment, three across.
- Client logos: the shared greyscale `LogoStrip` component (`app/components/LogoStrip.tsx`) under "Who we've worked with". The mock has seven placeholder boxes; use the real strip.
- "Can't make the date?" section links to `/audit`, as on the B2B page.
- Google Maps embed for 110 Bishopsgate, London EC2N 4AY, gated behind Cookiebot marketing consent (`type="text/plain"` and `data-cookieconsent="marketing"`), with an "Open in Google Maps" link shown when consent is absent.

## Fidelity

Desktop mock first, then check mobile against it. The mock is the reference for type scale, colour blocks and section order. If something is awkward in Next.js, drop in this order: marquee first, tilts second, shadows last, keeping type scale and colour blocks. One task at a time, review before proceeding. Comment out rather than delete, with dated comments.

## Commit message

`Add From search to suitcase event page (/events/from-search-to-suitcase)`
