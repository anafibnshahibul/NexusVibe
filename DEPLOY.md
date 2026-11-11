# Deploy NexusVibe on Vercel (single project)

## 1. Add these files to your repo root
Copy everything in this folder (api/, lib/, vercel.json, package.json, .env.example,
.gitignore) into the ROOT of NexusVibe. Keep your existing frontend/ folder.
Your old backend/ folder can stay for local use; Vercel ignores it.

## 2. Fix hardcoded API URLs in the frontend
    grep -rn "localhost:5000" frontend/src
Replace each `http://localhost:5000/api/...` with `/api/...`
(or use frontend-api-snippet.js). 

For local dev with `npm run dev`, add to frontend/vite.config.js:
    server: { proxy: { "/api": "http://localhost:5000" } }

## 3. Create a free MongoDB Atlas database
- mongodb.com/atlas -> free M0 cluster -> Database Access: create a user
- Network Access: add 0.0.0.0/0 (Vercel IPs are dynamic)
- Connect -> Drivers -> copy the connection string

## 4. Push to GitHub, then on vercel.com
- Add New -> Project -> import NexusVibe
- Root Directory: ./  (repo root, NOT frontend)
- Framework Preset: Other  (vercel.json handles the build)
- Environment Variables: MONGO_URI, and optionally RECAPTCHA_SECRET_KEY,
  VITE_RECAPTCHA_SITE_KEY
- Deploy

## 5. Test
- https://YOUR-APP.vercel.app/api/health  -> {"ok":true}
- Submit the contact form, then check Atlas -> Browse Collections -> messages
