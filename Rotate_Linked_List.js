const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

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

function addNode(head, data) {
    let temp = new LinkedListNode(data);

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

// "Rotate Right a Linked List" -> that you need to shift the elements of the linked list to the right by k positions.

function rotateLeft(head, k) {
    if (head === null || k === 0) {
        return head;
    }

    let len = 1;
    let curr = head;

    while (curr.next !== null) {
        len++;
        curr = curr.next;
    }

    k = k % len;
    if (k === 0) {
        return head;
    }

    curr.next = head;

    let stepToNewTail = k;
    curr = head;

    for (let i = 1; i < stepToNewTail; i++) {
        curr = curr.next;
    }

    let newHead = curr.next;
    curr.next = null;

    return newHead;
}

function rotateRight(head, k) {
    if (head === null || k === 0) {
        return head;
    }

    let len = 1;
    let curr = head;

    while (curr.next !== null) {
        len++;
        curr = curr.next;
    }

    k = k % len;

    if (k === 0) {
        return head;
    }

    // Connect tail to head to make it circular
    curr.next = head;

    let stepToNewTail = len - k;
    curr = head;

    for (let i = 1; i < stepToNewTail; i++) {
        curr = curr.next;
    }

    let newHead = curr.next;
    curr.next = null;

    return newHead;
}

let head = null;
head = addNode(head, 10);
head = addNode(head, 20);
head = addNode(head, 30);
head = addNode(head, 40);
head = addNode(head, 50);

// let rotateListLeft = rotateLeft(head, 3);
// printList(rotateListLeft);

let rotateListRight = rotateRight(head, 3);
printList(rotateListRight);



// Why len - k for Right and k for Left?

// Rotation Type	Move Which Nodes?	    New Tail Position
// Right (k)	    Last k nodes → Front	(len - k)ᵗʰ node
// Left (k)	        First k nodes → End	     kᵗʰ node

// Right Rotation → We need to stop before the last k elements, so we use len - k.
// Left Rotation → We just need to find the kᵗʰ element, so we use k.