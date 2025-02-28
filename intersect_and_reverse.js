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

function reverseList(head) {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let newNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = newNode;
    }
    return prev;
}

function intersectReverse(l1, l2) {
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    let temp = "";

    while (l1 !== null && l2 !== null) {
        if (l1.data === l2.data) {
            temp += l1.data + " ";
        }
        else {
            break;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    console.log(temp);
}

let l1 = null;
l1 = addNode(l1, 1);
l1 = addNode(l1, 34);
l1 = addNode(l1, 5);
l1 = addNode(l1, 2);
l1 = addNode(l1, 108);


let l2 = null;
l2 = addNode(l2, 7);
l2 = addNode(l2, 5);
l2 = addNode(l2, 2);
l2 = addNode(l2, 108);

intersectReverse(l1, l2);
