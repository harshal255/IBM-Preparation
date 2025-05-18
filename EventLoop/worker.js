import { parentPort } from "worker_threads";

//Simulating CPU heavy task
let total = 0;
for (let i = 0; i <= 50; i++) {
  total += i;
}

parentPort.postMessage(total);
