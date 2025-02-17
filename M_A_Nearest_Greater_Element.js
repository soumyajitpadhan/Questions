function nearest_greater_element(arr, n) {
    let leftResult = left(arr, n);
    let rightResult = right(arr, n);

    // console.log(leftResult)
    // console.log(rightResult)

    let result = [];
    for (let i = 0; i < n; i++) {
        let leftIndex = leftResult[i];
        let rightIndex = rightResult[i];

        if (leftIndex === -1 && rightIndex === -1) {
            result[i] = -1;
        }
        else if (leftIndex === -1) {
            result[i] = arr[rightIndex];
        }
        else if (rightIndex === -1) {
            result[i] = arr[leftIndex];
        }
        else {
            if (i - leftIndex <= rightIndex - i) {
                result[i] = arr[leftIndex];
            }
            else {
                result[i] = arr[rightIndex];
            }
        }
    }
    return result;
}

function right(arr, n) {
    let result = [];
    result[n - 1] = -1;
    let stack = [];
    stack.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = -1;
        }
        else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return result;
}

function left(arr, n) {
    let result = [];
    result[0] = -1;
    let stack = [];
    stack.push(0);

    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = -1;
        }
        else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    return result;
}

// let arr = [1, 7, 4, 2, 9, 1, 6, 8, 6, 10, 21];
let arr = [5, 4, 1, 3, 2];
let n = arr.length;

console.log(nearest_greater_element(arr, n));