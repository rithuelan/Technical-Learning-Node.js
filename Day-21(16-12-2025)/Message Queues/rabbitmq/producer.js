import amqp from "amqplib";

async function sendMessage() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();

  const queue = "task_queue";
  const message = "Hello from Producer";

  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(message));

  console.log("Sent:", message);

  setTimeout(() => {
    connection.close();
  }, 500);
}

sendMessage();
