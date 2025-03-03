function bubbleSort(arr, n) {
    if (n <= 1) {
        return;
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    bubbleSort(arr, n - 1);
}

let arr = [3, 5, 0, 9, 8];
let n = arr.length;
bubbleSort(arr, n);
console.log(arr);