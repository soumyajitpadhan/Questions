function newYearCelebration(operations, n) {
    let queue = [];
    let stack = [];

    for (let i = 0; i < n; i++) {
        let [query, x] = operations[i];

        if (query === 1) {
            queue.push(x);
        }
        else if (query === 2) {
            stack.push(x);
        }
        else if (query === 3) {
            if (queue.length > 0) {
                console.log(queue[0]);
            }
            else {
                console.log(-1);
            }
        }
        else if (query === 4) {
            if (stack.length > 0) {
                console.log(stack[stack.length - 1]);
            }
            else {
                console.log(-1);
            }
        }
        else if (query === 5) {
            if (queue.length === 0 || stack.length === 0) {
                console.log(-1);
            }
            else {
                let front = queue.shift();
                stack.push(front);
            }
        }
    }
}


let operations = [[1, 4], [2, 3], [1, 2], [3], [4], [5], [4]];
let n = operations.length;
newYearCelebration(operations, n);