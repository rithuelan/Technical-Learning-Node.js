import Bull from "bull";

const jobQueue = new Bull("email-queue", {
  redis: { host: "127.0.0.1", port: 6379 }
});

export default jobQueue;
