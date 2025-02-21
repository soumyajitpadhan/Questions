// // Brute force - TC - O(n × k)
// function takeOutMaximum(arr, n, k) {
//     let maxval = -Infinity;

//     for (let i = 0; i < (n - k + 1); i++) {
//         let sum = 0;
//         for (let j = i; j < (k + i); j++) {
//             sum += arr[j];
//         }
//         maxval = Math.max(sum, maxval);
//     }
//     console.log(maxval);
// }


function takeOutMaximum(arr, n, k) {
    let res = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    res = sum;

    for (let i = k; i < n; i++) {
        res = res + arr[i] - arr[i - k];

        if (res > sum) {
            sum = res;
        }
    }
    console.log(sum);
}

// let arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let n = arr.length;
// let k = 3;
let k = 4;

takeOutMaximum(arr, n, k);