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

var fillGaps = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let curr = head;

    while (curr !== null && curr.next !== null) {
        while (curr.next.data - curr.data > 1) {
            let newNode = new LinkedListNode(curr.data + 1);
            newNode.next = curr.next;
            curr.next = newNode;
            curr = curr.next;
        }
        curr = curr.next;
    }
    return head;
};


let head = null;
head = addNode(head, 2);
head = addNode(head, 5);
head = addNode(head, 8);
head = addNode(head, 9);
head = addNode(head, 11);

let fg = fillGaps(head);
printList(fg);

