// insert.js
const { connect, close } = require("./lib/db");
const { generateUsers } = require("./lib/data");

(async () => {
  const db = await connect();
  const col = db.collection("users");

  // optionally clear collection for fair test:
  // await col.deleteMany({});

  const users = generateUsers(50);

  const start = process.hrtime.bigint();
  try {
    const res = await col.insertMany(users, { ordered: false });
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1_000_000;
    console.log(`Inserted ${res.insertedCount} documents in ${ms.toFixed(2)} ms`);
  } catch (err) {
    const end = process.hrtime.bigint();
    const ms = Number(end - start) / 1_000_000;
    console.error("Insert error after", ms.toFixed(2), "ms:", err.message);
  } finally {
    await close();
  }
})();
