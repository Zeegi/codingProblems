
const randomString = "hariprasad";


const reverseAString = (randomString) => {

    const stringArrays = randomString.split("");
    
    for(i= stringArrays.length - 1; i >= 0; i--){

        console.log("reversing", randomString[i]);
    }

};

console.log(reverseAString(randomString));