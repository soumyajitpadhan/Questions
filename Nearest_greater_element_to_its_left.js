function nearest_greater_element_to_its_left(arr, n) {
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
            result[i] = arr[stack[stack.length - 1]];
        }
        stack.push(i);
    }
    return result;
}

let arr = [1, 7, 4, 2, 9, 1, 6, 8, 6, 10, 21];
let n = arr.length;
console.log(nearest_greater_element_to_its_left(arr, n));