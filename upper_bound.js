function upperBound(arr, n, key) {
    let s = 0;
    let e = n - 1;
    let res = -1;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (key === arr[mid]) {
            res = mid;
            s = mid + 1;
        }
        else if (key <= arr[mid]) {
            e = mid - 1;
        }
        else {
            s = mid + 1;
        }
    }
    return res;
}

// let arr = [1, 1, 2, 2, 5];
let arr = [0, 2, 4, 4, 5, 5, 7, 7, 7, 9, 10];
let n = arr.length;
let key = 7;
console.log(upperBound(arr, n, key));



// function upperBound(arr, n, key) {
//     let s = 0;
//     let e = n - 1;
//     let res = null;

//     while (s <= e) {
//         let mid = s + Math.floor((e - s) / 2);

//         if (arr[mid] > key) {
//             res = mid;
//             e = mid - 1;
//         }
//         else {
//             s = mid + 1;
//         }
//     }
//     return res;
// }

// // let arr = [1, 1, 2, 2, 5];
// let arr = [0, 2, 4, 4, 5, 5, 7, 7, 7, 9, 10];
// let n = arr.length;
// let key = 7;
// console.log(upperBound(arr, n, key));