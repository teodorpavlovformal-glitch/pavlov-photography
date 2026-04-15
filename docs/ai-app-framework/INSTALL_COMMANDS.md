# Install Commands

These are practical copy-paste commands for the most useful app setup paths.

## 1. Machine-Level Installs

Install these yourself through their official installers or package managers:

- Node.js LTS
- Git
- VS Code
- GitHub CLI
- Vercel CLI
- Python 3
- ffmpeg
- ImageMagick

## 2. Create A New Next.js App

```powershell
npx create-next-app@latest my-app
cd my-app
```

## 3. Core App Dependencies

```powershell
npm install framer-motion lucide-react clsx tailwind-merge date-fns sonner zod react-hook-form @hookform/resolvers @tanstack/react-query
```

## 4. Optional Local State

```powershell
npm install zustand
```

## 5. Testing Stack

```powershell
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test
```

## 6. shadcn/ui

```powershell
npx shadcn@latest init
```

Then add components as needed:

```powershell
npx shadcn@latest add button input dialog sheet tabs accordion table chart sonner
```

## 7. Database And Auth Options

### Supabase Path

```powershell
npm install @supabase/supabase-js
```

### Clerk Path

```powershell
npm install @clerk/nextjs
```

### Better Auth Path

```powershell
npm install better-auth
```

### Auth.js Path

```powershell
npm install next-auth
```

### Prisma Path

```powershell
npm install @prisma/client postgres
npm install -D prisma
```

### Drizzle Path

```powershell
npm install drizzle-orm postgres
npm install -D drizzle-kit
```

## 8. Tables And Charts

```powershell
npm install @tanstack/react-table recharts
```

## 9. Payments, Email, Uploads, AI

### Stripe

```powershell
npm install stripe
```

### Resend

```powershell
npm install resend
```

### UploadThing

```powershell
npm install uploadthing
```

### Vercel AI SDK Example

```powershell
npm install ai @ai-sdk/openai
```

## 10. Vercel Analytics And Performance

```powershell
npm install @vercel/analytics @vercel/speed-insights
```

## 11. Typical Full Fast-Startup Install

```powershell
npm install framer-motion lucide-react clsx tailwind-merge date-fns sonner zod react-hook-form @hookform/resolvers @tanstack/react-query @supabase/supabase-js resend stripe uploadthing
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test
npx shadcn@latest init
```

## 12. Typical Full Custom-Backend Install

```powershell
npm install framer-motion lucide-react clsx tailwind-merge date-fns sonner zod react-hook-form @hookform/resolvers @tanstack/react-query better-auth resend stripe uploadthing
npm install @prisma/client postgres
npm install -D prisma vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @playwright/test
npx shadcn@latest init
```
