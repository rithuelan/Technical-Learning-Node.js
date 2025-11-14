// input-demo.js
// Simple Node.js Script to Take User Input

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name) => {
  console.log(`Hello, ${name}! Welcome to Node.js `);
  rl.close();
});


//node input-demo.js
