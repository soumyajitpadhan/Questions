// // Brute Force
// function firstNegativeInteger(arr, n, k) {
//     let reusult = [];

//     for (let i = 0; i <= n - k; i++) {
//         let found = false;
//         for (let j = i; j < i + k; j++) {
//             if (arr[j] < 0) {
//                 reusult.push(arr[j]);
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             reusult.push(0);
//         }
//     }
//     console.log(reusult);
// }


function firstNegativeInteger(arr, n, k) {
    let nA = [];
    let reusult = [];

    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            nA.push(i);
        }

        if (i >= k - 1) {
            if (nA.length > 0 && nA[0] >= i - k + 1) {
                reusult.push(arr[nA[0]]);
            }
            else {
                reusult.push(0);
            }
        }

        if (nA.length > 0 && nA[0] === i - k + 1) {
            nA.shift();
        }
    }
    console.log(reusult);
}

// let arr = [-8, 2, 3, -6, 10];
let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let n = arr.length;
// let k = 2;
let k = 3;
firstNegativeInteger(arr, n, k);