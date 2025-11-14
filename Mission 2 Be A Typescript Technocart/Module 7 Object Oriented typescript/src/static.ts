//  static

class Counter {
    static count: number = 0;

    increment() {
        return (Counter.count = Counter.count + 1);
    };

    decrement() {
        return (Counter.count = Counter.count - 1);
    };
};

const instance1 = new Counter(); // ekta memory
console.log(instance1.increment()); // 1
console.log(instance1.increment()); // 1 >> 2
console.log(instance1.increment()); // 2 >> 3

const instance2 = new Counter(); // arekta diffirent
console.log(instance2.increment()); // 1
console.log(instance2.increment()); // 2

const instance3 = new Counter();
console.log(instance3.increment());