function sortItOut(arr, n) {
    let indexArray = [];

    for (let i = 0; i < n; i++) {
        indexArray.push([i, arr[i]]);
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (indexArray[j][1] > indexArray[j + 1][1]) {
                [indexArray[j], indexArray[j + 1]] = [indexArray[j + 1], indexArray[j]];
            }
        }
    }

    let temp = "";
    for (let i = 0; i < n; i++) {
        temp += indexArray[i][0] + " ";
    }
    console.log(temp);
}

let arr = [4, 5, 3, 7, 1];
let n = arr.length;
sortItOut(arr, n);