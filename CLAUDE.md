# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Neel Seth built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The site showcases professional experience, projects, education, skills, and blog content with a modern, animated UI using Framer Motion.

## Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack on http://localhost:3000

# Production
npm run build            # Build for production (creates standalone output)
npm start                # Start production server

# Linting
npm run lint             # Run ESLint
```

## Docker Deployment

The project uses a multi-stage Docker build optimized for production:

```bash
# Build image
docker build -t neelseth-portfolio .

# Run container
docker run -p 3000:3000 neelseth-portfolio
```

**Important**: Next.js is configured with `output: 'standalone'` in `next.config.ts` for optimized Docker deployments.

## Project Architecture

### Structure
- **`/app`** - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page composing all sections
  - `layout.tsx` - Root layout with metadata, SEO, and JSON-LD schema
  - `sitemap.ts` - Sitemap generation
- **`/components`** - React components (all sections of the portfolio)
  - Each section (Hero, Experience, Projects, etc.) is a separate component
  - All interactive components use `"use client"` directive
- **`/lib`** - Core utilities and data
  - `data.ts` - Central data source for all content (experiences, projects, education, skills, blogs)
  - `types.ts` - TypeScript interfaces for data structures
  - `utils.ts` - Utility functions (cn helper for Tailwind classes)

### Data-Driven Architecture

The entire site content is centralized in `/lib/data.ts`. To update portfolio content:
1. Modify the data objects in `lib/data.ts`
2. Components automatically consume this data via imports
3. No component-level changes needed for content updates

**Example**: To add a new experience, add an object to the `experiences` array in `lib/data.ts`.

### Styling System

- **Tailwind CSS** with custom design tokens defined via CSS variables
- **Color system**: Uses HSL-based theme with semantic naming (background, foreground, primary, secondary, muted, accent, destructive)
- **Utility**: `cn()` function in `lib/utils.ts` merges Tailwind classes with clsx and tailwind-merge

### UI Libraries
- **Radix UI**: Navigation menu and tooltips
- **Framer Motion**: Page animations and transitions
- **Lucide React**: Icon system

### Key Features
- **SEO optimized**: Comprehensive metadata, Open Graph, Twitter Cards, JSON-LD structured data
- **Responsive**: Mobile-first design approach
- **Type-safe**: Full TypeScript coverage with strict typing
- **Performance**: Uses Next.js Image optimization, Turbopack in dev

## Important Configuration

### ESLint
- Uses Next.js recommended configs (`next/core-web-vitals`, `next/typescript`)
- Ignores: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`

### TypeScript
- Configured in `tsconfig.json` with path aliases (`@/*` maps to root)

### Next.js Config
- Standalone output for Docker deployments
- Remote image patterns configured for `via.placeholder.com`
- Add new remote image hosts in `next.config.ts` as needed

## Development Patterns

1. **Adding new sections**: Create component in `/components`, import into `app/page.tsx`
2. **Content updates**: Edit data in `/lib/data.ts` only
3. **New data types**: Add interface to `/lib/types.ts`, then add data to `/lib/data.ts`
4. **Styling**: Use Tailwind classes with `cn()` utility for conditional styling
5. **Client-side interactivity**: Add `"use client"` directive at top of component file

## Content Management

All portfolio content lives in `/lib/data.ts`:
- `personalInfo` - Name, title, bio, contact, social links
- `experiences` - Work history with details
- `projects` - Portfolio projects
- `education` - Academic background
- `skills` - Technical and business skills organized by category
- `opensource` - Open source contributions
- `blogs` - Blog posts with full content
