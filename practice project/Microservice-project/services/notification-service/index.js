import Queue from "bull";


export const emailQueue = new Queue("emails", "redis://127.0.0.1:6379");


emailQueue.add({ to: "user@mail.com", subject: "Order Confirmed" });