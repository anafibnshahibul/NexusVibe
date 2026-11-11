const { connect } = require("../lib/db");
const { Analytics } = require("../lib/models");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  try {
    const { page } = req.body || {};
    if (!page) return res.status(400).json({ success: false });

    await connect();
    await Analytics.create({
      page: String(page).slice(0, 500),
      ip: (req.headers["x-forwarded-for"] || "").split(",")[0].trim(),
      device: req.headers["user-agent"],
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("analytics error:", err);
    return res.status(500).json({ success: false });
  }
};
