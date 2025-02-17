// // Brute force - O(n²)
// function product(arr, n) {
//     let temp = "";
//     for (let i = 0; i < n; i++) {

//         let mul = 1;

//         for (let j = i - 1; j >= 0; j--) {
//             mul *= arr[j];
//         }

//         for (let j = i + 1; j < n; j++) {
//             mul *= arr[j];
//         }

//         temp += mul + " ";
//     }
//     console.log(temp);
// }


// Time Complexity (TC): O(n)
// Space Complexity (SC): O(n)
function product(arr, n) {

    // let result = new Array(n).fill(1);

    let result = [];
    for (let i = 0; i < n; i++) {
        result[i] = 1;
    }

    // Calculate the left product for each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= leftProduct;
        leftProduct *= arr[i];
    }

    // Calculate the right product for each element
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }

    console.log(result);

}

let arr = [1, 2, 3, 4];
let n = arr.length;
product(arr, n);

