// once-example.js
// Demonstrates EventEmitter.once()

const EventEmitter = require("events");
const emitter = new EventEmitter();

// .once() means this listener will run only once
emitter.once("login", (user) => {
  console.log(`🔐 ${user} logged in (only once).`);
});

// Emit (trigger) the event twice
emitter.emit("login", "Rithiha");
emitter.emit("login", "Rithiha"); // Won’t trigger again


//node once-example.js
