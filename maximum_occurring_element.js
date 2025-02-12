let arr = [0, 2, 0, 0, 6, 9];
let n = arr.length;

let map = {};

for (let i = 0; i < n; i++) {
    if (map[arr[i]]) {
        map[arr[i]]++
    }
    else {
        map[arr[i]] = 1;
    }
}

let maxval = -Infinity;
let maxelement = null;

for (let key in map) {
    if (map[key] > maxval) {
        maxval = map[key];
        maxelement = key;
    }
}

console.log(maxelement);
console.log(maxval);