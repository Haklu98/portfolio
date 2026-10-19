# Aleksi Hakala – Developer Portfolio

My personal developer portfolio, showcasing my projects, skills and certificates.

## Tech stack

- [Angular](https://angular.dev) 19 (standalone components)
- [Tailwind CSS](https://tailwindcss.com) 4
- [Angular Material](https://material.angular.io) (menu, dialogs, icons)
- Hosted on [Netlify](https://www.netlify.com)

## Project structure

```
src/app/
├── core/        # Layout: navigation and footer
├── pages/       # Top-level pages: home, code, contact, about
├── projects/    # Project detail pages (Elli, Turvajätkät, Music portfolio)
└── service/     # Project data and models
public/          # Static assets (images, screenshots, Netlify _redirects)
```

## Getting started

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
