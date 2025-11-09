// union |

type UserRole = 'admin' | 'user' | 'guest';

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'Admin Dashboard'
    } else if (role === 'user') {
        return 'User Dashboard';
    } else {
        return 'Guest dashboard';
    };
};

getDashboard('guest');

// intersection &

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowduryShaheb: EmployeeManager = {
    id: '123',
    name: 'ChowduryShaheb',
    phoneNo: '019872345',
    designation: 'Manager',
    teamSize: 10,
};