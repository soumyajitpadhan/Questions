function countSubarraysWithSumLessThanM(arr, n, m) {
    let i = 0;
    let currentSum = 0;
    let count = 0;

    for (let j = 0; j < n; j++) {
        currentSum += arr[j];

        while (currentSum >= m && i <= j) {
            currentSum -= arr[i];
            i++;
        }

        count += j - i + 1;
    }
    console.log(count);
}

let arr = [1, 5, 1, 3, 2];
let n = arr.length;
let m = 5;
countSubarraysWithSumLessThanM(arr, n, m);