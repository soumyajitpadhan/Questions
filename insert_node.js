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

function insertAtHead(head, data) {
    let temp = new Node(data);

    if (head === null) {
        return temp;
    }

    temp.next = head;
    head = temp;
    return head;
}

function insertAtTail(head, data) {
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

function insertAtPosition(head, data, pos) {
    let temp = new Node(data);

    if (pos === 1) {
        if (head === null) {
            return temp;
        }

        temp.next = head;
        head = temp;
        return head;
    }


    let curr = head;
    let count = 1;

    while (count < pos - 1 && curr !== null) {
        curr = curr.next;
        count++;
    }

    if (curr === null) {
        console.log("Position out of bound.");
        return head;
    }

    temp.next = curr.next;
    curr.next = temp;

    return head;
}


// let head = null;
// head = insertAtHead(head, 10);
// head = insertAtHead(head, 20);
// head = insertAtHead(head, 30);


let head = null;
head = insertAtTail(head, 10);
head = insertAtTail(head, 20);
head = insertAtTail(head, 30);
head = insertAtTail(head, 40);
head = insertAtTail(head, 50);
head = insertAtPosition(head, 60, 3);
printList(head);