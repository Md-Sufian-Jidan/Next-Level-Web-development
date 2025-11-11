// as const assertion

// enum

// set of fixed string leteral ek jaigai rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer";


// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// };

/*
 {
     readonly Admin = 'Admin',
     readonly Editor = 'Editor',
     readonly Viewer = 'Viewer',
    }

    1. typeof operator
    2. keyof operator

    const user = {
    id: 222,
    name: 'Mezba'
    }

    user['id'] = 222

    typeof user;

    type user {
    id: number
    name: string
    }

    typeof UserRoles

    {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
    }

    keyof typeof UserRoles
    'Admin' | 'Editor' | 'Viewer'

    'ADMIN' | 'EDITOR' | 'VIEWER'

    UserRoles['Admin]  >>>  'ADMIN'
        typeof UserRoles[keyof typeof UserRoles]


 */

const UserRoles = {
    Admin: 'ADMIN',
    Editor: 'EDITOR',
    Viewer: 'VIEWER',
} as const;

// UserRoles.Admin = 'Mon chasse';



const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {

    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    };

};


const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);









