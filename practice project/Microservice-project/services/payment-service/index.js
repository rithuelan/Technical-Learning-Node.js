import amqp from "amqplib";


const conn = await amqp.connect("amqp://localhost");
const ch = await conn.createChannel();


await ch.assertExchange("order-exchange", "fanout");
const q = await ch.assertQueue("");
await ch.bindQueue(q.queue, "order-exchange", "");


ch.consume(q.queue, msg => {
const event = JSON.parse(msg.content.toString());
if (event.type === "OrderCreated") {
console.log("Processing payment for", event.payload.id);
}
});