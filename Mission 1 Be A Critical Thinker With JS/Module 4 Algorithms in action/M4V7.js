const binarySearch = (arr, target) => {
    console.log(`\n===================================`);
    console.log(`🚀 Searching for ${target} in: [${arr}]`);
    console.log(`===================================`);

    let low = 0;
    let high = arr.length - 1;
    let step = 1;

    while (low <= high) {
        console.log(`\n--- Step ${step} ---`);

        // 1. Log the current search window
        const currentWindow = arr.slice(low, high + 1);
        console.log(`  Window (Indices ${low} to ${high}): [${currentWindow}]`);

        // 2. Calculate the middle index (the correct way)
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        // 3. Log the guess
        console.log(`  🎯 Guessing mid index ${mid} (Value: ${guess})`);

        // 4. Log the action based on the guess
        if (guess === target) {
            console.log(`  ✅ Found it! Returning index ${mid}.`);
            return mid;
        } else if (guess > target) {
            console.log(`  ➡️ Action: ${guess} is too high. Discarding right half.`);
            high = mid - 1; // Move 'high' pointer
        } else {
            console.log(`  ➡️ Action: ${guess} is too low. Discarding left half.`);
            low = mid + 1; // Move 'low' pointer
        }
        step++;
    }

    // 5. Log if not found
    console.log(`\n--- End of Search ---`);
    console.log(`  ❌ Target ${target} was not found.`);
    return -1;
};

// --- Example 1: Target is Found ---
binarySearch([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
    73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
    85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100
], 100);

// --- Example 2: Target is Not Found ---
// binarySearch([2, 4, 6, 8, 10, 12], 3);
