function squareSorting(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if ((arr[j] ** 2) > (arr[j + 1] ** 2)) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(arr);
}

let arr = [-2, 3, 1, -4, 6];
let n = arr.length;
squareSorting(arr, n);