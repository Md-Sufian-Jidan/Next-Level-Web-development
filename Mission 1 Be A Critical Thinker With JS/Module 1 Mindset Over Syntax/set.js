// set diye ki kaj kora jai ar set er use case ki???

// const set = new Set();

// set.add("apple");
// set.add("banana");
// set.add("mango");
// set.add("apple");

// console.log(set.size);

// const mezba = { userName: "MEZBA"};
// const mizan = { userName: "MIZAN"};
// const tanmoy = { userName: "TANMOY"};

// const set = new Set();

// set.add(mizan);
// set.add(mezba);
// set.add(tanmoy);
// set.add(mizan);

// const arr = ["apple", "mango", "banana", "apple"];

// const set = new Set(arr);;

// const test = set.forEach((value) => console.log(value));

// const test = Array.from(set); set ke array te transform kore then array method use korte pari

// console.log(set.has("banana")); for finding a property

// console.log(set.delete("mango")); for deleting a property

// console.log(set);

// const arr = ["apple", "mango", "banana", "apple"];

// // Brute Force

// const removeDupArr = (arr) => {
//     const newArr = [];

//     arr.forEach(element => {
//         if(!newArr.includes(element)){
//             newArr.push(element);
//         }
//     });

//     return newArr;
// };

// console.log(removeDupArr(arr));

// const removeDupSet = (arr) => {
//     const set = new Set(arr);

//     return Array.from(set);
// };

// console.log(removeDupSet(arr));

function generateSimData(size) {
    const itemPool = [
        "Apple",
        "Mango",
        "Banana",
        "Orange",
        "Grape",
        "Strawberry",
        "Pineapple",
        "Watermelon",
        "Cherry",
        "Blueberry",
        "Apple",
        "Orange"
    ]
    const generatedData = [];
    for (let i = 0; i < size; i++) {
    }
    const randomIndex Math.floor(Math.random() itemPool.length);
    generatedData.push(itemPool[randomIndex]);
    25 return generatedData;
    26
}
27
28 const hugeDataSet generateSimData(500000);
29
30 console.log("Data size", hugeDataSet.length);