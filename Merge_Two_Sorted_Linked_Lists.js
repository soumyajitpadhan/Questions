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

var mergeTwoLists = function (l1, l2) {
    let dummy = new LinkedListNode(-1);
    let curr = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.data <= l2.data) {
            curr.next = l1;
            l1 = l1.next;
        }
        else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1 !== null) {
        curr.next = l1;
    }

    if (l2 !== null) {
        curr.next = l2;
    }

    return dummy.next;
};

let l1 = null;
l1 = addNode(l1, 1);
l1 = addNode(l1, 1);
l1 = addNode(l1, 2);


let l2 = null;
l2 = addNode(l2, 2);
l2 = addNode(l2, 3);
l2 = addNode(l2, 4);
l2 = addNode(l2, 5);

let res = mergeTwoLists(l1, l2);
printList(res);

