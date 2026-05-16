# NovaCart — Premium One-Page eCommerce

A portfolio-ready, premium tech eCommerce landing page built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Features

- Single-page store with hero, categories, products, showcase, benefits, testimonials, and newsletter
- Dark/light mode toggle
- Client-side shopping cart with localStorage persistence
- Product search and category filtering
- Smooth Framer Motion animations
- Fully responsive mobile-first design
- Static export for GitHub Pages deployment

## Tech Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion**
- **next-themes**
- **Lucide React**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is written to the `out/` directory.

## GitHub Pages Deployment

**Live URL (after deploy):** [https://qaisrani5657.github.io/ecommerce/](https://qaisrani5657.github.io/ecommerce/)

### First-time setup

1. Create a new repository on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `ecommerce`
   - Visibility: Public
   - Do **not** add README, .gitignore, or license (this project already has them)

2. Push from your machine:

```bash
cd "d:\Cursor Websites\ecommerce"
git remote add origin https://github.com/QAISRANI5657/ecommerce.git
git push -u origin main
```

(If `origin` already exists, use `git push -u origin main` only.)

3. Enable GitHub Pages:
   - Open [github.com/QAISRANI5657/ecommerce/settings/pages](https://github.com/QAISRANI5657/ecommerce/settings/pages)
   - **Build and deployment** → Source: **GitHub Actions**

4. The workflow runs automatically on push. Check progress under **Actions** tab.

The workflow sets `NEXT_PUBLIC_BASE_PATH=/ecommerce` automatically from the repository name.

For local production builds matching GitHub Pages:

```bash
cp .env.production.example .env.production
# Edit NEXT_PUBLIC_BASE_PATH to match your repo name
npm run build
```

Leave `NEXT_PUBLIC_BASE_PATH` empty for custom domains or Vercel.

## Project Structure

```
src/
├── app/           # Layout, page, global styles
├── components/    # UI, layout, sections
├── context/       # Cart & filter state
├── data/          # Products, categories, testimonials
├── lib/           # Utilities
└── types/         # TypeScript types
```

## License

Portfolio showcase project. Product illustrations are bundled locally in `public/images/`.
