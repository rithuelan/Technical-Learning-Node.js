# Microservices Basics

This project/repository provides an overview of **microservices architecture**, its advantages over monolithic systems, and key concepts such as service communication, API gateways, and service discovery. It is intended for learning and reference purposes.  

---

## Overview

**Microservices** are an architectural style where an application is structured as a collection of **small, autonomous services**, each responsible for a specific business capability.  

Benefits of microservices include:

- Scalability  
- Independent deployment  
- Fault isolation  
- Technology flexibility  

---

## Topics Covered

- Microservices Basics  
- Monolith vs Microservices  
- Service Communication Patterns  
- API Gateway Pattern  
- Service Discovery  

---

## Microservices vs Monolith

| Feature                  | Monolith                           | Microservices                        |
|---------------------------|-----------------------------------|-------------------------------------|
| Architecture             | Single unified codebase           | Multiple small independent services |
| Deployment               | Entire app is deployed together    | Each service deployed independently |
| Scalability              | Scale the whole application        | Scale services individually          |
| Fault Isolation          | Failure can affect entire app      | Failure isolated to a service       |
| Technology Stack         | Single stack                       | Services can use different stacks  |
| Development Speed        | Slower for large teams             | Faster for small teams               |

---

## Service Communication Patterns

Microservices need to communicate to complete business processes. Common patterns include:

1. **Synchronous Communication**  
   - HTTP/REST or gRPC  
   - Request/Response style  
   - Pros: Simple to implement  
   - Cons: Can lead to tight coupling and latency issues  

2. **Asynchronous Communication**  
   - Message Queues (RabbitMQ, Kafka)  
   - Event-driven, publish/subscribe model  
   - Pros: Decoupled, scalable, resilient  
   - Cons: More complex to implement and debug  

---

## API Gateway Pattern

- Acts as a **single entry point** for all clients.  
- Handles **request routing, authentication, rate limiting, and caching**.  
- Simplifies client interactions by **aggregating multiple service calls**.  
- Example tools: **Kong, NGINX, API Gateway (AWS)**  

**Benefits:**

- Hides microservice complexity  
- Centralized security  
- Reduces client-server round-trips  

---

## Service Discovery

- Mechanism for **services to dynamically locate each other** in a microservices environment.  
- Avoids hardcoding service endpoints.  
- Can be **client-side** or **server-side**:

1. **Client-Side Discovery:**  
   - Client queries a **service registry** to get service instances.  
   - Examples: Netflix Eureka  

2. **Server-Side Discovery:**  
   - Client calls the **API Gateway**, which queries the service registry and routes requests.  

**Benefits:**

- Dynamic scaling of services  
- Resilient to service failures  
- Simplifies service communication  

---

## References

- [Microservices.io by Chris Richardson](https://microservices.io/)  
- [Martin Fowler – Microservices](https://martinfowler.com/articles/microservices.html)  
- [API Gateway Pattern](https://microservices.io/patterns/apigateway.html)  
- [Service Discovery Pattern](https://microservices.io/patterns/service-discovery.html)  