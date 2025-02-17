function competeWithNeighbour(arr, n) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        if ((i === 0 && arr[i] > arr[i + 1]) || (i === n - 1 && arr[i] > arr[i - 1])) {
            count++;
        }
        else if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
            count++;
        }
    }
    console.log(count);
}

let arr = [1, 2, 3, 4, 2, 1, 6, 5];
let n = arr.length;
competeWithNeighbour(arr, n);