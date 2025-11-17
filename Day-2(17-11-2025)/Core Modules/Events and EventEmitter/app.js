// app.js
// Node.js Events and EventEmitter Example

// Step 1: Import 'events' module
const EventEmitter = require("events");

// Step 2: Create a new EventEmitter object
const eventEmitter = new EventEmitter();

// Step 3: Register (listen for) an event
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js Events.`);
});

// Step 4: Register another event
eventEmitter.on("bye", (name) => {
  console.log(`Goodbye, ${name}! See you soon.`);
});

// Step 5: Emit (trigger) events
eventEmitter.emit("greet", "Rithiha");
eventEmitter.emit("bye", "Rithiha");

// Step 6: Example of multiple listeners for the same event
eventEmitter.on("dataReceived", () => {
  console.log(" Data received successfully!");
});

eventEmitter.on("dataReceived", () => {
  console.log(" Data is ready for processing!");
});

// Trigger event
eventEmitter.emit("dataReceived");

// Step 7: Example — remove listener
const onConnect = () => {
  console.log(" Connected to server!");
};
eventEmitter.on("connect", onConnect);

// Emit once
eventEmitter.emit("connect");

// Remove listener and emit again
eventEmitter.removeListener("connect", onConnect);
eventEmitter.emit("connect"); // (won’t show anything)
