// src/db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

function loadEnv(file) {
  // dotenv already configured by CLI script; this keeps safe fallback
  dotenv.config();
}

async function connect() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI not set in env");
  // useNewUrlParser/useUnifiedTopology not required in Mongoose v7
  await mongoose.connect(uri, {
    dbName: process.env.DB_NAME || undefined,
    // other mongoose options can go here
  });
  return mongoose;
}

async function disconnect() {
  await mongoose.disconnect();
}

module.exports = { connect, disconnect, mongoose };
