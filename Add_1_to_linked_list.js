const Node = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function printList(head) {
    if (head === null) {
        return;
    }

    let curr = head;

    while (curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
}

function addNode(head, data) {
    let temp = new Node(data);

    if (head === null) {
        return temp;
    }

    let curr = head;

    while (curr.next !== null) {
        curr = curr.next;
    }

    curr.next = temp;
    return head;
}

function reverseList(head) {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let newNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = newNode;
    }
    return prev;
}


function addOne(head) {
    head = reverseList(head);

    let prev = null;
    let curr = head;
    let carry = 1;

    while (curr !== null) {
        let sum = curr.data + carry;
        sum >= 10 ? carry = 1 : carry = 0;

        sum = sum % 10;
        curr.data = sum;
        prev = curr;
        curr = curr.next;
    }

    if (carry > 0) {
        prev.next = new Node(carry);
    }

    head = reverseList(head);
    return head;
}

let head = null;
// head = addNode(head, 2);
head = addNode(head, 9);
head = addNode(head, 9);
head = addNode(head, 9);
head = addNode(head, 9);

let result = addOne(head);
printList(result);