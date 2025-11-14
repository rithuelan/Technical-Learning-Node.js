// 4) Microtasks vs Macrotasks — concise demo

console.log('script start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
});

console.log('script end');
