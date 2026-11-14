# NexusVibe Studio

NexusVibe is a professional digital product design and development studio website built with React, TypeScript, Vite, Sass, Tailwind CSS, and a Node API. Its service catalog, project portfolio, and project-inquiry form are backed by MongoDB Atlas in production, with JsonDB Lite retained as the local/demo fallback.

## Run locally

Requirements: Node.js 18+.

1. Install dependencies from the repository root with `npm install` and `npm install --prefix frontend`.
2. Optional: copy `.env.example` to `.env` and set `MONGODB_URI` to your MongoDB Atlas connection string. Never commit `.env` or paste credentials into chat.
3. Run `npm run dev` from the repository root.
4. Open `http://127.0.0.1:5173`. Vite proxies `/api` requests to the local API at `http://127.0.0.1:3001`.

If `MONGODB_URI` is absent, the site uses JsonDB Lite and writes local development collections under `data/`. The service and project collections are seeded on first run. If a valid Atlas URI is configured, MongoDB is used instead.

## What the site includes

- Studio home, full service catalog, service-detail pages, selected work, about, and project inquiry pages.
- Local image assets under `frontend/public/images`.
- `GET /api/services?resource=services` and `GET /api/services?resource=projects`.
- `POST /api/contact` stores validated project inquiries, including selected service and budget context.
- `npm run typecheck`, `npm run lint`, and `npm run build` for quality checks.

## Configure MongoDB Atlas

1. Create a MongoDB Atlas cluster and a database user with a strong password.
2. In Atlas Network Access, allow the deployment environment to connect. For Vercel, use the access method appropriate for your security requirements; avoid broad network access unless you understand the trade-off.
3. Copy the application connection string and replace the placeholders.
4. For local development, set `MONGODB_URI` in an ignored `.env` file.
5. For Vercel, add `MONGODB_URI` in Project → Settings → Environment Variables, then redeploy.

JsonDB Lite remains in the project for local design/demo data. It is not durable shared storage on Vercel; set `MONGODB_URI` for production data. This service website currently has no user accounts, client portal, or community features.

## Deploy to Vercel

Import the repository with the repository root as the project root and framework preset **Other**. `vercel.json` installs root API dependencies and frontend dependencies, builds the Vite app, and serves the functions in `api/`. Configure `MONGODB_URI` before accepting real project inquiries.
