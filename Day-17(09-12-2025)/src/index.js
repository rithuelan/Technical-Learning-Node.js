import { connectDB } from "./db.js";

const start = async () => {
  await connectDB();

  console.log("Run: npm run test:performance");
};

start();
