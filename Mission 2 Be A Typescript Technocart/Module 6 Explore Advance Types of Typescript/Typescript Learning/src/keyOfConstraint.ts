// keyof : type operator

type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const MyVehicle: MyVehicle2 = 'Ship'

type User = {
    id: number;
    name: string;
    address: {
        city: string;
    };
}

const user: User = {
    id: 222,  // key: value
    name: 'Mezba',
    address: {
        city: "ctg",
    },
};


// const myId = user.id;
const myId = user["id"];
const myName = user["name"];
const myAddress = user["address"];

// console.log(myId, myName, myAddress);

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {

    return obj[key];
};

const result = getPropertyFromObj(user, "name");
console.log(result);


const product = {
    brand: 'HP',
};

const student = {
    id: 123,
    class: 'four',
};

const result1 = getPropertyFromObj(product, "brand");
console.log(result1);

const result2 = getPropertyFromObj(student, "id");
console.log(result2);