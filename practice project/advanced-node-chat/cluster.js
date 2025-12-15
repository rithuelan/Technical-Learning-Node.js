// cluster.js
import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  const cpus = os.cpus().length;

  console.log(`Master ${process.pid} running`);

  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died. Restarting`);
    cluster.fork();
  });
} else {
  import("./server.js");
}
