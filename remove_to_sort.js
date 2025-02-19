function removeToSort(arr, n) {
    let lastIndex = 0;

    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[lastIndex]) {
            lastIndex++;
            arr[lastIndex] = arr[i];
        }
    }

    let temp = [];
    for (let i = 0; i <= lastIndex; i++) {
        temp.push(arr[i]);
    }
    console.log(temp);
}

let arr = [1, 2, 4, 3, 5, 7, 8, 6, 9, 10];
// let arr = [4, 8, 3, 7, 2, 1, 5, 9, 6, 10];
let n = arr.length;
removeToSort(arr, n);