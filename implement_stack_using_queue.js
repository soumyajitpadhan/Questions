let q1 = [];
let q2 = [];

function isEmpty(queue) {
    return queue.length === 0;
}

// T.C = O(n)
function push(value) {
    q2.push(value);

    while (!isEmpty(q1)) {
        let front = q1.shift();
        q2.push(front);
    }

    let temp = q1;
    q1 = q2;
    q2 = temp;
}

// T.C = O(1)
function pop() {
    if (isEmpty(q1)) {
        console.log("Stack is empty");
        return;
    }

    return q1.shift();
}

push(10);
push(20);
push(30);
console.log(pop());
console.log(pop());
push(40);
push(50);
console.log(pop());