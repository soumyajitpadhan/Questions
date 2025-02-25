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

function middleNode(head) {
    if (head === null || head.next === null) {
        console.log("List is empty or has only one node.");
        return null;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow.data;
}

let head = null;
head = addNode(head, 10);
head = addNode(head, 20);
head = addNode(head, 30);
head = addNode(head, 40);
head = addNode(head, 50);
head = addNode(head, 60);
console.log(middleNode(head));