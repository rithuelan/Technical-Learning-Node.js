# Message Queues Demo

This project demonstrates **Message Queues**, **RabbitMQ basics**, **Pub/Sub patterns**, **message queuing strategies**, and **background jobs with Bull** using Node.js. It is designed for learning and practice purposes.

---

## Overview

Message queues are a fundamental concept in **asynchronous communication** between applications. They allow services to send messages to a queue and other services to process them independently, improving **scalability**, **reliability**, and **performance**.

This project demonstrates two approaches:  

- **RabbitMQ** – a popular message broker for queues and pub/sub patterns.  
- **Bull + Redis** – background job processing in Node.js.  

---

## Topics Covered

- **Message Queues** – Asynchronous communication mechanism between services.  
- **RabbitMQ Basics** – Using queues, producers, and consumers.  
- **Pub/Sub Patterns** – Broadcasting messages to multiple subscribers.  
- **Message Queuing Strategies** – FIFO, durability, acknowledgements, retries.  
- **Background Jobs with Bull** – Redis-based job queue for long-running or scheduled tasks.  

---

## Project Structure

message-queues-demo/
│
├── rabbitmq/
│ ├── producer.js # Sends messages to queue
│ ├── consumer.js # Consumes messages from queue
│ ├── publisher.js # Publishes messages to exchange (pub/sub)
│ └── subscriber.js # Subscribes to exchange messages
│
├── bull/
│ ├── queue.js # Defines a Bull queue
│ ├── worker.js # Processes jobs from queue
│ └── server.js # Adds jobs to the queue via API
│
├── package.json
└── README.md

yaml
Copy code

---

## Setup & Run Instructions

### Prerequisites

- Node.js v18+  
- **Redis** installed and running (for Bull)  
- **RabbitMQ** installed and running (for message queues)  

### Install Dependencies

```bash
npm install
Run RabbitMQ Demo
Consumer (receive messages)


node rabbitmq/consumer.js
Producer (send messages)

node rabbitmq/producer.js
Pub/Sub Subscriber


node rabbitmq/subscriber.js
Pub/Sub Publisher


node rabbitmq/publisher.js
Run Bull Background Jobs
Worker (process jobs)


node bull/worker.js
Server (add jobs via API)


node bull/server.js
Open your browser and visit:


http://localhost:4000/send-email
Understanding the Topics
1. Message Queues
Decouples producer and consumer.

Messages are stored until processed.

Enables asynchronous communication and service scaling.

2. RabbitMQ Basics
Producer: Sends messages.

Consumer: Receives messages.

Queue: Stores messages until processed.

Exchange: Routes messages to queues (supports pub/sub).

3. Pub/Sub Patterns
Publisher/Subscriber pattern allows broadcasting messages to multiple consumers.

Use fanout exchanges in RabbitMQ for pub/sub.

4. Message Queuing Strategies
FIFO (First-In-First-Out): Messages processed in order.

Durable Queues: Survive broker restarts.

Acknowledgements (Ack): Consumer confirms message is processed.

Retry/Requeue: Failed messages can be retried.

5. Background Jobs with Bull
Bull is a Redis-based job queue for Node.js.

Jobs are processed asynchronously by workers.

Suitable for long-running tasks like sending emails, generating reports, or notifications.

Supports retries, delayed jobs, concurrency, and job scheduling.

