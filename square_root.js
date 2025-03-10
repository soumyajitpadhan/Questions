function squareRoot(n) {
    if (n < 2) {
        return n;
    }

    let s = 1;
    let e = n;
    let res = -1;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (mid * mid === n) {
            return mid;
        }

        if (mid * mid < n) {
            res = mid;
            s = mid + 1;
        }
        else {
            e = mid - 1;
        }
    }
    return res;
}

let n = 24;
console.log(squareRoot(n));