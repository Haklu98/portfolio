# Aleksi Hakala – Developer Portfolio

My personal developer portfolio, showcasing my projects, skills and certificates.

## Tech stack

- [Angular](https://angular.dev) 22 (standalone components, signals)
- [Tailwind CSS](https://tailwindcss.com) 4
- Dark and light theme (dark uses the same palette as [hakalamusic.com](https://www.hakalamusic.com/)), Jost typeface
- Hosted on [Netlify](https://www.netlify.com)

## Project structure

```
src/app/
├── core/        # Layout (navigation, footer) and the theme service
├── pages/       # Pages: home, code, contact, about and the project detail page
└── service/     # Project data (projects-data.ts) and models
public/          # Static assets (WebP images, SVG icons, Netlify _redirects)
```

## Getting started

Requires Node.js 22.22.3+ or 24.15+ (see `.nvmrc`).

```bash
npm install
npm start        # dev server at http://localhost:4200/
```

## Scripts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `npm start`     | Start the dev server with live reload                    |
| `npm run build` | Production build to `dist/aleksi-hakala-portfolio/`      |
| `npm test`      | Run unit tests with Karma                                |

## Deployment

The site is deployed to Netlify from the production build
(`dist/aleksi-hakala-portfolio/browser`). The `public/_redirects` file makes
Netlify serve `index.html` for every route, so direct links and page refreshes
work with Angular's client-side routing.
