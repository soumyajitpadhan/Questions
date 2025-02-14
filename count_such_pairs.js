function countSuchPairs(arr, n, k) {
    let i = 0;
    let j = i + 1;
    let count = 0;

    while (i < n - 1) {
        while (j < n) {
            if (arr[i] + arr[j] === k) {
                count++;
            }
            j++;
        }
        i++;
        j = i + 1;
    }
    console.log(count);
}

let arr = [3, 0, 6, 2, 7];
let n = arr.length;
let k = 9;
countSuchPairs(arr, n, k);