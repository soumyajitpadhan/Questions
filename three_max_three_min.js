function threeMax(arr, n) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        }
        else if (arr[i] > max2) {
            max3 = max2;
            max2 = arr[i];
        }
        else if (arr[i] > max3) {
            max3 = arr[i];
        }
    }
    console.log(max3, max2, max1);
}

function threeMin(arr, n) {
    let min1 = Infinity;
    let min2 = Infinity;
    let min3 = Infinity;

    for (let i = 0; i < n; i++) {
        if (arr[i] < min1) {
            min3 = min2;
            min2 = min1;
            min1 = arr[i];
        }
        else if (arr[i] < min2 && arr[i] !== min1) {
            min3 = min2;
            min2 = arr[i];
        }
        else if (arr[i] < min3 && arr[i] !== min2 && arr[i] !== min1) {
            min3 = arr[i];
        }
    }
    console.log(min1, min2, min3);
}

let arr = [1, 2, 3, 4, 2, 1, 6, 5];
let n = arr.length;
threeMin(arr, n);
threeMax(arr, n);