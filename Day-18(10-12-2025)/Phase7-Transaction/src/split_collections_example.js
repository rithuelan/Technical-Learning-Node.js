// src/split_collections_example.js
// This is pseudocode showing pattern — you don't normally create models dynamically in Mongoose in production this way,
// but for demonstration:
import { connectDB } from "./db.js";
import mongoose from "mongoose";

async function insertEvent(event) {
  await connectDB();
  const month = new Date(event.timestamp).toISOString().slice(0,7); // "2025-12"
  const collName = `events_${month.replace("-", "_")}`; // events_2025_12

  // lightweight schema
  const schema = new mongoose.Schema({ timestamp: Date, payload: Object }, { strict: false });
  let Model;
  try {
    Model = mongoose.model(collName);
  } catch (e) {
    Model = mongoose.model(collName, schema, collName);
  }
  await Model.create(event);
  console.log("Inserted to", collName);
  process.exit(0);
}

// Usage example:
if (require.main === module) {
  insertEvent({ timestamp: new Date(), payload: { msg: "hello" } }).catch(e => console.error(e));
}
