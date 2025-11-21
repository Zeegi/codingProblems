string1 = "ceat";
string2 = "taec";


const isAnagram = function (string1, string2) {
 
  if(string1.length !== string2.length){
    return false;
  }
  
  const sCount = {};
  const tCount = {};
  
  for(i=0; i < string1.length; i++){
    
    if(!sCount[string1[i]]){
      sCount[string1[i]] = 0;
    }
    
    if(!tCount[string2[i]]){
      tCount[string2[i]] = 0;
    }
    
    sCount[string1[i]]++;
    tCount[string2[i]]++;
    
  }
  
  console.log('sCount', sCount);
  console.log('tCount', tCount);
  
  for( let i in sCount){
    if(sCount[i] !== tCount[i]){
      console.log('letter', i);
      return false
    }
  }
  
  return true
  
  
}


console.log(isAnagram(string1, string2));