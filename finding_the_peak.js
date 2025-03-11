function peak(arr, n) {
    if (n === 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;

    let s = 1;
    let e = n - 2;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        }

        if (arr[mid] > arr[mid - 1]) {
            s = mid + 1;
        }
        else {
            e = mid - 1;
        }
    }
    return -1;
}

let arr = [0, 1, 2, 1];
// let arr = [4];
let n = arr.length;
console.log(peak(arr, n));