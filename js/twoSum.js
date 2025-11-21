const nums = [2, 4, 7, -1];
const target = 3;

const twoSums = function(nums, target) {
  
  const checkMap = new Map();
  
  for(let i=0; i < nums.length; i++){
    
      let currentNumber = nums[i];
    
      let complement = target - currentNumber;
      console.log('complement', complement);
      console.log('iterate', nums[i]);
    
      if (checkMap.has(complement)){
        return [checkMap.get(complement), i];
      }
    
      checkMap.set(currentNumber, i);
    
  }
  return []
  
}


console.log(twoSums(nums, target));