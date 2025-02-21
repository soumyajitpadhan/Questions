function findPair(arr, n, k) {
    arr.sort((a, b) => a - b);

    let l = 0;
    let r = n - 1;

    while (l < r) {
        let sum = arr[l] + arr[r];
        if (sum === k) {
            return 1;
        }
        else if (sum < k) {
            l++;
        }
        else {
            r--;
        }
    }
    return -1;
}

let arr = [3, 4, 0, 2, 7];
let n = arr.length;
let k = 2;
console.log(findPair(arr, n, k));