// child-process-example.js
import { spawn } from 'child_process';

const child = spawn('node', ['child-task.js']); // runs another Node file

child.stdout.on('data', (data) => {
  console.log(`Output: ${data}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
