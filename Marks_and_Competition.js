// function markandcompition(arr) {
//     let temp = "";

//     for (let i = 0; i < arr.length; i++) {
//         let isfound = false;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] > arr[i]) {
//                 isfound = true;
//                 break;
//             }
//         }
//         if (!isfound) {
//             temp += arr[i] + " ";
//         }
//     }
//     console.log(temp);
// }

function markandcompition(arr) {
    let n = arr.length;
    let result = [];
    let maxRight = -Infinity;

    for (let i = n - 1; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            result.push(arr[i]);
            maxRight = arr[i];
        }
    }
    console.log(result.reverse());
}

let arr = [16, 17, 4, 3, 5, 2];
markandcompition(arr);