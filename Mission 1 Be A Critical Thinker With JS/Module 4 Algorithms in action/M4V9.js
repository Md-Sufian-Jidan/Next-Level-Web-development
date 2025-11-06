// // selectionSort([5, 3, 8, 4, 2]);

// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         console.log("State of arr: ", arr);

//         let minIndex = i;

//         console.log("Min Index", minIndex);

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//             console.log("Value", arr[minIndex], "Index ", minIndex);
//         };

//         if (minIndex !== i) {
//             // let temp = arr[i];
//             // arr[i] = arr[minIndex];
//             // arr[minIndex] = temp;
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//         }

//         console.log(`After pass ${i + 1}`, arr);

//     };
// };

// console.log(selectionSort([2, 4, 7, 54, 35, 6]));

// GPT Bro er explanation

// const selectionSort = (arr) => {
//   console.log("Initial array:", arr);

//   for (let i = 0; i < arr.length; i++) {
//     console.log(`\n🔹 PASS ${i + 1} - starting at index ${i}`);
//     let minIndex = i;
//     console.log(`Assume smallest = arr[${i}] = ${arr[i]}`);

//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(`Comparing arr[${j}] = ${arr[j]} with current smallest arr[${minIndex}] = ${arr[minIndex]}`);

//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//         console.log(`👉 Found new smallest: arr[${minIndex}] = ${arr[minIndex]}`);
//       }
//     }

//     if (minIndex !== i) {
//       console.log(`🔁 Swapping arr[${i}] = ${arr[i]} with arr[${minIndex}] = ${arr[minIndex]}`);
//       let temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     } else {
//       console.log(`✅ No swap needed, ${arr[i]} is already the smallest.`);
//     }

//     console.log(`After PASS ${i + 1}: [${arr.join(", ")}]`);
//   }

//   console.log("\n🎉 Final sorted array:", arr);
//   return arr;
// };

// // Test
// selectionSort([2, 4, 7, 54, 35, 6]);
