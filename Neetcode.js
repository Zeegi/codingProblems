// solving duplicates
const testArray = [1, 2, 3, 4, 5, 1];


const findDuplicate = function (mockValue) {
  
  const cleanArray = [];
  
  for(i=0; i < mockValue.length; i++){
    
      if(cleanArray.includes(mockValue[i])){
        
        return true
        
      }
       cleanArray.push(mockValue[i]);
  }
  
  return false
  
  
};

console.log(findDuplicate(testArray));