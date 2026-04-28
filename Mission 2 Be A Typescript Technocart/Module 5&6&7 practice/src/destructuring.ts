type User = {
    id: number;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: string;
    favouriteColor: string;
}

const user: User = {
    id: 123,
    name: {
        firstName: 'Mezbaul',
        middleName: 'Abedin',
        lastName: 'Forhan'
    },
    gender: "male",
    favouriteColor: "Black"
};

const {gender} = user;

const friends = ['Karim', 'Rahim', 'Mahim'];

// const myBestFriend = friends[1];
const [, myBestFriend] = friends;
console.log(myBestFriend);