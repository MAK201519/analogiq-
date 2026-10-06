# Claude Code brief: /audit landing page

Build the landing page for the Savoy event card at the route **/audit**. The route is printed on 50 business cards, so it is fixed. Work one step at a time and stop for review after each.

## Source material

- `audit.html` in this folder is the approved page: copy, section order, Calendly embed and form. Treat its copy as final and its CSS as a reference for spacing and hierarchy, not something to port. The site's own Tailwind and design tokens apply.
- Content is hard-coded in page files on this site; follow that pattern. Do not introduce a data file.

## Step 1: look before building

List what already exists and report back before writing anything:

1. How the event pages at `app/events/[slug]/page.tsx` achieve the sealed layout (no site nav, no footer nav, banner excluded). Confirm whether the exclusion in `NavigationBar.tsx` is by `/events/` path prefix, because `/audit` will not match it.
2. The full-width greyscale client-logo strip on the home page (headed "The clients who trusted us with the hard part."): file name, props, whether it scrolls, and which logos it renders from `public/clients/`.
3. The contact form component or markup used on `/contact`, and how it posts to `/.netlify/functions/contact` (field names: full-name, email, organisation, role, enquiry-type, message; success redirect to `/contact-success`).
4. Whether a team or person card component exists that renders Steve and Mario with headshots from `public/team/`.
5. The shadcn components installed (from `package.json`) that are useful here: Card, Button, Input, Textarea.

## Step 2: route and layout

- Create `app/audit/page.tsx`. Reuse the sealed layout from the event pages. If the sealed behaviour lives in a layout file under `app/events/`, either move it to a shared layout or add `/audit` to the exclusion rule in `NavigationBar.tsx` (dated comment explaining why).
- Metadata: title "Book a free two-hour AI audit · analogiq", `robots: { index: false, follow: false }`. Do not add the page to `public/sitemap.xml`.
- Add a redirect in `netlify.toml` so `/audit/` with a trailing slash and `/Audit` both resolve to `/audit`.

## Step 3: sections, in order, each taken from audit.html

Copy is final in audit.html; lift it verbatim. The order:

1. **Header bar**: wordmark linking to the home page, "Analogue intelligence" tag on the right. No nav.
2. **Hero**, two columns on desktop, stacked on mobile:
   - Left: eyebrow, h1 "Book a free two-hour AI audit.", the three lede paragraphs (who Analogiq is; what the audit is; the line saying the calendar books the 30-minute call), and the "Rather ask something first?" line linking to `#contact`.
   - Right: a primary button "Book the 30-minute call" opening `https://calendly.com/mario-analogiq/30min` in a new tab, then the Calendly inline widget beneath it. Load the widget with `next/script` (`https://assets.calendly.com/assets/external/widget.js`, strategy `lazyOnload`) and a div with `className="calendly-inline-widget"` and `data-url="https://calendly.com/mario-analogiq/30min?hide_gdpr_banner=1&primary_color=5b2bd9"`, min height 700px. The button must work even if the script does not load.
3. **What does the audit involve**: eyebrow, h2 "Two hours in total. One page back.", lede, four numbered step cards (30-minute call; 90-minute session; a day of ours; one page within a week), then two wider cards side by side ("What the page says"; "What it does not include, and what follows"). Use the existing card styling. On mobile everything stacks.
4. **What did the room say**: eyebrow, h2, lede, six blocks in a two-column grid, each with a bold heading, the paragraph, and the final question in bold.
5. **Proof**: eyebrow "Who we have done this for", h2 "The clients who trusted us with the hard part." Beneath it, a variant of the existing full-width greyscale client-logo strip from the home page: same component, same logos from `public/clients/`, same behaviour. Build it as a reusable variant (a prop or thin wrapper), dated comment. No paragraphs.
6. **Not ready for two hours?**: eyebrow, h2 "Two smaller things.", one paragraph with a link to `https://www.meetup.com/ai-in-the-wild`.
7. **Contact** (`id="contact"`), dark band: hello@analogiq.io, steve@analogiq.io and mario@analogiq.io as mailto links, a "Book the 30-minute call" link to Calendly, and the site's existing contact form component with `enquiry-type` preset to "AI audit" via a hidden field and the message label changed to "Your question". If the component does not allow those two changes, copy its markup with a dated comment pointing at the original. No phone numbers anywhere on the page.
8. **Footer**: one line, "analogiq · analogue intelligence", link to analogiq.io. No footer nav.

## Step 4: checks before commit

- `/audit` renders with no site nav or banner on desktop and on a 390px viewport.
- The "Book the 30-minute call" button opens the Calendly page; the inline widget renders on localhost.
- The form posts to the function and lands on `/contact-success`; the email arrives with enquiry-type "AI audit".
- The page is absent from the sitemap and carries the noindex meta.
- No em dashes anywhere in the copy; sentence case headings; British spelling.
- Lighthouse mobile layout: nothing scrolls sideways.

Commit as "Add /audit landing page for Savoy card". Mario pushes.
