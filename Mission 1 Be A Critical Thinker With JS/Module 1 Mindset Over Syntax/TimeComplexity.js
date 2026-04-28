// // const startTime = performance.now();
// console.time('task');

// for (let i = 0; i < 500000; i++) {
//     console.log(i);
// }

// // const endTime = performance.now();
// console.timeEnd('task');

// // console.log(`This code took ${endTime - startTime} ms`);

// const firstArray = [];
// const secondArray = [];

// for (let i = 0; i < 6000; i++) {
//     if (i < 3000) {
//         firstArray.push(i)
//     }
//     secondArray.push(i);
// };

// console.log('first array', firstArray.length);
// console.log('second array', secondArray.length);

// console.time("map1");
// const firstUserList = firstArray.map(number => ({ userId: number }));
// console.timeEnd("map1");

// console.time("map2");
// const secondUserList = secondArray.map(number => ({ userId: number }));
// console.timeEnd("map2");

// console.time("find");

// const user = secondUserList.find(user => user.userId === 20000000);

// const user = secondUserList[2000000000];

// console.timeEnd("find");