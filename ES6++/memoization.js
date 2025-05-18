const fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};


const parentFunction = () => {
  const cache = {};
  const accessLexialScopeFunction = (n) => {
    if (cache[n]) {
      console.log("Value getting from cache");
      return cache[n];
    } else {
      console.log("Value getting from Original Function");
      const fibonacciVal = fibonacci(n);
      cache[n] = fibonacciVal;
      return fibonacciVal;
    }
  };
  return accessLexialScopeFunction;
};

const memoizationFunction = parentFunction();

let start = Date.now();
console.log(
  memoizationFunction(10),
  `fibonacci 10 value from original function with time of ${
    Date.now() - start
  } ms`
);
start = Date.now();
console.log(
  memoizationFunction(10),
  `fibonacci 10 value from cached with time of ${Date.now() - start} ms`
);
start = Date.now();
console.log(
  memoizationFunction(10),
  `fibonacci 10 value from cached with time of ${Date.now() - start} ms`
);
start = Date.now();
console.log(
  memoizationFunction(10),
  `fibonacci 10 value from cached with time of ${Date.now() - start} ms`
);
