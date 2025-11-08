// array , object

let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push(12);

let mixedArr: (string | number)[] = ['eggs', 12, 'milk', 5, 'sugar', 1];

mixedArr.push(true);

let coordinates: [number, number] = [20, 30]; // tuple

let couple: [string, string] = ['Husband', 'Wife'];

let nameAndRole: [string, number] = ['mezba', 79];

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];


// reference type : object

const user: {
    // organization: 'Programming Hero'; // value ke type hisabe defined kortasi : literal type
    // organization: string;
    readonly organization: string; // access modifier
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: 'Programming Hero',
    firstName: 'Jhankar',
    // middleName: 'Abedin',
    lastName: 'Mahbub',
    isMarried: true
}

// user.organization = "Programming Hero Fire";

console.log(user);