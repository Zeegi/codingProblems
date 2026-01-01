const randomNums = [23, 1, 34, 3, 2, 24, 35, 25, 26, 27, 28, 29, 4, 5, 22];

const longestConsectiveSequence = (nums) => {

    if (nums.length < 1) {
        return 0;
    }

    const numsSet = new Set(nums); // removing the duplicates
    let longestStreak = 0;

    for (const num of numsSet) {
        // entering into the loop only if the prior number is NOT present in the list. If it is there it skips the loop. 
        // this number which is skipped will be counted when the real prior number is been processed
        if (!numsSet.has(num - 1)) {
            let currentNumber = num;
            currentStreak = 1;

            while (numsSet.has(currentNumber + 1)) {
                console.log('currentNumber:', currentNumber);
                currentNumber++;
                currentStreak++;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
};

console.log(longestConsectiveSequence(randomNums));