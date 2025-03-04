function binary(n) {
    if (n === 0) return "";
    return binary(Math.floor(n / 2)) + (n % 2);
}

let n = 15;
console.log(binary(n));