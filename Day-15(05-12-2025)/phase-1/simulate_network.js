// simulate_network.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });

(async () => {
  try {
    await client.connect();
    const col = client.db(process.env.DB_NAME).collection("users");
    // start a long insert/write but close the client immediately to simulate network drop
    const p = col.insertMany(Array.from({length: 1000}, (_,i)=>({v:i, createdAt: new Date()})))
      .then(r=>console.log("insert done", r.insertedCount))
      .catch(e=>console.error("insert error:", e && e.message));
    // simulate network drop:
    setTimeout(() => {
      console.log("Simulating network drop: closing client");
      client.close(true).catch(()=>{});
    }, 10); // close almost immediately
    await p;
  } catch (err) {
    console.error("Top-level catch:", err.message);
  }
})();
