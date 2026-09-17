# Implementation Prompt: Lalalearn Design System

## Goal
Implement the complete Lalalearn design system as Tailwind CSS v4 tokens and reusable React components, matching the provided design reference exactly.

## Reference
- Design image: `design/lalalearn-designsystem.png`
- This is the source of truth for all visual decisions

## Current State
- Fresh Next.js 16 scaffold with React 19 and Tailwind CSS v4
- No custom components exist yet
- Tailwind v4 uses CSS-first configuration in `globals.css` (no tailwind.config file)
- Path alias `@/*` maps to project root

## What to Build

### 1. Design Tokens in globals.css

Configure Tailwind v4 theme tokens using `@theme` directive:

**Colors:**
```css
/* Primary */
--color-primary-500: #F97316;
--color-primary-400: #F8923C;
--color-primary-300: #FDA74A;
--color-primary-200: #FED7AA;
--color-primary-100: #FFEEE5;

/* Neutral */
--color-neutral-900: #0F172A;
--color-neutral-700: #334155;
--color-neutral-500: #64748B;
--color-neutral-300: #CBD5E1;
--color-neutral-200: #E2E8F0;
--color-neutral-100: #F1F5F9;
--color-neutral-50: #FAFAFC;
--color-white: #FFFFFF;
```

**Typography:**
- Load Playfair Display and Inter from Google Fonts via `next/font/google`
- Register as CSS variables and Tailwind font families
- Define type scale utilities (display-1, display-2, heading-1, heading-2, heading-3, body-large, body, small)

**Spacing:**
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 40, 48, 64

**Border Radius:**
- xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 24px, full: 9999px

**Shadows:**
- sm, md, lg, xl with specified rgba values

### 2. Component Library

Create reusable components in `components/` directory:

**Buttons (`components/Button.tsx`):**
- Variants: primary (orange bg), secondary (orange outline), tertiary (gray outline), text
- Sizes: lg (default), md
- States: default, hover, disabled
- Specs: Height 44px, radius 12px, Inter Medium 14-16px

**Input (`components/Input.tsx`):**
- Search/text input with icon support
- Height 44px, radius 12px, border #E2E8F0
- Focus state: border #FB923C

**Select (`components/Select.tsx`):**
- Dropdown select component
- Same styling as Input

**Badge (`components/Badge.tsx`):**
- Variants: video (purple bg), lesson (light purple bg), popular (orange bg)

**Card (`components/Card.tsx`):**
- Course card, lesson card (video), lesson card (lesson), resource card variants

**ProgressBar (`components/ProgressBar.tsx`):**
- Orange fill on gray background
- Percentage display

**StatusIndicator (`components/StatusIndicator.tsx`):**
- In progress, completed, now playing, locked states

### 3. Layout Components

**Navigation (`components/Navigation.tsx`):**
- Logo placeholder, nav links (Courses, My Learning)
- Responsive design

**Breadcrumb (`components/Breadcrumb.tsx`):**
- Breadcrumb navigation

**Pagination (`components/Pagination.tsx`):**
- Page numbers with prev/next

### 4. Update layout.tsx

- Replace Geist fonts with Playfair Display and Inter
- Set up proper metadata for Lalalearn

### 5. Create Demo Page

Update `app/page.tsx` to showcase all design system components with proper typography, colors, and spacing.

## Files to Create/Modify

1. `app/globals.css` - Design tokens
2. `app/layout.tsx` - Font setup, metadata
3. `components/Button.tsx`
4. `components/Input.tsx`
5. `components/Select.tsx`
6. `components/Badge.tsx`
7. `components/Card.tsx`
8. `components/ProgressBar.tsx`
9. `components/StatusIndicator.tsx`
10. `components/Navigation.tsx`
11. `components/Breadcrumb.tsx`
12. `components/Pagination.tsx`
13. `app/page.tsx` - Demo page

## Requirements

- Match design image exactly: colors, typography, spacing, shadows
- All components must be TypeScript with proper props interfaces
- Use Tailwind CSS v4 utilities and theme tokens
- Responsive design (mobile-first approach)
- Accessible (proper ARIA labels, keyboard navigation)
- No external UI libraries - pure Tailwind + React

## Security Considerations

- No client-side secrets or tokens
- Components are presentational only

## Acceptance Criteria

1. All design tokens implemented in globals.css
2. All components created with correct styling
3. Demo page showcases all components
4. Type check passes (`npm run type-check`)
5. Lint passes (`npm run lint`)
6. Build succeeds (`npm run build`)
7. Visual match to design image

## Checks to Run

```bash
# From project root
npm run type-check
npm run lint
npm run build
```

## Manual Test Steps

1. Run `npm run dev`
2. Open http://localhost:3000
3. Verify:
   - Playfair Display used for display headings
   - Inter used for body text and UI
   - Orange primary color (#F97316) used for primary buttons
   - All button variants render correctly
   - Input fields have correct styling
   - Badges show correct colors
   - Cards display properly
   - Navigation is responsive
   - Shadows and radius match design
