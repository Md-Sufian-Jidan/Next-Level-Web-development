// Union

type UserRole = 'Admin' | 'Editor' | 'Guest';

const checkDashboard = (role: UserRole) => {
    if (role === 'Admin') {
        return 'Admin Dashboard';
    } else if (role === "Editor") {
        return 'Editor Dashboard';
    } else {
        return 'Guest Dashboard';
    }
};

const user = checkDashboard('Admin');

console.log(user);

// intersection

type user = {
    id: number;
    name: string;
    age: number;
};

type Role = {
    role: 'Admin' | 'Editor' | 'Guest';
}

type SuperUser = user & Role;

const superUser: SuperUser = {
    id: 111,
    name: 'jidan',
    age: 12,
    role: 'Admin'
};
console.log(superUser);
