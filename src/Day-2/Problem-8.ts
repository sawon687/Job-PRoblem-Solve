// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

const isPalindrome=(str:string):Boolean=>{
    const  normalize=str.toLocaleLowerCase().split('').reverse().join('')

  return str.toLocaleLowerCase()===normalize
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('hello'))