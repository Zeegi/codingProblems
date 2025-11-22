const myName = "jashfiegfouwegfiesgfksgfsegfiuehfgefyhasjbcksuegfiuewyfohekdfgweifyqefkdhbksugfuiuweyofgeiufgsekudgfsuegfiwefuigewiufeofyiweyfiuwegfkuefgiy";

const seeDCount = (myName, nthRepeatedItem) => {
    console.log('HH', myName);

    const myNameArray = myName.split("");

    let letterMap = {};
    let remArray = [];

    myNameArray.map((eachL) => {
        if(!letterMap[eachL]){
            letterMap[eachL] = 1
        } else {
            letterMap[eachL] = letterMap[eachL] + 1;
        }
    })

    let sortedValues = Object.values(letterMap)
    .sort((a,b) => a - b)
    console.log("sortedValues", sortedValues);

    for(i=0; i < nthRepeatedItem; i++){
        let removedItem = sortedValues.pop();
        // console.log("sortedValues", sortedValues);
    remArray.push(removedItem);
    }

    return remArray;
}

console.log(seeDCount(myName, 3));