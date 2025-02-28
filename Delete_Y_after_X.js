const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function printList(head) {
    if (head === null) {
        console.log("List is empty.");
        return head;
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

function deleteYAfterX(head, x, y) {
    let curr = head;

    while (curr !== null) {
        // Skip x nodes
        let count = 1;
        while (count < x && curr !== null) {
            curr = curr.next;
            count++;
        }

        if (curr === null) {
            return head;
        }

        // Delete y nodes
        let temp = curr;
        count = 0;
        while (count < y && temp !== null) {
            temp = temp.next;
            count++;
        }

        if (temp !== null) {
            curr.next = temp.next;
        }
        else {
            curr.next = null;
        }
        curr = curr.next;
    }
    return head;
}

let head = null;
head = addNode(head, 2);
head = addNode(head, 3);
head = addNode(head, 2);
head = addNode(head, 5);
head = addNode(head, 3);
head = addNode(head, 1);

let ans = deleteYAfterX(head, 3, 2);
printList(ans);