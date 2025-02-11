let arr = [101, 102, 101, 103, 102, 101, 105, 106, 105];
let n = arr.length;

let map = {};

for (let i = 0; i < n; i++) {
    if (map[arr[i]]) {
        map[arr[i]]++;
    }
    else {
        map[arr[i]] = 1;
    }
}

let count = 0;

for (let key in map) {
    if (map[key] % 2 === 0) {
        count++;
    }
}

console.log(count);