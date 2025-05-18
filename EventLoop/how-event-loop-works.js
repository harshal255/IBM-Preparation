//require module
const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
///set UV_THREADPOOL_SIZE=10 //bydefault thread pool size is 4; set it in the cmd

//use event loop for execute
setTimeout(() => {
  console.log("Hello from set timeout");
}, 0);

//use event loop for execute
setImmediate(() => {
  console.log("Hello from set Immediate");
});

//if we execute setTimeout with 0 timer and setImmediate wi thout top level code , the order in which the 2 timers are executed is non-deterministic as it is bound by the perfomance of the process.

// this is time taken process so execute last when 1st time this is call eventloop determine this is time taken process so it move further process, and after competion of 1st cycle of event loop it check ther is pending task , so here is one task is pending that is file polling so then it's go with execute io polling task.
fs.readFile("sample.txt", "utf-8", () => {
  console.log("IO Polling Finish...");

  setTimeout(() => {
    console.log("Hello from set timeout from timer 2");
  }, 0);

  setTimeout(() => {
    console.log("Hello from set timeout from timer 3");
  }, 5000);

  //CPU Intensive Tasks execute paraller in the Thread Pool, we have default size of thread pool for 4 threads, so 4 threads run paraller and then if next CPU task remaining it execute after completion of a CPU intensive task.
  //if we want to custom size of thread pool we can by process.env.UV_THREADPOOL_SIZE

  crypto.pbkdf2("password1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} ms ,Password 1 Done`);
  });
  crypto.pbkdf2("password2", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} ms ,Password 2 Done`);
  });
  crypto.pbkdf2("password3", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} ms ,Password 3 Done`);
  });
  crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} ms ,Password 4 Done`);
  });
  crypto.pbkdf2("password5", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} ms ,Password 5 Done`);
  });
  crypto.pbkdf2("password6", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start} ms ,Password 6 Done`);
  });

  //after execution of io polling next step to set immediate so execute set immediate statement and then go to pending task if yes then go to execute pending tasks.
  setImmediate(() => {
    console.log("Hello from set Immediate 2");
  });
});

//top level code
console.log("Hello from Top Level Code");
