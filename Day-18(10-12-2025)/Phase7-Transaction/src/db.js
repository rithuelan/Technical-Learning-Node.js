// src/db.js
import mongoose from "mongoose";

export async function connectDB(uri = process.env.MONGODB_URI || "mongodb://localhost:27017/phase7_transdb") {
  mongoose.set("strictQuery", false);
  await mongoose.connect(uri, {
    // recommended options are auto-managed in modern drivers; keep simple
    // useReplicaSet: "rs0" // not required here; provide replica set in URI if needed
  });
  console.log("MongoDB connected:", mongoose.connection.readyState);
  return mongoose.connection;
}
