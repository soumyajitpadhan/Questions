function power(b, p) {
    if (p === 0) {
        return 1;
    }

    return b * power(b, (p - 1));
}

let b = 2;
let p = 4;
console.log(power(b, p));