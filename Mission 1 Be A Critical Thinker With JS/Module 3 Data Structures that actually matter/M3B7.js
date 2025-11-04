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
        return this;
    };

    prepend(value) { // linked list er first aa add kora
        const newNode = new Node(value);

        // if the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            // If the linked list is empty head ke ii tail dorbo
            this.tail = newNode;
        } else {
            // If the linked list is not empty
            newNode.next = this.head;
            this.head = newNode;
        };

        this.length++;
        return this;
    };

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.error("Index out of bond: sohoj bangla basay muri kha");
        }
        // if the insert is in the start of the linked list
        if (index === 0) {
            return this.prepend(value);
        }
        // if the insert is in the last of the linked list
        if (index === this.length) {
            return this.append(value);
        }

        // if the insert is in the middle

        // find the leading node

        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);

        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length++;
    };

    // Best Case = O(1)
    // Worst Case = O(n)
    remove(index) {

        if (index === 0) {
            const removedItem = this.head.value;

            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }

            this.length--;
            return removedItem;
        }


        const leadingNode = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNode.next;

        leadingNode.next = nodeToRemove.next;

        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }
    };

    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;

        //* O(n)
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    print() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);

            currentNode = currentNode.next;
        }
        console.log(arr.join(" -->"), " --> null");
    };
};

const linkedList = new LinkedList();

linkedList.append("A");
linkedList.append("B");
linkedList.append("C");

// linkedList.append(1).append(2).append(3);

// linkedList.prepend(10); // 2
// linkedList.prepend(20); // 1
// linkedList.prepend(30); // 0

// linkedList.insert(2, 200);

linkedList.print();

linkedList.remove(2);

linkedList.print();
