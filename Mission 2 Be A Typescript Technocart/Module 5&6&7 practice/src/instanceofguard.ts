// OOP : instance of type guard / type narrowing

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    getSleep(numOFhours: number) {
        console.log(`${this.name} doinik ${numOFhours} ghonta class nei`);
    };

};

class Student extends Person {
    constructor(name: string) {
        super(name);
    };

    doStudy(numOFhours: number) {
        console.log(`${this.name} doinik ${numOFhours} ghonta study kore`);
    };

};

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }

    takeClass(numOfhours: number) {
        console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
    }
};

const isStudent = (user: Person) => {
    return user instanceof Student;
};

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10);
    } else if (isTeacher(user)) {
        user.takeClass(5);
    } else {
        user.getSleep(15);
    }
};

const student1 = new Student("Mr. student");

const teacher1 = new Teacher("Mr. Teacher");

getUserInfo(student1);

getUserInfo(teacher1);