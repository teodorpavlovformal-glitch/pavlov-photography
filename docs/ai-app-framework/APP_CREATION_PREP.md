# App Creation Prep

Use this before starting a serious app build.

## 1. Install Once On The Machine

These are the tools that are worth having on your computer before you start building apps.

### Required

- Node.js LTS
- npm
- Git
- VS Code or another serious editor
- PowerShell or another terminal
- Chrome or another modern browser

### Strongly Recommended

- GitHub account
- Vercel account
- a real phone for QA

### Very Useful Optional Tools

- Python 3
- GitHub CLI
- Vercel CLI
- ffmpeg
- ImageMagick
- GitHub Desktop

## 2. Why These Matter

- Node.js and npm run the app and install packages
- Git tracks changes and enables branch, repo, and deployment workflows
- GitHub stores the code and integrates well with Vercel
- Vercel gives fast deploys and a simple production path
- Python 3 is excellent for utility scripts, migrations, CSV or JSON cleanup, asset processing, and one-off automation
- ffmpeg is useful for audio and video processing
- ImageMagick is useful for image conversion and resizing

## 3. Accounts To Prepare Before Coding

- GitHub
- Vercel
- database provider account if using Supabase or hosted Postgres
- auth provider account if using Clerk
- email provider account if using Resend
- payments account if using Stripe
- upload service account if using UploadThing
- OpenAI or another model provider if the app includes AI features

## 4. Core App Defaults

For most modern product apps, this is a very strong default:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Zod
- React Hook Form
- TanStack Query
- Zustand only if real client state complexity exists
- Playwright
- Vitest
- ESLint

## 5. Core App Architecture Defaults

Use these by default unless the app has a strong reason not to:

- App Router
- modular route structure
- typed schemas and content models
- server and client separation kept intentional
- shared UI primitives
- feature folders or domain-based grouping
- real loading, empty, success, and error states
- route-aware navigation
- environment variables documented early

## 6. What To Decide Early

Before writing real features, decide:

- auth approach
- database approach
- form strategy
- email strategy
- upload strategy
- payment strategy if needed
- AI strategy if needed
- analytics and monitoring strategy

The biggest time-savers in app work come from choosing these once and sticking to them.

## 7. Strong Default Dependency Groups

### Core Product App

- `framer-motion`
- `lucide-react`
- `clsx`
- `tailwind-merge`
- `date-fns`
- `sonner`
- `zod`
- `react-hook-form`
- `@hookform/resolvers`
- `@tanstack/react-query`

### Add If Needed

- `zustand` for client state
- `@tanstack/react-table` for data-heavy tables
- `recharts` for charts
- `@vercel/analytics` for web analytics
- `@vercel/speed-insights` for performance telemetry

## 8. Feature Packs

### Authentication

Choose one:
- Clerk
- Better Auth
- Supabase Auth
- Auth.js

### Database

Choose one main path:
- Supabase
- Prisma plus Postgres
- Drizzle plus Postgres

### Email

- Resend

### Payments

- Stripe

### File Uploads

- UploadThing

### AI

- Vercel AI SDK plus provider SDK

## 9. VS Code Extensions Worth Installing

- ESLint
- Tailwind CSS IntelliSense
- Playwright Test for VS Code
- GitHub Pull Requests and Issues
- Prettier if your repo uses it

## 10. Recommended Build Sequence For Apps

1. machine and accounts ready
2. scaffold project
3. install core UI and validation stack
4. choose auth
5. choose database
6. set up env variables
7. set up form system
8. set up testing
9. set up deployment
10. only then start feature development

## 11. What Not To Do

- do not install every auth library at once
- do not install both Prisma and Drizzle unless you truly need both
- do not postpone deployment until the very end
- do not build the full UI before deciding data and auth flow
- do not treat mobile as optional if the app has touch users

## 12. My Best Default Recommendation

If you want the safest all-around starting point for serious apps, use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zod
- React Hook Form
- TanStack Query
- Supabase for backend and auth if speed matters most

If you want more control and a more custom backend:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zod
- React Hook Form
- TanStack Query
- Better Auth or Clerk
- Prisma or Drizzle
- Postgres
