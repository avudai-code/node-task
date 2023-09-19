function fibonacci(n, memo = {}) {
    if (n in memo) {
      return memo[n];
    }
  
    if (n <= 2) {
      return 1;
    }
  
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
  
  // Test the function with a position in the series
  const position = 15; // Change this to any positive integer
  const result = fibonacci(position);
  console.log(`Fibonacci at position ${position} is ${result}`);
  