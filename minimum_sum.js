// // Brute Force
// function minimumSum(arr, n, k) {
//     let minval = Infinity;

//     for (let i = 0; i <= n - k; i++) {
//         let sum = 0;
//         for (let j = i; j < i + k; j++) {
//             sum += arr[j];
//         }
//         if (sum < minval) {
//             minval = sum;
//         }
//     }
//     console.log(minval);
// }

function minimumSum(arr, n, k) {
    let sum = 0;
    let res = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    res = sum;

    for (let i = k; i < n; i++) {
        res = res + arr[i] - arr[i - k];
        if (res < sum) {
            sum = res;
        }
    }
    console.log(sum);
}

let arr = [9, 9, -5, 9, 5];
let n = arr.length;
let k = 3;
minimumSum(arr, n, k);