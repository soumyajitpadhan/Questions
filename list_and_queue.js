function listAndQueue(operations, n) {
    let queue = [];

    for (let i = 0; i < n; i++) {
        if (operations[i][0] === 'E') {
            queue.push(Number(operations[i][1]));
        }
        else if (operations[i][0] === 'D') {
            if (queue.length === 0) {
                console.log("Empty");
            }
            else {
                console.log(queue.shift());
            }
        }
    }
}

let operations = [['E', '2'], ['E', '3'], ['D'], ['D']];
let n = operations.length;
listAndQueue(operations, n);