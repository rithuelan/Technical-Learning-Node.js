import { rabbitChannel } from "../../rabbitmq/connection.js";
import { kafkaProducer } from "../../kafka/producer.js";


export async function publishEvent(type, payload) {
const event = { type, payload, timestamp: Date.now() };


// RabbitMQ (task-based)
rabbitChannel.publish("order-exchange", "", Buffer.from(JSON.stringify(event)));


// Kafka (event streaming)
await kafkaProducer.send({
topic: "order-events",
messages: [{ value: JSON.stringify(event) }]
});
}