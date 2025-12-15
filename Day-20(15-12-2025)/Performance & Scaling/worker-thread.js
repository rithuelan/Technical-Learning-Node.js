// worker-thread-example.js
import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
  const worker = new Worker('./worker.js');
  worker.on('message', msg => console.log(`Message from worker: ${msg}`));
} else {
  let result = 0;
  for (let i = 0; i < 1e8; i++) result += i;
  parentPort.postMessage(result);
}
