const myName = "jashfiegfouwegfiesgfksgfsegfiuehfgefyhasjbcksuegfiuewyfohekdfgweifyqefkdhbksugfuiuweyofgeiufgsekudgfsuegfiwefuigewiufeofyiweyfiuwegfkuefgiy";

const seeDCount = (myName) => {
    console.log('HH', myName);

    const myNameArray = myName.split("");

    let letterMap = {};

    myNameArray.map((eachL) => {
        if(!letterMap[eachL]){
            letterMap[eachL] = 1
        } else {
            letterMap[eachL] = letterMap[eachL] + 1;
        }
    })
    console.log("letterMap", letterMap);

}

console.log(seeDCount(myName));