import { Worker } from "worker_threads";

const runWorker = () =>
  new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js");
    worker.once("message", resolve);
    worker.once("error", reject);
  });

const main = async () => {
  console.log("Start worker");
  const result = await runWorker();
  console.log("Worker result:", result);
};

main();
console.log("Finish code...");
