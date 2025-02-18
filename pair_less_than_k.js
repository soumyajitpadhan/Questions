function maxPairLessthank(arr, k) {
    arr.sort((a, b) => a - b);

    let l = 0;
    let r = arr.length - 1;
    let res = -1;

    while (l < r) {
        let sum = arr[l] + arr[r];

        if (sum < k) {
            if (sum > res) {
                res = sum;
            }
            l++;
        }
        else {
            r--;
        }
    }
    console.log(res);
}

let arr = [1, 2, 3, 4, 5];
let k = 7;
maxPairLessthank(arr, k);