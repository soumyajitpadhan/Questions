// The Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder.    

// function gcd(a, b) {
//     while (b != 0) {
//         let reminder = a % b;
//         a = b;
//         b = reminder;
//     }
//     return a;
// }

// Using the Euclidean Algorithm (Recursive)
function gcd(a, b) {
    if (a === 0) {
        return b;
    }

    return gcd(b % a, a);
}

let a = 36;
let b = 48;

console.log(gcd(a, b));


// function gcd(a, b) {
//     if (b === 0) return a;
//     return gcd(b, a % b);
// }

// let a = 48;
// let b = 36;

// console.log(gcd(a, b));