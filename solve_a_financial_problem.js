// Stock Span Problem

// function financialProblem(arr, n) {
//     let span = 1;
//     let temp = "";

//     for (let i = 0; i < n; i++) {
//         let count = 0;
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[j] < arr[i]) {
//                 count++;
//             }
//             else {
//                 break;
//             }
//         }
//         temp += (span + count) + " ";
//     }
//     return temp;
// }

function financialProblem(arr, n) {
    let result = [];
    result[0] = 1;
    let stack = [];
    stack.push(0);

    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = i + 1;
        }
        else {
            result[i] = i - stack[stack.length - 1];
        }
        stack.push(i);
    }

    return result;
}


let arr = [100, 60, 70, 65, 80, 85];
// let arr = [10, 20, 30, 40, 50, 60, 70];
let n = arr.length;
console.log(financialProblem(arr, n));