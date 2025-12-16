import jobQueue from "./queue.js";

jobQueue.process(async (job) => {
  console.log("Processing job:", job.data);
  await new Promise((r) => setTimeout(r, 2000));
  return "Email sent";
});
