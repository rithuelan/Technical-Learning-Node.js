## 🟦 1. HTTP Fundamentals

HTTP (HyperText Transfer Protocol) is the communication protocol between client (browser) and server.

Stateless

Request–Response model

Uses methods such as GET, POST, PUT, DELETE

Uses status codes (200, 404, 500, etc.)

Data is transferred using headers and body

## 🟦 2. HTTP Module Basics

Node.js provides a built-in module:

const http = require("http");


Used to create servers without any framework.

## 🟦 3. Creating HTTP Servers
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from HTTP server!");
});

server.listen(3000, () => console.log("Server running on port 3000"));

## 🟦 4. Request and Response Objects

req → Incoming request

res → Server response

Example:

const http = require("http");

http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    res.end("Request received");
}).listen(3000);

## 🟦 5. Status Codes and Headers
res.writeHead(404, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "Not Found" }));


Common Status Codes:

200 OK

201 Created

400 Bad Request

401 Unauthorized

404 Not Found

500 Internal Server Error

## 🟦 6. Introduction to Express.js

Express.js is a minimal and fast Node.js web framework used to build APIs and web apps.

Features:

Routing

Middleware support

Easy handling of requests

Simplifies HTTP server creation

## 🟦 7. Setting Up Express App
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Express App Running!");
});

app.listen(3000, () => console.log("Server started"));

## 🟦 8. Express Core

Core components:

App object (express())

Routing

Middleware

Request & Response handlers

## 🟦 9. Routing (GET, POST, PUT, DELETE)
app.get("/items", (req, res) => res.send("GET all items"));
app.post("/items", (req, res) => res.send("POST add item"));
app.put("/items/:id", (req, res) => res.send(`PUT update item ${req.params.id}`));
app.delete("/items/:id", (req, res) => res.send(`DELETE item ${req.params.id}`));

## 🟦 10. Route Parameters & Query Strings
Route Parameters
app.get("/users/:id", (req, res) => {
    res.send(`User ID = ${req.params.id}`);
});

Query Strings
app.get("/search", (req, res) => {
    res.send(req.query);
});

## 🟦 11. Middleware Concepts

Middleware functions run before the final route handler.

app.use((req, res, next) => {
    console.log("Middleware executed");
    next();
});

## 🟦 12. Built-in Middleware
✔ express.json()

Parse JSON body.

app.use(express.json());

✔ express.static()

Serve static files.

app.use("/public", express.static("public"));

## 🟦 13. Custom Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

## 🟦 14. Error Handling Middleware

Must have 4 parameters:

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
});
