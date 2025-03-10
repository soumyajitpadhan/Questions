function binarySearch(arr, n, key) {
    let s = 0;
    let e = n - 1;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (key === arr[mid]) {
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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.length;
let key = 3;

console.log(binarySearch(arr, n, key));

