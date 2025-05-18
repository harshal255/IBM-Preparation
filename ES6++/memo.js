const fibonacci = (n) => {
  if (n === 1 || n === 0) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const memoize = () => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log("✅ Returning from cache");
      return cache[n];
    }
    console.log("🧮 Calculating using fibonacci");
    const result = fibonacci(n);
    cache[n] = result;
    return result;
  };
};

const fibonacciFun = memoize();

// First call: cache miss, should be slow
let start = Date.now();
console.log("Memoized Fibonacci (1st call):", fibonacciFun(40));
console.log(`⏱️ Time taken (1st call): ${Date.now() - start} ms`);

// Second call: cache hit, should be fast
start = Date.now();
console.log("Memoized Fibonacci (2nd call):", fibonacciFun(40));
console.log(`⚡ Time taken (2nd call): ${Date.now() - start} ms`);

// Third call: cache hit again, very fast
start = Date.now();
console.log("Memoized Fibonacci (3rd call):", fibonacciFun(40));
console.log(`⚡ Time taken (3rd call): ${Date.now() - start} ms`);
