// The Fibonacci series is a sequence of numbers in which each number is the sum of the two privious numbers, starting from 0 and 1.
// Recursive Approach
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
}

// Iterative Approach (Best for Performance)
// Time Complexity - O(n)
// Space Complexity - O(1)
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

let n = 4;
// console.log(fibonacci(n));
console.log(fib(n));

