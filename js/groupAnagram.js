strs = ["eat", "tea", "tan", "ate", "nat", "bat"];


const groupAnagrams = function(strs) {

    const sortedArryay = strs.map((item) => item.split("").sort().join(""));

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