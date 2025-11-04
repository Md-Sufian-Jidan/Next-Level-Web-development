//* Task 1: Implement Queue using Linked List
//* Task 2: Implement Stack using Linked List

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0
    }

    enqueue(value) {
        const newQueue = new Node(value);

        if (this.isEmpty()) {
            this.first = newQueue;
            this.last = newQueue;
        } else {
            this.last.next = newQueue;
            this.last = newQueue;
        }
        this.length++;
    };

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const removedValue = this.first.value;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.length--;
        return removedValue;
    }

    isEmpty() {
        return this.length === 0;
    }
    peek() {
        return this.first ? this.first.value : undefined;
    };
    print() {
        const array = [];
        let currentNode = this.first;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("Front -> " + array.join(" -> ") + " -> Back");
    };
};

const queue = new Queue();

// queue.enqueue("A");
// queue.enqueue("B");
// queue.enqueue("C");
// console.log(queue.peek());   // A

// queue.dequeue();             // removes A
// console.log(queue.peek());   // B

// queue.dequeue();             // removes B
// queue.dequeue();             // removes C

// queue.dequeue();             // Queue is empty


class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    };

    push(value) {
        const newStack = new Node(value);

        if (this.isEmpty()) {
            this.top = newStack;
        } else {
            this.top.next = newStack;
            this.top = newStack;
        }

        this.length++
    };

    pop() {
        const removedItem = this.top;

        if (this.isEmpty()) {
            return null;
        } else {
            this.top = this.top.next;

        }

        this.length--;
        return removedItem;

    };

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.top;

    };

    isEmpty() {
        if (this.length === 0) return true;
    };

    print() {
        currentNode = this.top;

        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = this.top;
        }
    }
};

const stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)
