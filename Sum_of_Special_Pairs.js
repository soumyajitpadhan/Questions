function isPrime(n) {
    if (n < 2) {
        return false;
    }
    else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}

function sumOfSpecialPairs(n, arr) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let diff = j - i;
            if (isPrime(diff)) {
                sum += (Math.abs(arr[i] - arr[j]));
            }
        }
    }
    console.log(sum);
}

let arr = [1, 2, 3, 5, 7, 12];
let n = arr.length;
sumOfSpecialPairs(n, arr);