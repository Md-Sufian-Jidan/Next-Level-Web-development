const formatValue = (input: string | number | boolean): string | number | boolean => {
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input === "number") {
        return Number(input) * 10;
    } else {
        return !input;
    };
};

const getLength = <T>(input: T): number => {
    if (typeof input === 'string') {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    } else {
        return [input].length;
    }
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    };
};

type Review = {
    title: string;
    rating: number;
}

const filterByRating = (input: Array<Review>): Array<Review> => {
    return input.filter((item) => {
        if (Number(item.rating) <= 5) {
            return Number(item?.rating) >= 4;
        }
    });
};

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (input: Array<User>): Array<User> => {
    return input.filter((item) => item?.isActive === true);
};

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

const printBookDetails = (input: Book): string => {
    return `Title: ${input['title']}, Author: ${input['author']}, Published: ${input['publishedYear']}, Available: ${input['isAvailable'] ? 'Yes' : 'No'}`
};

type Arr = (number | string)[];

const getUniqueValues = (input1: Arr, input2: Arr): Arr => {
    const arr = [input1, input2].flat(Infinity);
    let newArr: Arr = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] === arr[i]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
};

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (input: Array<Product>) => {
    return input.map((item) => {
        let total = item.price * item.quantity;
        if (item.discount) {
            total = total - Number((total * item.discount) / 100);
        }
        return total;
    }).reduce((acc, current) => acc + current, 0);
};
