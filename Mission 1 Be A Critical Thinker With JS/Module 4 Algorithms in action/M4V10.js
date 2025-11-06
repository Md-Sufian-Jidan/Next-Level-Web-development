// insertionSort([5, 3, 8, 4, 2]);

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }

//   return arr;
// };

// console.log(insertionSort([5, 3, 8, 4, 2]));

const insertionSort = (arr) => {
  console.log("Initial array:", arr);

  for (let i = 1; i < arr.length; i++) {
    console.log(`\n🔹 PASS ${i} - inserting arr[${i}] = ${arr[i]}`);

    let current = arr[i];
    let j = i - 1;

    console.log(`Start comparing ${current} with elements to its left...`);

    // Shift elements to the right to make room for 'current'
    while (j >= 0 && arr[j] > current) {
      console.log(`arr[${j}] = ${arr[j]} is greater than ${current} → shift right`);
      arr[j + 1] = arr[j];
      j--;
      console.log(`Current state: [${arr.join(", ")}]`);
    }

    arr[j + 1] = current;
    console.log(`✅ Insert ${current} at position ${j + 1}`);
    console.log(`After PASS ${i}: [${arr.join(", ")}]`);
  }

  console.log("\n🎉 Final sorted array:", arr);
  return arr;
};

// Test
insertionSort([5, 3, 8, 4, 2]);
