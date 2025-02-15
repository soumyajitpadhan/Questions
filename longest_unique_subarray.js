function longestUniqueSubarray(arr, n) {
    let i = 0;
    let j = 0;
    let maxval = -Infinity;
    let map = {};

    while (j < n) {
        if (!map[arr[j]]) {
            map[arr[j]] = 1;
            let counting = (j - i) + 1;
            if (counting > maxval) {
                maxval = counting;
            }
            j++;
        }
        else {
            map[arr[i]]--;
            i++;
        }
    }
    console.log(maxval);
}

let arr = [1, 2, 1, 3, 2, 7, 4, 2];
let n = arr.length;
longestUniqueSubarray(arr, n);