# VitalScore

Landing page for VitalScore — the AI health app that tells you what your numbers actually mean, and the 2 to 3 things that will move the needle for you.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix primitives)
- React Router, TanStack Query, React Hook Form + Zod
- Supabase (edge function powers waitlist signups)
- Vitest + Testing Library

## Local development

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:8080.

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
- `npm test` — run the Vitest suite once
- `npm run test:watch` — run Vitest in watch mode

## Environment

Copy the Supabase project values into `.env`:

```
VITE_SUPABASE_PROJECT_ID=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_URL=...
```

## Project layout

- `src/pages/` — top-level routes (`Index`, `NotFound`)
- `src/components/vitalscore/` — landing page sections (Hero, Problem, Solution, Detective, Waitlist, Nav, Footer)
- `src/components/ui/` — shadcn/ui primitives
- `src/integrations/` — Supabase client
- `supabase/functions/join-waitlist/` — edge function that appends signups to a Google Sheet
