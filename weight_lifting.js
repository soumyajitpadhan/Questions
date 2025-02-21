function weightLifting(arr, n) {
    let harryTotal = 0;
    let johnTotal = 0;

    let l = 0;
    let r = n - 1;

    let harryCurrentWeight = 0;
    let johnCurrentWeight = 0;

    while (l <= r) {
        let harryNextWeight = 0;
        while (l <= r && harryNextWeight <= johnCurrentWeight) {
            harryNextWeight += arr[l];
            l++;
        }
        harryTotal += harryNextWeight;
        harryCurrentWeight = harryNextWeight;

        let johnNextWeight = 0;
        while (r >= l && johnNextWeight <= harryCurrentWeight) {
            johnNextWeight += arr[r];
            r--;
        }
        johnTotal += johnNextWeight;
        johnCurrentWeight = johnNextWeight;
    }
    console.log(harryTotal, johnTotal);
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let n = arr.length;
weightLifting(arr, n);