const threeSum = (numsList) => {

    let result = [];

    numsList.sort((a, b) => a - b);

    for (i = 0; i < numsList.length - 2; i++) {

        if (i === 0 || numsList[i] !== numsList[i - 1]) {

            let left = i + 1, right = numsList.length - 1;

            while (left < right) {

                let sum = numsList[i] + numsList[left] + numsList[right];

                if (sum === 0) {
                    result.push([numsList[i], numsList[left], numsList[right]]);
                    while (left < right && numsList[left] !== numsList[left + 1]) left++;
                    while (left < right && numsList[right] !== numsList[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]));