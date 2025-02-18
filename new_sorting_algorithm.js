function newSortingAlgo(arr, n, k) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if ((arr[j] % k) > (arr[j + 1] % k)) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(arr);
}


let arr = [12, 18, 17, 65, 46];
let n = arr.length;
let k = 6;
newSortingAlgo(arr, n, k);