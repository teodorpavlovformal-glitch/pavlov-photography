# Full Website Build Playbook

Use this playbook when you want the AI to take a site from zero to live without skipping the important steps.

## 1. What "Complete" Means

A website is complete only when all of these are true:
- the visual direction is approved
- the homepage works
- supporting pages work
- mobile works on a real phone or LAN preview
- interactive elements work on touch
- the contact path is real
- assets are mapped cleanly
- GitHub is connected
- Vercel is deployed
- the owner understands how to update it later

## 2. Software, Accounts, And Setup

Minimum software:
- Node.js LTS
- npm
- Git
- a code editor such as VS Code
- a terminal, for example PowerShell on Windows
- Chrome or another modern browser

Accounts:
- GitHub account
- Vercel account
- form provider account if using Formspree or similar

Helpful optional software:
- Python 3 for asset scripts, data cleanup, and utility tasks
- ImageMagick or another image conversion tool for unsupported asset formats
- ffmpeg for video and media conversion
- GitHub Desktop or GitHub CLI if the user prefers them
- Vercel CLI for manual deployments or debugging

Physical QA setup:
- one real phone on the same Wi-Fi network as the dev machine
- access to the deployed Vercel URL

## 3. Start With A Real Brief

Before writing code:
1. fill out the website brief
2. lock the audience
3. lock the conversion goal
4. lock the tone
5. lock the page structure
6. lock the interaction model

Do not start implementation while the site is still vague.

## 4. Scaffold The Project

Recommended baseline:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint
- Vitest and Testing Library
- Playwright

Typical commands:

```powershell
npx create-next-app@latest my-site
cd my-site
npm install framer-motion lucide-react
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test
```

Core scripts to keep:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "test": "vitest run",
    "test:e2e": "playwright test"
  }
}
```

## 5. Establish The Content Architecture Early

Create structure for:
- shared UI primitives
- homepage sections
- supporting page views
- typed content models
- centralized content and data files
- route-aware navigation
- shared helpers for interactions and contact logic

Do not bury business content inside random JSX files.

Preferred separation:
- homepage content
- supporting-page content
- portfolio and archive content
- business metadata
- contact metadata

## 6. Build The Homepage First

Recommended homepage order for a premium service or portfolio site:
1. navbar
2. hero
3. about
4. services or pricing
5. optional specialty section such as videography
6. portfolio
7. before and after editing section
8. terms or process
9. reviews
10. FAQ
11. contact
12. footer CTA

Homepage rules:
- every section must earn its place
- remove duplicated review or helper sections
- remove dead labels and filler subheads
- if a card looks clickable, make it work

## 7. Add Supporting Pages

After the homepage is stable, add:
- about page
- services hub
- service detail pages
- portfolio archive
- optional portfolio detail pages

Route rules:
- keep navigation route-aware
- do not hardcode homepage-only anchor assumptions into the whole app
- link related content cleanly between homepage, service pages, and portfolio

## 8. Ship Real Interactions

Typical premium website interactions:
- fixed navbar
- mobile drawer
- tabbed pricing or package categories
- FAQ accordion
- reviews carousel
- filterable portfolio
- before and after slider
- floating mobile CTA
- smooth anchor navigation

Quality rule:
- never leave fake affordances
- never leave decorative controls that do nothing

## 9. Contact Flow Should Become Real

Good progression:
1. temporary `mailto:` only if still shaping layout
2. real form endpoint as soon as practical
3. inline success and error states
4. disabled submit state while pending
5. mobile-safe input sizes and spacing

If using Formspree:
- keep the endpoint in structured config
- validate on the client
- show success and failure states clearly
- handle generic errors and rate limits

## 10. Replace Demo Assets Cleanly

Real assets usually arrive after layout work has started. Plan for that.

Rules:
- map assets through content files
- use stable filenames
- keep a clean `public/` structure
- make sure replacements propagate through homepage and supporting routes
- remove references to deleted portfolio items from all routes

If the user provides:
- photos: map them to exact content entries
- before and after edits: wire them into the comparison component
- videos or unsupported raw formats: convert them to web-safe formats first

## 11. Mobile Is A Recomposition, Not A Squeeze

Desktop is the source of truth. Mobile should preserve the same hierarchy and tone in a denser composition.

What to adjust on mobile:
- smaller header presence
- smaller radii
- tighter spacing
- denser pills and badges
- quieter floating CTA
- safer drawer spacing
- smaller hero and card bulk
- cleaner stacking of actions and stats

What not to do:
- giant emergency CSS overrides without checking a real viewport
- random hiding of content to make things fit
- treating desktop devtools alone as final proof

## 12. Real Phone Testing

For LAN preview in Next.js:

```powershell
npm run dev -- --hostname 0.0.0.0
```

Find your local IP:

```powershell
ipconfig
```

Then open on the phone:

```text
http://YOUR_LOCAL_IP:3000
```

Important lessons:
- the phone and laptop must be on the same network
- the phone may cache older tabs
- private or incognito tabs are useful for fresh checks
- if the phone shows HTML but interactions are dead, inspect dev-origin restrictions

For newer Next.js development setups, make sure `allowedDevOrigins` includes the LAN host if local phone interactions fail.

## 13. Diagnose Late-Stage Failures In The Right Order

When something looks broken late in the project, check:

1. which environment is being viewed: local desktop, local phone, or production
2. whether the issue is visual-only or interaction and hydration-related
3. whether reveal animations are hiding content
4. whether touch interactions are failing because the page never hydrated
5. whether the wrong URL, wrong cache, or wrong account is involved

Do not jump straight to large rewrites or blind reversions.

## 14. Default Feature Blueprint

For a premium brochure or portfolio site, these are strong defaults:

- long-form homepage
- strong editorial hero
- section-based story flow
- service or pricing tabs
- optional specialty section like videography
- portfolio with filters
- before and after comparison
- reviews carousel
- FAQ accordion
- real contact form
- mobile drawer
- mobile floating phone CTA
- supporting about and service pages
- portfolio archive
- optional project detail pages

## 15. GitHub Setup

Typical clean setup:

```powershell
git status
git branch -M main
git add .
git commit -m "Initial site commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Important checks:
- confirm the correct GitHub account is authenticated
- confirm the remote points to the intended repo
- do not accidentally push as the wrong user when managing multiple accounts

If authentication goes wrong, fix that before blaming the repo itself.

## 16. Vercel Deployment

Clean path:
1. create or confirm GitHub repo
2. import repo into Vercel
3. let Vercel auto-detect Next.js
4. verify the production URL
5. confirm future pushes redeploy automatically

Optional CLI path:

```powershell
npm install -g vercel
vercel login
vercel
vercel --prod
```

## 17. Post-Launch Update Flow

For future edits:

```powershell
git add .
git commit -m "Describe the change"
git push
```

Normal behavior:
- push to the production branch and Vercel redeploys
- push to a feature branch and Vercel creates a preview deployment

## 18. Final Completion Checklist

Before saying the site is done:
- desktop checked
- mobile checked on a real phone
- all obvious interactions tested
- form works
- portfolio content is current
- no duplicate or filler sections remain
- repo is connected
- live URL works
- owner knows how to update and redeploy
