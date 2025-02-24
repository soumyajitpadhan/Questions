let s1 = [];
let s2 = [];

function isEmpty(stack) {
    return stack.length === 0;
}

// T.C = O(1)
function enqueue(value) {
    s1.push(value);
}

// T.C = O(n)
function dequeue() {
    if (isEmpty(s2)) {
        if (isEmpty(s1)) {
            console.log("Underflow");
            return;
        }
        else {
            while (!isEmpty(s1)) {
                let temp = s1.pop();
                s2.push(temp);
            }
        }
    }
    return s2.pop();
}


enqueue(10);
enqueue(20);
enqueue(30);
console.log(dequeue())
console.log(dequeue())
enqueue(40);
enqueue(50);
console.log(dequeue());
