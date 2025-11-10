// object destructuring
// array destructuring

const user: {
    id: number;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: string;
    favouriteColor: string;
} = {
    id: 123,
    name: {
        firstName: 'Mezbaul',
        middleName: 'Abedin',
        lastName: 'Forhan'
    },
    gender: "male",
    favouriteColor: "Black"
};

// const myFavouriteColor = user.favouriteColor;
// const myMiddleName = user.name.middleName;

const { favouriteColor, name: { middleName: myMiddleName } } = user;

// console.log(myMiddleName);

const friends = ['Karim', 'Rahim', 'Mahim'];

// const myBestFriend = friends[1];
const [, myBestFriend] = friends;
console.log(myBestFriend);