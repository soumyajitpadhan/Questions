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

var checkWavePattern = function (head) {
    if (head === null || head.next === null || head.next.next === null) {
        return head;
    }

    let curr = head;
    let iswave = true;
    let isIncrease = curr.data < curr.next.data;

    while (curr.next !== null && curr.next.next !== null) {
        if (isIncrease) {
            if (!((curr.data < curr.next.data) && (curr.next.data > curr.next.next.data))) {
                iswave = false;
                break;
            }
        }
        else {
            if (!((curr.data > curr.next.data) && (curr.next.data < curr.next.next.data))) {
                iswave = false;
                break;
            }
        }
        isIncrease = !isIncrease;
        curr = curr.next;
    }
    return iswave ? true : false;
};


let head = null;
head = addNode(head, 4);
head = addNode(head, 7);
head = addNode(head, 2);
head = addNode(head, 8);
// head = addNode(head, 8);

console.log(checkWavePattern(head));

