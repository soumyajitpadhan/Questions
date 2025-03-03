function sum(arr, n) {
    if (n === 0) {
        return 0;
    }

    return arr[n - 1] + sum(arr, (n - 1));
}

let arr = [6, 3, 8, 2, -4];
let n = arr.length;
console.log(sum(arr, n));