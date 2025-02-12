function isPrime(a) {
    if (a <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return false;
            }
        }
    }
    return true;
}

let arr = [7, 4, 0, 4, 8, 7, 7];

let map = {};

for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
        map[arr[i]]++;
    }
    else {
        map[arr[i]] = 1;
    }
}

let sum = 0;

for (let key in map) {
    if (isPrime(map[key])) {
        sum += Number(key);
    }
}

console.log(sum);