// // Brute force - Time Complexity (TC): O(n^2), Space Complexity (SC): O(n)
// function nextSmallerOfNextGreater(arr, n) {
//     let result = [];

//     for (let i = 0; i < n; i++) {
//         let isGreater = false;
//         let index = null;

//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] > arr[i]) {
//                 isGreater = true;
//                 index = j;
//                 break;
//             }
//         }

//         let isSmaller = false;
//         if (isGreater) {
//             for (let j = index + 1; j < n; j++) {
//                 if (arr[j] < arr[index]) {
//                     result.push(arr[j]);
//                     isSmaller = true;
//                     break;
//                 }
//             }
//         }

//         if (!isSmaller) {
//             result.push(-1);
//         }
//     }
//     console.log(result);
// }



//Time Complexity (TC): O(n), Space Complexity (SC): O(n)
function nextSmallerOfNextGreater(arr, n) {
    let nextGreater = new Array(n).fill(-1)
    let nextSmaller = new Array(n).fill(-1)
    let result = new Array(n).fill(-1)

    let stack = [];

    // Step 1: Find Next Greater Element (NGE) for each element
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
            nextGreater[stack.pop()] = i;
        }
        stack.push(i);
    }

    stack = [];
    // Step 2: Find Next Smaller Element (NSE) for each NGE
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            nextSmaller[stack.pop()] = arr[i];
        }
        stack.push(i);
    }

    // Step 3: Populate the result array
    for (let i = 0; i < n; i++) {
        if (nextGreater[i] !== -1) {
            result[i] = nextSmaller[nextGreater[i]];
        }
    }
    console.log(result);
}

let arr = [5, 1, 6, 2, 5, 1];
let n = arr.length;
nextSmallerOfNextGreater(arr, n);