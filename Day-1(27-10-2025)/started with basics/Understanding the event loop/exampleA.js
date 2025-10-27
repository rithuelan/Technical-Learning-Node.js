// 3) Step-by-step examples you can run

console.log('start (sync)');

process.nextTick(() => console.log('process.nextTick'));

Promise.resolve().then(() => console.log('promise.then (microtask)'));

setTimeout(() => console.log('setTimeout (timers phase)'), 0);

setImmediate(() => console.log('setImmediate (check phase)'));

console.log('end (sync)');


//node exampleA.js