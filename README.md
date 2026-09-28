# FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Pick a lift, lock it into today’s plan, and watch the week’s work add up.

**Live Demo:** [https://my-fit-log.netlify.app/](https://my-fit-log.netlify.app/)

---

## Description

FitLog is a responsive workout tracking web app where users can browse a library of exercises, view detailed instructions, add workouts to a daily plan, save exercises for later, mark them as done, and track totals (exercises, minutes, calories). Plan, saved, and completed exercise data persists in `localStorage`, so it survives page reloads.

---

## Technologies Used

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **Lucide React** (icons)
- **Google Fonts** (Oswald + Inter)
- **React Toastify** (notifications)
- **localStorage** (data persistence)
- **Netlify** (deployment)

---

## Key Features

1. **Workout Library** — Browse all exercises from the API in a responsive card grid with images, muscle tags, equipment, duration, calories, and rating.
2. **Exercise Details Page** — Two-column layout with a large image, description, specifications, step-by-step instructions, and action buttons.
3. **Add to Plan / Save for Later** — Add exercises to Today's Plan or the Saved list with live navbar badge counters and toast notifications.
4. **My Plan Dashboard** — Tabs for Today's Plan and Saved, live stats (Exercises / Minutes / Calories), sorting by Duration / Calories / Rating, Mark as Done, and Remove.
5. **Persistent State** — Plan, Saved list, and completed exercises are saved in `localStorage` and restored after refresh.
6. **Loading & Empty States** — Loading UI while data is being fetched, plus a clear empty state with a CTA when the plan is empty.
7. **Custom 404 Page** — Branded not-found page for invalid routes.
8. **Fully Responsive** — Designed to work smoothly on mobile, tablet, and desktop.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Banner + Library |
| `/theLibrary` | Full exercise library |
| `/theLibrary/[id]` | Exercise details |
| `/my-plan` | Today's Plan & Saved |
| `/*` | Custom 404 page |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Moinul-Islam-71/Fit-Log.git
cd fit-log
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## API

### All Exercises

`https://api.abcz.workers.dev/api/fitlog`

### Single Exercise

`https://api.abcz.workers.dev/api/fitlog/:id`

### Alternative API Endpoint

`https://api.api-store.workers.dev/api/fitlog`

`https://api.api-store.workers.dev/api/fitlog/:id`

---

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── theLibrary/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   ├── my-plan/
│   ├── not-found.tsx
│   └── layout.tsx
├── components/
│   ├── homepage/
│   ├── myPlanPage/
│   ├── Buttons/
│   └── shared/
│       ├── Navbar/
│       └── Footer/
├── context/
│   └── ExerciseContext.tsx
└── types/
    └── exercises.type.ts
```

---

## Features in Detail

- **Navbar** — Logo, Workout / My Plan links with active state, Plan & Saved badge counters.
- **Hero Banner** — Eyebrow text, main heading, subtitle, and a “Browse Workouts” CTA that scrolls to `#library`.
- **Library Cards** — Exercise image, muscle tags, name, equipment, duration, calories, and rating.
- **Details Actions** — Add to Today's Plan with a maximum of 5 exercises, Save for Later, and toast feedback.
- **My Plan** — Today/Saved tabs, sorting, Mark as Done, Remove, and live workout metrics.
- **Persistent Data** — Exercise plan, saved exercises, and completed exercises are stored in `localStorage`.

### localStorage Keys

```text
fitlog-plan
fitlog-savedPlan
fitlog-completed
```

---

## License

This project was built as part of a programming assignment.

---

**Train hard, log honest.**

© 2026 FitLog
