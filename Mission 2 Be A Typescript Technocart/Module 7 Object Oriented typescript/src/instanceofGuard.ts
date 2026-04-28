// oop : instance of type guard / type narrowing

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    };

    getSleep(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta ghumai`);
    }

};

class Student extends Person {
    constructor(name: string) {
        super(name);
    };

    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta study kore`);
    }

};

class Teacher extends Person {

    constructor(name: string) {
        super(name);
    };

    takeClass(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} ghonta class nei`);
    };
};


// function guard

const isStudent = (user: Person) => {
    return user instanceof Student; // user is student
};

const isTeacher = (user: Person) => {
    return user instanceof Teacher; // user is teacher
}

const getUserInfo = (user: Person) => {

    if (isStudent(user)) {
        user.doStudy(8);
    } else if (isTeacher(user)) {
        user.takeClass(6);
    } else {
        user.getSleep(10);
    };
};

const student1 = new Student("Mr. student");
const teacher1 = new Student("Mr. teacher");
const person1 = new Student("Mr. person");


getUserInfo(student1);
