const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1 resolved'), 500);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Promise 2 rejected'), 200); // This one settles first
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 3 resolved'), 1000);
});

Promise.race([promise1, promise2, promise3])
  .then(value => {
    console.log('Resolved:', value);
  })
  .catch(reason => {
    console.log('Rejected:', reason); // This will be logged
  });