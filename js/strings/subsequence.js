// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not). 

// Example 1:
// Input: s = "abc", t = "ahbgdc"

// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"

// Output: false


function isSubsequence(s, t) {
  let i = 0, j = 0;
  // Iterate through both strings
  while (i < s.length && j < t.length) {
    // If characters match, move the pointer for s
    if (s[i] === t[j]) {
      i++;
    }
    // Always move the pointer for t
    j++;
  }
  // If i is equal to the length of s, all characters of s were found in t
  return i === s.length;
}