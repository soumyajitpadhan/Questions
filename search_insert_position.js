function insertPosition(arr, n, k) {
    let s = 0;
    let e = n - 1;
    let res = n;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (k <= arr[mid]) {
            res = mid;
            e = mid - 1;
        }
        else {
            s = mid + 1;
        }
    }
    return res;
}

let arr = [1, 3, 5, 6]
let n = arr.length;
let k = 2;
console.log(insertPosition(arr, n, k)); 