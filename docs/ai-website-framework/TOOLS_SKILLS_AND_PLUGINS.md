# Tools, Skills, Plugins, And Software Stack

This file explains the full website-building toolchain behind the framework, including local software, frontend packages, testing tools, deployment tools, and AI-native capabilities.

## 1. Core Software Stack

These are the core software pieces for a modern premium website workflow.

### Required

- Node.js LTS
- npm
- Git
- a code editor such as VS Code
- a terminal such as PowerShell
- a modern browser

### Strongly Recommended

- GitHub account
- Vercel account
- a real phone for mobile QA
- Chrome DevTools for responsive inspection

### Optional But Very Useful

- Python 3
- ImageMagick
- ffmpeg
- GitHub CLI
- Vercel CLI
- GitHub Desktop

### What Each One Is For

- Node.js: runs the website development server and build tooling
- npm: installs packages and runs project scripts
- Git: version control
- GitHub: remote repository, collaboration, and Vercel integration
- Vercel: deployment and hosting
- Python 3: helper scripts, asset processing, quick automation, one-off utilities
- ImageMagick: converting, resizing, or reformatting images
- ffmpeg: converting video or audio assets to web-safe formats
- PowerShell: local command runner on Windows

## 2. Frontend Framework And Library Stack

This framework pack assumes a modern React website stack.

### Core App Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

### UI And Motion

- Framer Motion
- lucide-react or another icon library

### Why This Stack Works Well

- Next.js gives routing, layouts, image and metadata support, and strong Vercel deployment
- TypeScript keeps the content model and routes safer
- Tailwind makes visual iteration fast while still allowing a real design system
- Framer Motion is strong for restrained, premium interactions

## 3. Testing And Verification Stack

### Static And Code Health

- ESLint

### Component And Interaction Tests

- Vitest
- Testing Library
- jsdom

### End-To-End And Browser QA

- Playwright

### What Each One Covers

- ESLint: catches code issues and poor patterns early
- Vitest: fast unit and component-level verification
- Testing Library: tests UI behavior the way users interact with it
- Playwright: verifies routes, forms, drawers, tabs, accordions, sliders, and mobile behavior

## 4. Content And Asset Tooling

These are not always packages. Some are workflow choices.

- centralized content files
- typed content models
- stable `public/` asset structure
- clean asset naming conventions
- route-aware content references

This is what allows late asset replacement without rewriting the layout.

## 5. Contact And Lead Tools

Typical options:
- Formspree
- custom backend endpoint
- email provider
- `mailto:` as a temporary fallback only

Recommendation:
- use a real form endpoint early
- keep the endpoint configurable
- do not hide it in component internals

## 6. Deployment Tools

### Core

- GitHub
- Vercel

### Optional CLIs

- GitHub CLI
- Vercel CLI

### What They Solve

- GitHub stores the code and triggers Vercel deploys
- Vercel builds and hosts the site
- GitHub CLI helps with repo and PR workflows
- Vercel CLI helps with linking, previews, redeploys, and debugging

## 7. AI Capability Requirements

If you want another AI to replicate this workflow, it should ideally have:

- code editing ability
- terminal or shell access
- file reading across the repo
- browser or page-verification ability
- image and asset awareness
- deployment awareness
- structured planning ability

If another AI does not have all of these, the human has to fill the missing gaps manually.

## 8. Codex-Specific Skills That Matter Most

These are the most relevant skills from this environment for building sites like this one.

### Planning And Design

- `brainstorming`
- `frontend-skill`
- `ui-ux-pro-max`
- `frontend-design`

Use these when:
- locking visual direction
- translating reference images into real design language
- raising the quality bar beyond generic layouts

### Implementation Planning

- `plan-work`
- `writing-plans`

Use these when:
- turning an approved direction into a real implementation plan

### Debugging And QA

- `bug-triage`
- `systematic-debugging`
- `investigate`
- `verification-before-completion`
- `qa`
- `browse`

Use these when:
- mobile looks broken
- interactions do not work
- local and deployed behavior differ
- you need proof before claiming something is fixed

### Deployment And Shipping

- `vercel-deploy`
- `ship`
- `create-pr`
- `commit-work`

Use these when:
- pushing to GitHub
- deploying to Vercel
- creating a cleaner shipping workflow

## 9. Plugins That Matter Most For This Workflow

### Build Web Apps

Useful for:
- frontend guidance
- deployment flows
- UI reviews
- broader web-app workflows

### GitHub

Useful for:
- repository help
- PR workflows
- CI and review handling
- publishing and collaboration

### Vercel

Useful for:
- deployment
- project and deployment inspection
- deployment URLs and logs

### Vercel-plugin

Useful for:
- deeper Vercel knowledge
- framework-specific Vercel guidance
- deployment, runtime, routing, and platform details

## 10. Which Tools Are Mandatory Vs Optional

### Mandatory For This Website Pattern

- Node.js
- npm
- Git
- GitHub
- Vercel
- Next.js
- React
- TypeScript
- Tailwind CSS
- browser QA
- real mobile QA

### Strongly Recommended

- Framer Motion
- ESLint
- Vitest
- Playwright
- Formspree or another real form provider

### Optional But Helpful

- Python 3
- ImageMagick
- ffmpeg
- GitHub CLI
- Vercel CLI

## 11. Software And Tooling Lessons From Real Builds

- local phone QA is not optional for premium sites
- desktop devtools are useful, but not enough
- a real form endpoint is better than leaving `mailto:` in place
- asset replacement needs structure, not ad hoc JSX edits
- testing only the page load is not enough; tabs, drawers, and accordions must be verified
- GitHub and Vercel account alignment matters as much as code quality during deployment

## 12. Recommended Default Package Set

For a strong premium website baseline:

```json
{
  "dependencies": {
    "next": "latest-supported",
    "react": "latest-supported",
    "react-dom": "latest-supported",
    "framer-motion": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "tailwindcss": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "vitest": "latest",
    "@testing-library/react": "latest",
    "@testing-library/jest-dom": "latest",
    "@testing-library/user-event": "latest",
    "jsdom": "latest",
    "@playwright/test": "latest"
  }
}
```

## 13. Current Reference Stack In This Repo

This specific project uses:
- Next.js `16.2.3`
- React `19.2.4`
- TypeScript `5`
- Tailwind CSS `4`
- Framer Motion `12.38.0`
- lucide-react `1.8.0`
- ESLint `9`
- Vitest `4.1.4`
- Playwright `1.59.1`

This is a good reference stack for future premium brochure and portfolio sites.
