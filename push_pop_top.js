let stack = [];

function isEmpty(st) {
    return st.length === 0;
}

function push(value) {
    stack.push(value);
}

function pop() {
    if (!isEmpty(stack)) {
        return stack.pop();
    }
}

function top() {
    if (!isEmpty(stack)) {
        return stack[stack.length - 1];
    }
    else {
        return "Stack is empty.";
    }
}

push(10);
push(20);
push(30);
pop();
pop();
console.log(top());
pop();
console.log(top());