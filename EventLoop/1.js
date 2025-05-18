console.log('A');

setTimeout(() => {
  console.log('B');
}, 0);

Promise.resolve().then(() => {
  console.log('C');
  return Promise.resolve('D');
}).then(console.log);

(async () => {
  console.log('E');
  await Promise.resolve();
  console.log('F');
  setTimeout(() => console.log('G'), 0);
})();

queueMicrotask(() => {
  console.log('H');
});

setTimeout(() => {
  console.log('I');
}, 0);

console.log('J');
