// Generic Function

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: {
//     id: number; name: string
// }) => {
//     return [value];
// };


const createArrayWithGeneric = <T>(value: T) => {
    return [value];
};


// const arrString = createArrayWithString('Apple');
// const arrNum = createArrayWithNumber(222);
// const arrObj = createArrayWithUserObj({ id: 123, name: 'Mr. X' });

const arrString = createArrayWithGeneric('Apple');
const arrNumber = createArrayWithGeneric(123);
const arrObj = createArrayWithGeneric({ id: 123, name: 'Next Level' });


// tuple

const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => {
    return [param1, param2];
};

const rest1 = createArrayTupleWithGeneric('Mezba', false);

const result2 = createArrayTupleWithGeneric(222, { name: 'Mezba' });


// 
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: 'Next Level',
        ...studentInfo
    }
};





const student1 = {
    id: 123,
    name: 'Mezba',
    hasPen: true,
};

const student2 = {
    id: 321,
    name: 'Jhankar Mahbub',
    hasCar: true,
    isMarried: true,
};


const result = addStudentToCourse(student1);
const result3 = addStudentToCourse(student2);


console.log(result);
console.log(result3);