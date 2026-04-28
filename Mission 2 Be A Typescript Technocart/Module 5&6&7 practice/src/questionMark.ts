
// ? ternary operator
const userRole = 'Admin';

const havePermission = (role: string) => {
    // if (role === 'Admin') {
    //     return console.log('You have the permission');
    // } else {
    //     return console.log('You do not have the permission');
    // };

    // Same logic with ternary operator

    role === 'Admin' ? console.log('You have the permission') : console.log('You do not have the permission');

};

// console.log(havePermission('Admin'));


// ?? nullish coalescing operator

const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest";

const resultWithNullish = isAuthenticated ?? "You are guest";

console.log({ resultWithTernary }, { resultWithNullish });


// ?. optional chaining
type User = {
    id: string;
    name: {
        firstName: string;
        lastName: string;
    };
}


const user: User = {
    id: '222',
    name: {
        firstName: '',
        lastName: ''
    },
};

const middleName = user?.name?.middleName;
console.log(middleName);