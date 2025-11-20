// examples/promises.js
const { readFilePromise, readFileManual } = require('../util/promisifiedFs');
const path = require('path');

// small helper that returns a promise that resolves after ms
function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

// 1) Promise chaining example
async function chainingExample() {
  console.log('--- chaining example ---');
  try {
    const a = await wait(200, 'A');
    console.log(a);
    const b = await wait(100, 'B');
    console.log(b);
    const c = await wait(50, 'C');
    console.log(c);
  } catch (err) {
    console.error('chaining error', err);
  }
}

// 2) Promise.all example
function allExample() {
  console.log('--- Promise.all example ---');
  const p1 = wait(100, 'one');
  const p2 = wait(200, 'two');
  const p3 = wait(150, 'three');
  Promise.all([p1, p2, p3])
    .then(results => console.log('all results', results))
    .catch(err => console.error('all error', err));
}

// 3) Promise.race example
function raceExample() {
  console.log('--- Promise.race example ---');
  const p1 = wait(300, 'slow');
  const p2 = wait(50, 'fast');
  Promise.race([p1, p2]).then(winner => console.log('race winner', winner));
}

// 4) Promise.allSettled (handles mixed results)
function allSettledExample() {
  console.log('--- Promise.allSettled example ---');
  const ok = wait(100, 'ok');
  const fail = Promise.reject(new Error('fail immediately'));
  Promise.allSettled([ok, fail]).then(res => console.log('settled', res));
}

// 5) Error propagation: show how to centralize catch
function errorPropagationExample() {
  console.log('--- error propagation ---');
  Promise.resolve()
    .then(() => {
      // simulate error
      throw new Error('boom');
    })
    .then(() => console.log('this wont run'))
    .catch(err => console.log('caught centrally:', err.message));
}

async function runAll() {
  await chainingExample();
  allExample();
  raceExample();
  allSettledExample();
  errorPropagationExample();
}

runAll();
