import amqp from "amqplib";


const connection = await amqp.connect("amqp://localhost");
export const rabbitChannel = await connection.createChannel();


await rabbitChannel.assertExchange("order-exchange", "fanout");