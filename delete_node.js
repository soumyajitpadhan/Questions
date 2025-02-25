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

function deleteNode(head, pos) {
    if (head === null) {
        console.log("Lists is empty.");
        return;
    }

    if (pos === 1) {
        head = head.next;
        return head;
    }

    let curr = head;
    let count = 1;

    while (count < pos - 1 && curr !== null) {
        curr = curr.next;
        count++;
    }

    if (curr === null || curr.next === null) {
        console.log("Position out of bound.");
        return head;
    }

    curr.next = curr.next.next;
    return head;
}

function deleteMiddleNode(head) {
    if (head === null || head.next === null) {
        console.log("List is empty or has only one node.");
        return head;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    // fast !== null --> Even count node
    // fast.next !== null --> Odd count node
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next;

    return head;
}

function deleteLastNode(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let curr = head;
    while (curr.next.next !== null) { // Stop at second-last node
        curr = curr.next;
    }

    curr.next = null; // Remove last node
    return head;
}

let head = null;
head = addNode(head, 10);
head = addNode(head, 20);
head = addNode(head, 30);
head = addNode(head, 40);
head = addNode(head, 50);
head = addNode(head, 60);

head = deleteNode(head, 3);
head = deleteMiddleNode(head);
head = deleteLastNode(head);
printList(head);