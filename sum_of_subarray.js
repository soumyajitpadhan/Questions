function findSubarrayWithSumK(arr, n, k) {
    let i = 0;
    let currentSum = 0;

    for (let j = 0; j < n; j++) {
        currentSum += arr[j];

        while (currentSum > k && i <= j) {
            currentSum -= arr[i];
            i++;
        }

        if (currentSum === k) {
            return "Yes";
        }
    }
    return 'No';
}

let arr = [1, 2, 1, 3, 4];
// let arr = [1, 2, 1, 3];
let n = arr.length;
let k = 3;
// let k = 5;
console.log(findSubarrayWithSumK(arr, n, k));