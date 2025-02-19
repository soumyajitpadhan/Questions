function removeAdjacentDuplicates(str, n) {
    let stack = [];

    for (let i = 0; i < n; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
            stack.pop();
        }
        else {
            stack.push(str[i]);
        }
    }
    console.log(stack);
}

let str = "abbaca";
let n = str.length;
removeAdjacentDuplicates(str, n);