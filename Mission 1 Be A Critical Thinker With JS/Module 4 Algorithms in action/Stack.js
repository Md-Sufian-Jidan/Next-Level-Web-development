export default class Stack {
    constructor() {
        this.values = [];
    }

    push(value) {
        this.values.push(value);
    };

    pop() {
        if (this.isEmpty()) {
            return undefined;
        };

        return this.values.pop();

    };

    peek() {
        if (this.isEmpty()) {
            return undefined;
        };

        return this.values[this.values.length - 1];

    };

    isEmpty() {
        return this.values.length === 0;
    };

    print() {
        console.log(this.values.slice().reverse().join(" => "));
    };
}