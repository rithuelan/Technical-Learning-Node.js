// Example B — show that nextTick runs before Promises

console.log('start');

Promise.resolve().then(() => console.log('promise'));
process.nextTick(() => console.log('nextTick'));

console.log('end');

