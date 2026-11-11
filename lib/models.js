const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 200 },
  email: { type: String, required: true, maxlength: 320 },
  message: { type: String, required: true, maxlength: 5000 },
  ip: String,
  userAgent: String,
  createdAt: { type: Date, default: Date.now },
});

const analyticsSchema = new mongoose.Schema({
  page: { type: String, required: true, maxlength: 500 },
  ip: String,
  device: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = {
  Message: mongoose.models.Message || mongoose.model("Message", messageSchema),
  Analytics:
    mongoose.models.Analytics || mongoose.model("Analytics", analyticsSchema),
};
