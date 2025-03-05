function famousSum(str) {
    if (str.length === 1) {
        return str;
    }

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }

    return famousSum(sum.toString());
}

// let n = 148;
let n = 123;
let k = 3;

let str = "";
for (let i = 0; i < k; i++) {
    str += n;
}

console.log(famousSum(str));


// // Optimized Code
// // Time Complexity: O(log n)
// function famousSum(n, k) {
//     let sum = 0;

//     // Step 1: Compute the sum of digits of n
//     while (n > 0) {
//         sum += (n % 10);
//         n = Math.floor(n / 10);
//     }

//     // Step 2: Multiply the sum by k
//     sum *= k;

//     // Step 3: Reduce sum to a single digit
//     while (sum >= 10) {
//         let newSum = 0;
//         while (sum > 0) {
//             newSum += (sum % 10);
//             sum = Math.floor(sum / 10);
//         }
//         sum = newSum;
//     }

//     return sum;
// }

// let n = 123, k = 3;
// console.log(famousSum(n, k));


// // Most Optimized Code - Mathematical (Modulo 9)
// // Time Complexity: O(logn)+O(1)=O(logn)
// // This loop runs once per digit in n.
// // The number of digits in n is logarithmic in relation to n, specifically O(log n) (base 10).
// // Example:
// // If n = 123, it has 3 digits → Loop runs 3 times.

// // let result = (sum * k - 1) % 9 + 1;
// // This step is just a mathematical formula, which runs in O(1) time (constant time).

// function famousSum(n, k) {
//     let sum = 0;
//     while (n > 0) {
//         sum += (n % 10);
//         n = Math.floor(n / 10);
//     }

//     let result = (sum * k - 1) % 9 + 1;
//     return result;
// }

// let n = 123, k = 3;
// console.log(famousSum(n, k));
