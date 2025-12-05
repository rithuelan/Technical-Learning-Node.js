// query_all.js
const { connect, close } = require("./lib/db");

(async () => {
  const db = await connect();
  const col = db.collection("users");

  const start = process.hrtime.bigint();
  try {
    const docs = await col.find({}).toArray();
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1_000_000;
    console.log(`Fetched ${docs.length} docs in ${ms.toFixed(2)} ms`);
  } catch (err) {
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1_000_000;
    console.error("Query error after", ms.toFixed(2), "ms:", err.message);
  } finally {
    await close();
  }
})();
