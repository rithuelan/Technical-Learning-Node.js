import amqp from "amqplib";

async function publish() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const exchange = "logs";
  const message = "Broadcast message";

  await channel.assertExchange(exchange, "fanout", { durable: false });
  channel.publish(exchange, "", Buffer.from(message));

  console.log("Published:", message);
  setTimeout(() => connection.close(), 500);
}

publish();
