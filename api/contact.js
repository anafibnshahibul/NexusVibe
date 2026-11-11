const { connect } = require("../lib/db");
const { Message } = require("../lib/models");

const clientIp = (req) =>
  (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
  req.socket?.remoteAddress ||
  "unknown";

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message, recaptchaToken } = req.body || {};

    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, error: "Invalid input" });
    }

    // Optional reCAPTCHA verification (only if secret is configured)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        return res.status(400).json({ success: false, error: "Captcha required" });
      }
      const r = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      });
      const data = await r.json();
      if (!data.success) {
        return res.status(400).json({ success: false, error: "Captcha failed" });
      }
    }

    await connect();
    await Message.create({
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 320),
      message: String(message).slice(0, 5000),
      ip: clientIp(req),
      userAgent: req.headers["user-agent"],
    });

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error("contact error:", err);
    return res.status(500).json({ success: false });
  }
};
