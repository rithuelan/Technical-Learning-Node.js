# Microservices & Architecture

This project/repository provides an overview and practical understanding of **microservices architecture**, message queues, and background job processing using Node.js, RabbitMQ, and Bull. It is intended for learning, practice, and reference purposes.  

---

## Overview

Modern applications often need to scale, handle high traffic, and integrate multiple services. **Microservices architecture** addresses these needs by splitting applications into small, independent services.  

Message queues and background job systems further enhance **asynchronous communication, scalability, and fault tolerance**.

---

## Topics Covered

- Microservices Basics  
- Monolith vs Microservices  
- Service Communication Patterns  
- API Gateway Pattern  
- Service Discovery  
- Message Queues  
- RabbitMQ Basics  
- Pub/Sub Patterns  
- Message Queuing Strategies  
- Background Jobs with Bull  

---

## Microservices Basics

- Applications are split into **small, autonomous services**.  
- Each service focuses on a **specific business capability**.  
- Benefits include **independent deployment, scalability, fault isolation, and technology flexibility**.  

---

## Monolith vs Microservices

| Feature                  | Monolith                           | Microservices                        |
|---------------------------|-----------------------------------|-------------------------------------|
| Architecture             | Single unified codebase           | Multiple small independent services |
| Deployment               | Entire app deployed together      | Each service deployed independently |
| Scalability              | Scale the whole app               | Scale services individually          |
| Fault Isolation          | Failure can affect entire app      | Failure isolated to a service       |
| Technology Stack         | Single stack                       | Services can use different stacks  |
| Development Speed        | Slower for large teams             | Faster for small teams               |

---

## Service Communication Patterns

1. **Synchronous Communication**  
   - HTTP/REST or gRPC  
   - Request/Response style  
   - Pros: Simple to implement  
   - Cons: Can lead to tight coupling and latency  

2. **Asynchronous Communication**  
   - Message Queues (RabbitMQ, Kafka)  
   - Event-driven, publish/subscribe model  
   - Pros: Decoupled, scalable, resilient  
   - Cons: More complex to implement  

---

## API Gateway Pattern

- Single entry point for all clients.  
- Handles **routing, authentication, rate limiting, and caching**.  
- Aggregates multiple service calls to simplify client interaction.  
- Tools: Kong, NGINX, AWS API Gateway.  

**Benefits:**

- Hides microservice complexity  
- Centralized security  
- Reduces client-server round-trips  

---

## Service Discovery

- Mechanism for services to **locate each other dynamically**.  
- Avoids hardcoding service endpoints.  

**Types:**

1. **Client-Side Discovery:** Client queries a **service registry**. (e.g., Netflix Eureka)  
2. **Server-Side Discovery:** Client calls **API Gateway**, which queries the registry and routes requests.  

**Benefits:**  

- Supports dynamic scaling  
- Improves fault tolerance  
- Simplifies service communication  

---

## Message Queues

- Decouple producers and consumers.  
- Messages are stored in a queue until processed.  
- Enables **asynchronous communication**, scalability, and reliability.  

---

## RabbitMQ Basics

- RabbitMQ is a **message broker**.  
- Components:

  - **Producer:** Sends messages  
  - **Consumer:** Receives messages  
  - **Queue:** Stores messages until processed  
  - **Exchange:** Routes messages to queues  

---

## Pub/Sub Patterns

- Publisher/Subscriber pattern broadcasts messages to multiple consumers.  
- In RabbitMQ, **fanout exchanges** achieve pub/sub behavior.  
- Useful for notifications, event broadcasting, or log processing.  

---

## Message Queuing Strategies

- **FIFO (First-In-First-Out):** Messages processed in order  
- **Durable Queues:** Survive broker restarts  
- **Acknowledgements (Ack):** Confirm message processing  
- **Retry/Requeue:** Failed messages can be retried  

---

## Background Jobs with Bull

- Bull is a **Redis-based job queue for Node.js**.  
- Jobs processed asynchronously by workers.  
- Suitable for long-running tasks: emails, reports, notifications.  
- Supports:

  - **Retries**  
  - **Delayed jobs**  
  - **Concurrency**  
  - **Job scheduling**  

---

## References

- [Microservices.io by Chris Richardson](https://microservices.io/)  
- [Martin Fowler – Microservices](https://martinfowler.com/articles/microservices.html)  
- [RabbitMQ Official Documentation](https://www.rabbitmq.com/documentation.html)  
- [Bull Official Documentation](https://www.npmjs.com/package/bull)  

