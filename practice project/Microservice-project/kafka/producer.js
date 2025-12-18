import { Kafka } from "kafkajs";


const kafka = new Kafka({ brokers: ["localhost:9092"] });
export const kafkaProducer = kafka.producer();


await kafkaProducer.connect();