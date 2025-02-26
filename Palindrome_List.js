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

// var isPalindrome = function (head) {

//     if (head === null || head.next === null) {
//         return true;
//     }

//     let values = [];

//     let curr = head;

//     while (curr !== null) {
//         values.push(curr.data);
//         curr = curr.next;
//     }

//     let l = 0;
//     let r = values.length - 1;

//     while (l < r) {
//         if (values[l] !== values[r]) {
//             return false;
//         }
//         else {
//             l++;
//             r--;
//         }
//     }
//     return true;
// };


var isPalindrome = function (head) {
    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    let left = head;
    let right = prev;

    while (right !== null) {
        if (left.data !== right.data) {
            return false;
        }
        left = left.next;
        right = right.next;
    }

    return true;
};

let head = null;
head = addNode(head, 1);
head = addNode(head, 2);
head = addNode(head, 1);
// head = addNode(head, 15);
// printList(head)
console.log(isPalindrome(head));
