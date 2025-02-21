function validStackSequence(inArr, outArr, n) {
    let stack = [];
    let j = 0;

    for (let i = 0; i < n; i++) {
        stack.push(inArr[i]);

        while (stack.length > 0 && j < n && stack[stack.length - 1] === outArr[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
}


let inArr = [1, 2, 3, 4, 5]
let outArr = [4, 5, 3, 2, 1];
let n = inArr.length;

console.log(validStackSequence(inArr, outArr, n));  