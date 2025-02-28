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

var sortList = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let dummy = new LinkedListNode(0);
    let curr = head;

    while (curr !== null) {
        let prev = dummy;
        let nextNode = curr.next;

        while (prev.next !== null && prev.next.data < curr.data) {
            prev = prev.next;
        }

        curr.next = prev.next;
        prev.next = curr;

        curr = nextNode;
    }
    return dummy.next;
};

let head = null;
head = addNode(head, 2);
head = addNode(head, 1);
head = addNode(head, 3);
head = addNode(head, 4);

let st = sortList(head);
printList(st);
