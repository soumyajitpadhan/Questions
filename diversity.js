function diversity(arr, n, k) {
    arr.sort((a, b) => a - b);

    let maxFamilyCount = 0;
    let start = 0;

    for (let end = 0; end < n; end++) {
        while (arr[end] - arr[start] > k) {
            start++;
        }

        let currentCount = end - start + 1;

        if (currentCount > maxFamilyCount) {
            maxFamilyCount = currentCount;
        }
    }
    console.log(maxFamilyCount);
}

let arr = [13, 1, 17, 12, 2, 15];
let n = arr.length;
let k = 5;
diversity(arr, n, k);