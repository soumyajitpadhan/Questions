function getPivot(arr, n) {
    let s = 0;
    let e = n - 1;

    while (s < e) {
        let mid = s + Math.floor((e - s) / 2);

        if (arr[mid] > arr[e]) {
            s = mid + 1;
        }
        else {
            e = mid;
        }
    }
    return s;
}

function binarySearch(arr, start, end, key) {
    let s = start;
    let e = end;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (arr[mid] === key) {
            return mid;
        }

        if (key < arr[mid]) {
            e = mid - 1;
        }
        else {
            s = mid + 1;
        }
    }
    return -1;
}


let arr = [3, 4, 5, 1, 2];
let n = arr.length;
let key = 5;

let pivot = getPivot(arr, n);

if (key >= arr[pivot] && key <= arr[n - 1]) {
    let ans = binarySearch(arr, pivot, n - 1, key);
    console.log(ans);
}
else {
    let ans = binarySearch(arr, 0, pivot - 1, key);
    console.log(ans);
}
