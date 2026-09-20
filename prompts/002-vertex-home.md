# Vertex Home Page Implementation

## Goal
Replace the current design-system showcase page with the Vertex home page matching the attached UI design (`design/vertex-home.png`).

## Design Analysis

The home page has these sections from top to bottom:

### 1. Navigation Bar
- White background, bottom border
- Left: Orange "V" icon + "Vertex" text (Playfair Display)
- Center: "Courses" and "My Learning" links
- Right: Notification bell icon + user avatar circle
- Reuse existing `Navigation.tsx` component but update branding from "Lalalearn" to "Vertex"

### 2. Hero Section
- Warm cream/beige gradient background (subtle radial gradient, warmer in center)
- "INTELLIGENT learning" badge: pill shape, primary-500 text, primary-100 background, uppercase tracking-wide
- Main heading: "Search your learning in plain English." — Playfair Display, very large (~3.5rem), dark neutral-900
- Subtitle: "Vertex understands what you want to learn and finds the exact lessons across all your courses." — neutral-500, body-large
- CTA button: "Explore Courses →" — primary-500 bg, white text, rounded-radius-full (pill shape), with arrow icon
- Search input: large, centered, rounded-radius-lg, border neutral-200, placeholder "Ask anything about your learning...", search icon left, "⌘K" badge right. Larger than the existing SearchInput component — use a bigger height (h-14) and larger text

### 3. All Courses Section
- Section header: "All Courses" (heading-2) on left, "View all courses →" (primary-500, text-sm, font-medium) on right
- 3-column grid of course cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Each card: white bg, border neutral-200, rounded-radius-lg, padding, shadow-sm
  - Icon area: 48x48 rounded neutral-100 bg with centered icon (N for Next.js, Docker whale, TS logo)
  - Title: heading-3, neutral-900
  - Description: text-sm, neutral-500, 2-line clamp
  - Bottom row (border-top): level icon + text, clock icon + duration, book icon + module count — all neutral-500, text-sm
- Hardcode 3 sample courses matching the design:
  1. Next.js for Production — "Build scalable, high-performance web applications with Next.js." — Intermediate, 18h 24m, 12 modules
  2. Docker Essentials — "Containerize applications and streamline your development workflow." — Beginner, 10h 12m, 8 modules
  3. TypeScript Deep Dive — "Go beyond the basics and write safer, more expressive code." — Intermediate, 14h 36m, 10 modules

### 4. Footer Banner
- Horizontal divider
- Star icon (outline) + "New courses and lessons added every week." text
- Decorative orange bar chart illustration below — render as a row of CSS gradient bars (varied heights, orange gradient from bottom)

## Files to Touch

1. **`components/Navigation.tsx`** — Change "Lalalearn" to "Vertex", update logo to match the V-shaped orange icon in the design
2. **`app/page.tsx`** — Complete rewrite: replace the design-system showcase with the actual home page layout
3. **`app/globals.css`** — Add the hero section gradient background class if needed
4. **`components/Button.tsx`** — Design system update: change button border-radius from `rounded-radius-md` (12px) to `rounded-radius-full` (pill shape) to match the design

## Requirements
- Use existing design tokens (colors, typography classes, border-radius, shadows) from globals.css
- Use existing `SearchInput` component (may need a `size` prop for the larger hero variant)
- Use existing `Button` component for the CTA
- Use existing `CourseCard` component for the course grid
- Navigation component updated with new branding
- Responsive: stacks gracefully on mobile (single column courses, smaller hero text)
- The hero background gradient should be a warm cream/beige that fades from slightly warmer center to neutral-50 edges
- All course data is hardcoded (no Sanity yet)
- No client-side interactivity needed beyond the existing components — this is a static page

## Security Considerations
- No tokens, API keys, or sensitive data
- Static content only

## Acceptance Criteria
1. The page matches the design layout, spacing, typography, and colors
2. Navigation shows "Vertex" branding with Courses, My Learning, bell, and avatar
3. Hero section has the badge, heading, subtitle, CTA, and search input
4. Course grid shows 3 cards with correct data
5. Footer banner with star and decorative bars
6. Responsive down to mobile
7. Type check and lint pass

## Checks to Run
- `npx tsc --noEmit` in the web root
- `npm run lint`
- `npm run build`
- Visual comparison against the design image
