
const randomNums = [23, 1, 34, 3, 2,22, 24, 35, 25, 26, 27, 28, 29, 4, 5 ];

const longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);

    console.log("numSet", numSet);
    let longestStreak = 0;

    for (const num of numSet) {
        // Check if 'num' is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Extend the sequence as long as consecutive numbers exist
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

console.log(longestConsecutive(randomNums));