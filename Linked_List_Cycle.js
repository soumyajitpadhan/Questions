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

    let result = "";

    let curr = head;

    let visitedNodes = new Set();

    while (curr !== null) {
        if (visitedNodes.has(curr)) {
            result += "(Cycle detected)";
            break;
        }

        visitedNodes.add(curr);
        result += curr.data + " ";
        curr = curr.next;
    }
    console.log(result);
}

function hasCycle(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            return true;
        }
    }
    return false;
}

let head = new LinkedListNode(1);
let second = new LinkedListNode(2);
let third = new LinkedListNode(3);
let fourth = new LinkedListNode(4);
let fifth = new LinkedListNode(5);
let sixth = new LinkedListNode(6);
let seventh = new LinkedListNode(7);
let eighth = new LinkedListNode(8);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = seventh;
seventh.next = eighth;
eighth.next = third;
// eighth.next = null;

printList(head);
console.log(hasCycle(head));