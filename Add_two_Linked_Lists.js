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

var addTwoList = function (l1, l2) {

    // l1 = reverseList(l1);
    // l2 = reverseList(l2);

    let dummyhead = new LinkedListNode(0);
    let curr = dummyhead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let v1 = 0;
        let v2 = 0;

        if (l1 !== null) {
            v1 = l1.data;
            l1 = l1.next;
        }

        if (l2 !== null) {
            v2 = l2.data;
            l2 = l2.next;
        }

        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);
        curr.next = new LinkedListNode(sum % 10);
        curr = curr.next;
    }
    return dummyhead.next;
    // return reverseList(dummyhead.next);
};


// let l1 = null;
// l1 = addNode(l1, 2);
// l1 = addNode(l1, 4);
// l1 = addNode(l1, 3);


// let l2 = null;
// l2 = addNode(l2, 5);
// l2 = addNode(l2, 6);
// l2 = addNode(l2, 4);


let l1 = null;
l1 = addNode(l1, 5);
l1 = addNode(l1, 6);
l1 = addNode(l1, 7);

let l2 = null;
l2 = addNode(l2, 8);
l2 = addNode(l2, 9);
l2 = addNode(l2, 2);

let ans = addTwoList(l1, l2);
printList(ans);

// 💡 Ask the interviewer how numbers are stored in the linked list (normal order or reversed order).
// 💡 If they say numbers are in reverse order, go with the simple addition approach.
// 💡 If they say numbers are in normal order, go with the reverse → add → reverse approach.
// 👉 If not specified, assume the normal order and explain the reverse → add → reverse approach because it handles all cases.

// T.C = O(max(m, n)) // where m and n are the lengths of the two lists.
// S.C = O(max(m, n)) (for the new linked list)