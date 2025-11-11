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



 */
var UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
};
// UserRoles.Admin = 'Mon chasse';
var canEdit = function (role) {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else {
        return false;
    }
    ;
};
var isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);
