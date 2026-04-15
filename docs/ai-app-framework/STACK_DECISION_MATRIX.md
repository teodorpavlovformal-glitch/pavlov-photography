# Stack Decision Matrix

Use this to choose the right stack before you install anything.

## 1. Framework

### Best Default

- Next.js App Router

Choose it when:
- you want one strong default for product apps
- you want SSR, routing, server components, and Vercel deployment
- you want a large ecosystem and strong hosting path

## 2. UI Layer

### Best Default

- Tailwind CSS
- shadcn/ui
- Framer Motion

Choose this when:
- you want speed plus quality
- you want to own the components instead of depending on a rigid design system

## 3. Forms And Validation

### Best Default

- React Hook Form
- Zod
- `@hookform/resolvers`

Choose this when:
- the app has serious forms
- you want strong validation and type-safe schemas

## 4. Data Fetching

### Best Default

- TanStack Query

Choose it when:
- the app has client-side fetching, mutations, caching, or sync complexity

Skip it only when:
- the app is very small and almost all data lives in server-rendered flows

## 5. Local Client State

### Good Default

- Zustand

Choose it when:
- the app has cross-page UI state
- you need lightweight state without Redux overhead

Do not add it automatically if the app does not need it.

## 6. Auth

### Fastest Polished Auth

- Clerk

Best for:
- fast setup
- polished auth UI
- user management
- teams and organizations without building everything yourself

### Most Flexible Modern App Auth

- Better Auth

Best for:
- full control
- apps that want auth closer to their own backend
- teams comfortable owning more infrastructure

### Fastest Backend Plus Auth Combo

- Supabase Auth

Best for:
- speed
- simpler product apps
- pairing auth with database and storage in one system

### Good Standards-Based Auth

- Auth.js

Best for:
- apps that want provider-based auth with a mature ecosystem
- teams comfortable configuring more pieces manually

## 7. Database

### Fastest Product Build

- Supabase

Best for:
- fast startup
- hosted Postgres plus auth and storage
- teams that want one vendor for many backend needs

### Strong ORM Workflow

- Prisma plus Postgres

Best for:
- teams that like a mature ORM workflow
- apps with strong relational data
- developer-friendly schema workflows

### SQL-Forward Lightweight Option

- Drizzle plus Postgres

Best for:
- teams that want more direct SQL feeling
- lightweight ORM setup
- apps where explicitness matters

## 8. Tables

### Best Default For Serious Tables

- TanStack Table

Best for:
- dashboards
- admin panels
- dense product UIs
- sortable, filterable, large-data interfaces

## 9. Charts

### Good Default

- Recharts

Best for:
- dashboards
- admin panels
- product analytics views

## 10. Email

### Best Default

- Resend

Best for:
- transactional email
- app notifications
- auth email flows
- good developer experience

## 11. Payments

### Best Default

- Stripe

Best for:
- one-time payments
- subscriptions
- billing portals
- usage-based billing

## 12. Uploads

### Best Default

- UploadThing

Best for:
- getting file uploads working quickly in TypeScript apps

## 13. AI Features

### Best Default

- Vercel AI SDK plus model provider SDK

Best for:
- chat
- tool calling
- text generation
- structured AI output
- AI features inside product apps

## 14. Observability

### Good Default

- Vercel Web Analytics
- Vercel Speed Insights

Best for:
- traffic visibility
- real-world performance monitoring

## 15. Recommended Starter Combinations

### Fastest Startup SaaS

- Next.js
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zod
- React Hook Form
- TanStack Query
- Supabase
- Resend
- Stripe
- UploadThing
- Playwright
- Vitest

### More Custom Product Architecture

- Next.js
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Zod
- React Hook Form
- TanStack Query
- Better Auth or Clerk
- Prisma or Drizzle
- Postgres
- Resend
- Stripe
- UploadThing
- Playwright
- Vitest

### Dashboard Or Admin App

- Next.js
- Tailwind CSS
- shadcn/ui
- TanStack Query
- TanStack Table
- Recharts
- auth stack of choice
- database stack of choice
- Playwright
- Vitest
