// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces. 

// Example 1:
// Input: s = "the sky is blue"

// Output: "blue is sky the"

// Example 2:
// Input: s = " hello world "

// Output: "world hello"


const reverseAString = (s) => {

    let concatenatedString = '';

    const splitArray = s.split(" ").filter(item => item !== '');
    // or     const splitArray = s.trim().split(" "); - NOTED


    for(i= splitArray.length - 1; i >= 0; i--){

        if(splitArray[i]){
            concatenatedString += (i === 0) ? (splitArray[i]) : (splitArray[i] + " ");
        }
    }

    return concatenatedString;

}

console.log(reverseAString(" hello world "));