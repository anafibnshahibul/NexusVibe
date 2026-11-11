// Put this in frontend/src/api.js and use it instead of hardcoded localhost URLs.
// On Vercel VITE_API_URL is unset, so requests go to the same domain (/api/...).
export const API_BASE = import.meta.env.VITE_API_URL || "";

export const postJSON = (path, body) =>
  fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

// Usage:
//   postJSON("/api/contact", { name, email, message, recaptchaToken });
//   postJSON("/api/analytics", { page: location.pathname });
