// Example C — I/O + setImmediate vs setTimeout (useful to see poll/check)

const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('file read callback (poll phase)');

  setTimeout(() => console.log('setTimeout inside I/O callback'), 0);
  setImmediate(() => console.log('setImmediate inside I/O callback'));
});

setTimeout(() => console.log('setTimeout (timers)'), 0);
setImmediate(() => console.log('setImmediate (check)'));
