const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function printList(head) {
    if (head == null) {
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

var reversePair = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let dummy = new LinkedListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while (curr !== null && curr.next !== null) {
        let nextNode = curr.next;
        curr.next = nextNode.next;
        nextNode.next = curr;
        prev.next = nextNode;

        prev = curr;
        curr = curr.next;
    }

    head = dummy.next;
    return head;
};

let head = null;
head = addNode(head, 1);
head = addNode(head, 2);
head = addNode(head, 3);
head = addNode(head, 4);
head = addNode(head, 5);
let reversedHead = reversePair(head);
printList(reversedHead);