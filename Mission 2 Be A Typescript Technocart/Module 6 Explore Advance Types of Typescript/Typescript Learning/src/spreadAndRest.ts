// spread operator

const friends = ['Rahim', 'Karim'];

const schoolFriends = ['pintu', 'chintu', 'bulbul'];

const collegeFriends = ["Mr. Smart", "Mr. very very smart"];

// const friends = ['Rahim', 'Karim','['pintu', 'chintu', 'bulbul']];

friends.push(...schoolFriends);
friends.push(...collegeFriends);

// console.log(friends);

const user = { name: 'Mezba', phoneNo: "01700000000" };

const otherInfo = { hobby: 'outing', favouriteColor: 'Black' };

const userInfo = { ...user, ...otherInfo };

// console.log(userInfo);

// rest operator

// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//     console.log(`Sent invitation to ${friend1}`);
//     console.log(`Sent invitation to ${friend2}`);
//     console.log(`Sent invitation to ${friend3}`);
// };

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Sent invitation to ${friend}`));
};

sendInvite('bulbul', 'chulbul', 'kulbul')