function largestAreaInTheHistogram(arr, n) {
    let x = right(arr, n);
    let y = left(arr, n);

    let area = 0;
    let res = -Infinity;

    for (let i = 0; i < n; i++) {
        area = ((x[i] - y[i]) - 1) * arr[i];
        if (area > res) {
            res = area;
        }
    }
    return res;
}


function right(arr, n) {
    let result = [];
    result[n - 1] = n;
    let stack = [];
    stack.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = n;
        }
        else {
            result[i] = stack[stack.length - 1];
        }
        stack.push(i)
    }
    return result;
}


function left(arr, n) {
    let result = [];
    result[0] = -1;
    let stack = [];
    stack.push(0);

    for (let i = 1; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
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

// let arr = [6, 2, 5, 4, 5, 1, 6];
let arr = [2, 1, 5, 6, 2, 3];
let n = arr.length;
console.log(largestAreaInTheHistogram(arr, n));