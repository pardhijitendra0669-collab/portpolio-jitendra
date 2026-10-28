# Jitendra Pardhi — Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. Portfolio content lives in `src/data/portfolio.js`; layout and reusable sections live in `src/App.jsx` and `src/styles.css`.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL after startup. Create a production build with `npm run build`, then inspect it locally with `npm run preview`.

## Resume PDF

No resume PDF was present when this project was created, so the site does not link to a placeholder or generated document. Add your actual PDF under `public/`, for example `public/Jitendra-Pardhi-Resume.pdf`, then set this environment variable in a local `.env` file and in your deployment environment:

```env
VITE_RESUME_PATH=/Jitendra-Pardhi-Resume.pdf
```

The header and hero resume actions use this path. Until configured, they stay visibly unavailable and do not lead to a broken URL. Do not put secrets in `VITE_*` variables; Vite embeds them in client code.

## Contact form

The form validates its fields and opens a prefilled `mailto:` draft addressed to the portfolio email. It does not claim to send or store messages. A backend or email provider can be added later without exposing its credentials in the frontend.

## Deploy

Build command: `npm run build`  
Output directory: `dist`

- **Vercel:** Import the repository, select Vite (or use the commands above), add `VITE_RESUME_PATH` if the resume is present, and deploy.
- **Netlify:** Create a site from the repository with build command `npm run build` and publish directory `dist`; set the optional resume variable in site environment variables.
- **AWS:** Build with `npm run build`, upload the `dist/` contents to an S3 bucket configured for static hosting or CloudFront, and configure the optional resume variable before building. For a custom domain, CloudFront is recommended.

All options serve the application from the site root. If deploying under a subpath, configure Vite's `base` and the resume path to match that subpath.

## Portfolio checklist

- [x] Sticky responsive navigation with active-section state and mobile menu
- [x] Animated hero role and abstract developer illustration (no fabricated profile photo)
- [x] About, contextual metrics, grouped skills, career timeline, projects, architecture, education, and contact
- [x] Responsive layouts and keyboard focus styles; reduced-motion preference respected
- [x] GitHub, LinkedIn, JanSeva source link, and email interactions
- [x] Contact form validation with honest mailto fallback
- [x] Resume action is configured only when an actual PDF path is provided
- [x] SEO metadata and initials favicon

Professional work is described at a high level; no confidential source links or demo URLs are shown. JanSeva's wider civic workflows are described as a concept, not as implemented features.
