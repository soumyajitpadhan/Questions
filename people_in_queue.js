function peopleInQueue(k, queries, operations) {
    let queue = [];

    for (let i = 0; i < queries; i++) {
        if (operations[i][0] === 1) {
            if (queue.length < k) {
                queue.push(operations[i][1]);
                console.log(operations[i][1]);
            }
            else {
                console.log(-1);
            }
        }
        else if (operations[i][0] === 2) {
            if (queue.length > 0) {
                console.log(queue.shift());
            }
            else {
                console.log(-1);
            }
        }
    }
}


let operations = [[1, 1], [1, 2], [1, 3], [2], [2], [2]];
let k = 2;
let queries = operations.length;
peopleInQueue(k, queries, operations);