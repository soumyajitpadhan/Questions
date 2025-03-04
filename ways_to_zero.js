function wTZ(n) {
    if (n === 0) return 1;
    if (n < 0) return 0;

    return wTZ(n - 1) + wTZ(n - 2) + wTZ(n - 5);
}

let n = 4;
console.log(wTZ(n));