class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) { // linked list er last aa add kora
        const newNode = new Node(value);

        // if the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            // If the linked list is empty head ke ii tail dorbo
            this.tail = newNode;
        } else {
            // If the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        };

        this.length++;
    };

    prepend() { }; // linked list er first aa add kora

    insert() { };

    remove() { };

    print() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            console.log(currentNode.value);

            currentNode = currentNode.next;
        }
        console.log(arr.join(" -->"), " --> null");
    };
};

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print();