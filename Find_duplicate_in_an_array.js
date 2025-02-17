function findDuplicate(arr, n) {
    let res = 0;

    for (let i = 0; i < n; i++) {
        res ^= arr[i];
    }

    for (let i = 1; i < n; i++) {
        res ^= i;
    }
    console.log(res);
}

let arr = [1, 3, 3, 2, 4];
let n = arr.length;
findDuplicate(arr, n);

