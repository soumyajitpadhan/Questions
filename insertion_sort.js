function insertionSort(arr, n) {
    let i = 1;

    while (i < n) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
            }
            else {
                break;
            }
            j--;
        }
        arr[j + 1] = temp;
        i++;
    }
}

let arr = [10, 1, 7, 4, 8, 2, 11];
let n = arr.length;
insertionSort(arr, n);
console.log(arr);