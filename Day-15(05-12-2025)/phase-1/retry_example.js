// retry_example.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_URI;

async function tryConnectWithRetry(retries = 5) {
  let attempt = 0;
  while (attempt < retries) {
    try {
      const client = new MongoClient(uri, { useUnifiedTopology: true, serverSelectionTimeoutMS: 3000 });
      await client.connect();
      console.log("Connected on attempt", attempt+1);
      return client;
    } catch (err) {
      attempt++;
      const wait = Math.pow(2, attempt) * 100; // exponential backoff
      console.warn(`Connect attempt ${attempt} failed: ${err.message}. Retrying in ${wait}ms`);
      await new Promise(r=>setTimeout(r, wait));
    }
  }
  throw new Error("Unable to connect after retries");
}

(async () => {
  try {
    const client = await tryConnectWithRetry();
    // do small read
    const col = client.db(process.env.DB_NAME).collection("users");
    const doc = await col.findOne({});
    console.log("Sample doc:", !!doc);
    await client.close();
  } catch (err) {
    console.error("Final error:", err.message);
  }
})();
