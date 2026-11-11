const mongoose = require("mongoose");

// Cache the connection across warm serverless invocations
let cached = global._mongoose;
if (!cached) cached = global._mongoose = { conn: null, promise: null };

async function connect() {
  if (cached.conn) return cached.conn;
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not set");
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(process.env.MONGO_URI, { bufferCommands: false })
      .then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

module.exports = { connect };
