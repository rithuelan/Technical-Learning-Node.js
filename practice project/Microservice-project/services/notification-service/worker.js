import Queue from "bull";


const emailQueue = new Queue("emails", "redis://127.0.0.1:6379");


emailQueue.process(job => {
console.log("Sending email to", job.data.to);
});