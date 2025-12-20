// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself. 

// Example 1:
// Input: s = "egg", t = "add"

const ismorphicStrings = (string1, string2) => {

    if (string1.length !== string2.length) return false

    let s1Map = new Map();
    let s2Map = new Map();
    let s1Count = 0;
    let s2Count = 0;

    for (i = 0; i < string1.length; i++) {

        if (!s1Map.has(string1[i])) {
            s1Map.set(string1[i]);
            s1Count++;
        }

        if (!s2Map.has(string2[i])) {
            s2Map.set(string2[i]);
            s2Count++;
        }

    }
    console.log('s1', s1Count);
    console.log('s2', s2Count);

    return s1Count === s2Count ? true : false;

}


console.log(ismorphicStrings('bbbaaaba', 'aaabbbba'));