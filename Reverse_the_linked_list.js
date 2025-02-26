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

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}

let head = null;

head = addNode(head, 10);
head = addNode(head, 20);
head = addNode(head, 30);
head = addNode(head, 40);
head = addNode(head, 50);
head = reverseList(head);
printList(head);