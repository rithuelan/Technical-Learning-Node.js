// lib/db.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME || "atlasdb";

if (!uri) throw new Error("MONGO_URI not set in .env file");

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 5000, // optional, safe
});

async function connect() {
  await client.connect();  
  return client.db(dbName);
}

async function close() {
  await client.close();
}

module.exports = { connect, close, client };
