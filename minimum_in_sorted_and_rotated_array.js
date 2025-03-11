function minimum(arr, n) {
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
    return arr[s];
}

let arr = [11, 12, 15, 26, 2, 5, 6, 8];
let n = arr.length;

console.log(minimum(arr, n));