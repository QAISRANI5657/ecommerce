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

1. Push this repo to GitHub.
2. Enable **GitHub Pages** in repo Settings → Pages → Source: **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on push to `main` or `master`.
4. Your site will be available at `https://<username>.github.io/<repo-name>/`.

The workflow sets `NEXT_PUBLIC_BASE_PATH` automatically from the repository name.

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

Portfolio showcase project. Product images from [Unsplash](https://unsplash.com).
