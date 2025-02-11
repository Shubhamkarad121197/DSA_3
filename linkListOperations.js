// Define a Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to traverse and print the linked list
function traverseLinkedList(head) {// Traverse and print the linked list
    let current = head; // Traverse and print the linked list
    let result = "";// Traverse and print the linked list
    while (current !== null) {// Traverse and print the linked list
        result += current.data + " -> ";// Traverse and print the linked list
        current = current.next;// Traverse and print the linked list
    }
    console.log(result + "null");// Traverse and print the linked list
}

// Searching in Linked List
function searchLinkedList(head, target) {// Searching in Linked List
    let current = head;// Searching in Linked List
    while (current !== null) {// Searching in Linked List
        if (current.data === target) {// Searching in Linked List
            return true;// Searching in Linked List
        }
        current = current.next;// Searching in Linked List
    }
    return false;
}

// Find length of Linked List
function findLength(head) {// Find length of Linked List
    let current = head;//  Find length of Linked List
    let length = 0;// Find length of Linked List
    while (current !== null) {
        length++;
        current = current.next;
    }
    return length;
}

// Insertion at Beginning
function insertionAtBeginning(head, val) {
    let newNode = new Node(val);
    newNode.next = head;// 
    return newNode;
}

// Insertion at End
function insertionAtEnd(head, val) {
    let newNode = new Node(val);
    if (head === null) {
        return newNode;
    }
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = newNode;
    return head;
}

// Insertion at Specific Position
function insertionAtPosition(head, val, pos) {
    if (pos < 1) {
        console.log("Invalid Position");
        return head;
    }
    let newNode = new Node(val);
    if (pos === 1) {
        newNode.next = head;
        return newNode;
    }
    let current = head;
    let count = 1;
    while (current !== null && count < pos - 1) {
        current = current.next;
        count++;
    }
    if (current === null) {
        console.log("Position out of bounds");
        return head;
    }
    newNode.next = current.next;
    current.next = newNode;
    return head;
}

// Deletion at Beginning
function deletionAtBeginning(head) {
    if (head === null) return null;
    return head.next;
}

// Deletion at End
function deletionAtEnd(head) {
    if (head === null || head.next === null) return null;
    let current = head;
    while (current.next.next !== null) {
        current = current.next;
    }
    current.next = null;
    return head;
}

// Deletion at Specific Position
function deletionAtPosition(head, pos) {
    if (pos < 1 || head === null) return head;// Invalid position or empty list
    if (pos === 1) return head.next; // Deletion at beginning

    let current = head;// Deletion at specific position
    let count = 1;// Traverse to the node before the position
    while (current !== null && count < pos - 1) { // If position is out of bounds
        current = current.next;// Traverse to the node before the position
        count++;// If position is out of bounds
    }   
    if (current === null || current.next === null) return head;// If position is out of bounds

    current.next = current.next.next; // Delete the node
    return head; // Return the head
}

// Main Function
function main() {
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);

    console.log("Original Linked List:");
    traverseLinkedList(head);

    console.log("\nSearching for 3:");
    console.log(searchLinkedList(head, 3) ? "Found" : "Not Found");

    console.log("\nLength of Linked List:");
    console.log(findLength(head));

    console.log("\nInsertion at Beginning (7):");
    head = insertionAtBeginning(head, 7);
    traverseLinkedList(head);

    console.log("\nInsertion at End (9):");
    head = insertionAtEnd(head, 9);
    traverseLinkedList(head);

    console.log("\nInsertion at Position 3 (5):");
    head = insertionAtPosition(head, 5, 3);
    traverseLinkedList(head);

    console.log("\nDeletion at Beginning:");
    head = deletionAtBeginning(head);
    traverseLinkedList(head);

    console.log("\nDeletion at End:");
    head = deletionAtEnd(head);
    traverseLinkedList(head);

    console.log("\nDeletion at Position 3:");
    head = deletionAtPosition(head, 3);
    traverseLinkedList(head);
}

// Execute the program
main();
