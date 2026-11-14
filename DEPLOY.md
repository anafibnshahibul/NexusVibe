# Deploy NexusVibe Studio

1. Import the repository in Vercel. Use the repository root and the **Other** framework preset.
2. Create a MongoDB Atlas cluster and restricted database user.
3. Add `MONGODB_URI` in Vercel → Project Settings → Environment Variables for the environments you intend to deploy.
4. Review Atlas Network Access and allow connections from your deployment environment using the narrowest practical policy.
5. Deploy. Vercel serves the static Vite site and the API functions under `api/`.

## Local development and JsonDB fallback

Run `npm run dev` from the repository root. This starts Vite on port 5173 and the API on port 3001. With no `MONGODB_URI`, JsonDB Lite stores demo data in `data/`. The `data/` folder is ignored by Git.

JsonDB data on Vercel is ephemeral and not shared reliably between function instances. Configure `MONGODB_URI` before using the inquiry form for real business leads.

## Environment variables

- `MONGODB_URI` — MongoDB Atlas connection string; keep it private.
- `JSONDB_DIR` — optional local JsonDB data directory (default `./data`).
- `API_PORT` — optional local API port (default `3001`).
