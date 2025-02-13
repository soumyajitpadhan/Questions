function selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
}

let arr = [3, 5, 0, 9, 8];
let n = arr.length;
selectionSort(arr, n);