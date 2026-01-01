function createNumArray(nums) {
    // Store the original array in closure
    const arr = nums;
  
    function sumRange(i, j) {
      let sum = 0;
      // Loop through the range and calculate the sum
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      return sum;
    }
  
    return { sumRange };
  }