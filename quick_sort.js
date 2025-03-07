function partition(arr, s, e) {
    let pivot = arr[e];
    let i = s - 1;

    for (let j = s; j <= e - 1; j++) {
        if (arr[j] < pivot) {
            i++;

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[e]] = [arr[e], arr[i + 1]];

    return i + 1;
}

function quickSort(arr, s, e) {
    if (s >= e) {
        return;
    }

    let pivot = partition(arr, s, e);

    quickSort(arr, s, pivot - 1);
    quickSort(arr, pivot + 1, e);
}

// let arr = [2, 4, 1, 6, 9];
let arr = [3, 8, 2, 5, 1, 4, 7, 6];
let n = arr.length;
let s = 0;
let e = n - 1;
quickSort(arr, s, e);
console.log(arr);