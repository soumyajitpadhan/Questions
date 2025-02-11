function gcd(a, b) {
    while (b != 0) {
        let reminder = a % b;
        a = b;
        b = reminder;
    }
    return a;
}

let a = 36;
let b = 48;

console.log(gcd(a, b));