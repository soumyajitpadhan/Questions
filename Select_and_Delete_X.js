function minimizeSum(arr, n) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let count = {};

    for (let num of arr) {
        // count[num] = (count[num] || 0) + 1;
        if (count[num]) {
            count[num]++;
        }
        else {
            count[num] = 1;
        }
    }

    let minSum = totalSum;
    for (let num in count) {
        let newSum = totalSum - (num * count[num]);
        minSum = Math.min(minSum, newSum);
    }
    return minSum;
}

let arr = [2, 2, 3, 4, 3, 5];
let n = arr.length;
console.log(minimizeSum(arr, n));