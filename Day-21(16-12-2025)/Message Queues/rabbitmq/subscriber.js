import amqp from "amqplib";

async function subscribe() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchange = "logs";
  await channel.assertExchange(exchange, "fanout", { durable: false });

  const q = await channel.assertQueue("", { exclusive: true });
  channel.bindQueue(q.queue, exchange, "");

  console.log("Waiting for logs...");

  channel.consume(q.queue, (msg) => {
    console.log("Received:", msg.content.toString());
  });
}

subscribe();
