type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string;
        city: string;
    },
};


const user1: User = {
    id: 123,
    name: {
        firstName: 'Mr.',
        lastName: 'X',
    },
    gender: 'male',
    contactNo: '017777777',
    address: {
        city: 'Chattogram',
        division: 'Chattogram',
    },
};

const user2: User = {
    id: 123,
    name: {
        firstName: 'Mr.',
        lastName: 'Y',
    },
    gender: 'male',
    contactNo: '01999999',
    address: {
        city: 'Chattogram',
        division: 'Chattogram',
    },
};

const user3: User = {
    id: 123,
    name: {
        firstName: 'Mr.',
        lastName: 'Z',
    },
    gender: 'female',
    contactNo: '01888888888888',
    address: {
        city: 'Chattogram',
        division: 'Chattogram',
    },
};

type IsAdmin = true;

const IsAdmin: IsAdmin = true;

type Name = string;

const myName: Name = "Mr. X";

// functions

type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;

console.log(add);