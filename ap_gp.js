function checkProgression(arr) {
    if (arr.length < 2) {
        return "Array is too short to determine progression.";
    }

    let isArithmetic = true;
    let isGeometric = true;

    let commonDifference = arr[1] - arr[0];
    let commonRatio = arr[1] / arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== commonDifference) {
            isArithmetic = false;
        }

        if (arr[i + 1] / arr[i] !== commonRatio) {
            isGeometric = false;
        }

        if (!isArithmetic && !isGeometric) {
            break;
        }

    }

    if (isArithmetic) {
        return "The array is in arithmetic progression.";
    }
    else if (isGeometric) {
        return "The array is in geometric progression.";
    }
    else {
        return "The array is neither arithmetic nor geometric progression.";
    }

}

console.log(checkProgression([2, 4, 6, 8, 10]));
console.log(checkProgression([3, 6, 12, 24]));
console.log(checkProgression([1, 2, 4, 7]));