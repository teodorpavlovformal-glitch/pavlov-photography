# Operational Toolset

This file answers a practical question: what tools will actually be used when building apps, and which ones should be installed by you versus handled by the AI workflow?

## 1. Three Tool Layers

There are three different categories of tools:

1. machine-level tools you install on your computer
2. project-level dependencies installed into a specific app
3. AI-operational tools used during planning, coding, testing, debugging, and deployment

Keeping these separate prevents a lot of confusion.

## 2. Machine-Level Tools You Install Once

These live on your computer, not inside a single project.

- Node.js
- npm
- Git
- VS Code
- PowerShell or another terminal
- Chrome
- GitHub CLI
- Vercel CLI
- Python 3
- ffmpeg
- ImageMagick

What they do:
- Node.js and npm power the JavaScript app ecosystem
- Git tracks version history
- VS Code is your editing environment
- PowerShell runs commands
- Chrome is for real QA and devtools
- GitHub CLI helps with repo and PR workflows
- Vercel CLI helps with deployment and environment management
- Python 3 helps with scripts, migrations, file transforms, and one-off utilities
- ffmpeg helps with video and audio preparation
- ImageMagick helps with image conversion and cleanup

## 3. Project-Level Dependencies I Will Commonly Operate With

These are installed inside a specific app.

### Core App Stack

- `next`
- `react`
- `react-dom`
- `typescript`
- `tailwindcss`
- `framer-motion`
- `lucide-react`

### Forms And Validation

- `zod`
- `react-hook-form`
- `@hookform/resolvers`

### Data And Client State

- `@tanstack/react-query`
- `zustand` when truly needed

### Utility And UI Helpers

- `clsx`
- `tailwind-merge`
- `date-fns`
- `sonner`

### Bigger Product UI

- `@tanstack/react-table`
- `recharts`

### Auth And Backend Paths

- `@supabase/supabase-js`
- `@clerk/nextjs`
- `better-auth`
- `next-auth`
- `@prisma/client`
- `prisma`
- `drizzle-orm`
- `drizzle-kit`
- `postgres`

### Integrations

- `stripe`
- `resend`
- `uploadthing`
- `ai`
- `@ai-sdk/openai`
- `@vercel/analytics`
- `@vercel/speed-insights`

## 4. AI-Operational Tools I Will Use While Building

These are the kinds of actions I operate with while helping you.

### Planning Tools

Used to:
- frame the product
- choose the stack
- lock the route structure
- define feature slices
- identify risks before coding

### Code Reading And Editing

Used to:
- inspect project structure
- update files
- refactor modules
- wire dependencies
- keep the app modular

### Terminal And Command Tools

Used to:
- install dependencies
- run dev servers
- run tests
- inspect git status
- debug configuration
- start local preview

### Browser And QA Tools

Used to:
- open the app
- click through flows
- test modals, drawers, tabs, forms, and auth paths
- check responsive behavior
- verify production after deploy

### Deployment Tools

Used to:
- connect GitHub
- deploy to Vercel
- inspect logs or project state
- validate the live URL

## 5. AI Skills Most Useful For App Creation

In this environment, the most valuable categories are:

### Planning

- `brainstorming`
- `plan-work`
- `writing-plans`

### Frontend And Product UI

- `frontend-skill`
- `frontend-design`
- `ui-ux-pro-max`

### React, Next, And App Architecture

- `build-web-apps:react-best-practices`
- `vercel-plugin:nextjs`
- `vercel-plugin:next-best-practices`

### Debugging And QA

- `bug-triage`
- `systematic-debugging`
- `investigate`
- `verification-before-completion`
- `browse`
- `qa`

### Deployment

- `vercel-deploy`
- `commit-work`
- `create-pr`
- `ship`

## 6. Plugins Most Useful For App Work

- `Build Web Apps`
- `GitHub`
- `Vercel`
- `Vercel-plugin`

These matter because they give stronger guidance and tooling for:
- frontend work
- repo workflows
- deployment
- Next.js and Vercel details

## 7. The Most Useful Things For You To Install First

If you want the shortest list with the highest payoff, install these first:

### Machine-Level

- Node.js LTS
- Git
- VS Code
- Chrome
- GitHub CLI
- Vercel CLI
- Python 3

### Per New Project

```powershell
npx create-next-app@latest my-app
cd my-app
npm install framer-motion lucide-react clsx tailwind-merge date-fns sonner zod react-hook-form @hookform/resolvers @tanstack/react-query
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test
npx shadcn@latest init
```

Then choose one of these backend paths:

### Fastest Product Path

```powershell
npm install @supabase/supabase-js resend stripe uploadthing
```

### More Custom Product Path

```powershell
npm install better-auth resend stripe uploadthing
npm install @prisma/client postgres
npm install -D prisma
```

## 8. What I Will Usually Reach For First

For most serious apps, my default sequence is:

1. Next.js plus TypeScript app scaffold
2. Tailwind CSS and shadcn/ui
3. Framer Motion only where it improves the product
4. Zod plus React Hook Form
5. TanStack Query
6. one auth choice
7. one database choice
8. testing setup
9. GitHub and Vercel deployment path

That is the most useful default operating toolset for app creation without over-installing.
