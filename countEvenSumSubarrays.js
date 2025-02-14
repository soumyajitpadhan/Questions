// // Brute force approach
// function countEvenSumSubarrays(arr, n) {
//     let count = 0;

//     for (let i = 0; i < n; i++) {
//         let temp = [];
//         for (let j = i; j < n; j++) {
//             temp.push(arr[j]);
//             let sum = 0;
//             for (let k = 0; k < temp.length; k++) {
//                 sum += temp[k];
//             }
//             if (sum % 2 === 0) {
//                 count++;
//             }
//         }
//     }
//     console.log(count);
// }

function countEvenSumSubarrays(arr, n) {
    let count = 0;
    let evenCount = 1;
    let oddCount = 0;
    let currSum = 0;

    for (let i = 0; i < n; i++) {

        currSum += arr[i];

        if (currSum % 2 === 0) {
            count += evenCount;
            evenCount++;
        }
        else {
            count += oddCount;
            oddCount++;
        }
    }
    console.log(count);
}

let arr = [2, 5, 4, 4, 4];
let n = arr.length;
countEvenSumSubarrays(arr, n);