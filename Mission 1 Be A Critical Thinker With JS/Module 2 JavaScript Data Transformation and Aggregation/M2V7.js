//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
];

// TODO initiate empty object
// TODO check it the response already exist or not
// TODO if not the initialize it with

const arr = surveyResponses.reduce((table, response) => {
    // console.log(table, ': ', response);
    // if (table[response]) {
    //     table[response] = table[response] + 1;
    // } else {
    //     table[response] = 1;
    // }

    table[response] = (table[response] || 0) + 1;

    return table;
}, {});

console.log(arr);

//? Output
// { A: 5, C: 3, B: 5, D: 1 }