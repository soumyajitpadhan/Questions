const Node = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function addNode(head, data) {
    let temp = new Node(data);

    if (head == null) {
        return temp;
    }

    let curr = head;

    while (curr.next !== null) {
        curr = curr.next;
    }

    curr.next = temp;
    return head;
}

function printList(head) {
    if (head === null) {
        console.log("List is empty.");
        return;
    }

    let curr = head;

    while (curr !== null) {
        console.log(curr.data);
        curr = curr.next;
    }
}


function nthNodeFromEnd(head, n) {
    if (head === null || n === 0) {
        return null;
    }

    let first = head;
    let second = head;
    let count = 0;

    while (count < n) {
        if (first === null) {
            return null; // If n is greater than the length of the list
        }
        first = first.next;
        count++;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }
    return second.data;
}

let head = null;

head = addNode(head, 10);
head = addNode(head, 20);
head = addNode(head, 30);
head = addNode(head, 40);
head = addNode(head, 50);
console.log(nthNodeFromEnd(head, 3));