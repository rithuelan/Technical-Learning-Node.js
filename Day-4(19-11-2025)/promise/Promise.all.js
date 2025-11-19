const promise1 = Promise.resolve(3);
const promise2 = 42; // Non-promise values are treated as resolved promises
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Expected output: [3, 42, "foo"]
  })
  .catch((error) => {
    console.error(error); // This block would execute if any promise rejected
  });