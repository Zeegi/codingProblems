
const numberSeries = [1, 200, 2, 283, 3, 4, 301, 5, 275];

const findTheSecondLargestNumber = (nums) => {

    if(nums.length < 1){
        return
    }

    let largestNumber = 0;
    let secondLargestNumber = 0;

    for(i=0; i < nums.length; i++){

        if(nums[i] > largestNumber){
            secondLargestNumber = largestNumber;
            largestNumber = nums[i];
        } else if(nums[i] < largestNumber && nums[i] > secondLargestNumber){
            secondLargestNumber = nums[i];
        }

    }

    return {
        largestNumber,
        secondLargestNumber
    };


};

console.log(findTheSecondLargestNumber(numberSeries));