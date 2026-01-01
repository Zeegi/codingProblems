// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

strs = ["eat", "tea", "tan", "ate", "nat", "bat"];


const groupAnagrams = function(strs) {

    const sortedArryay = strs.map((item) => item.split("").sort().join(""));

    console.log('sortedArryay', sortedArryay);

    const letterMap = {};

    for (i=0; i <= strs.length; i++){
        if(!letterMap[sortedArryay[i]]){

            letterMap[sortedArryay[i]] = [strs[i]];

        } else {

            letterMap[sortedArryay[i]].push(strs[i]);

        }
    }

        return Object.values(letterMap)

}


console.log(groupAnagrams(strs));