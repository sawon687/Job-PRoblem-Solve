// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

const countVowels=(str:string)=>{
      const vowelStr=['a', 'e', 'i', 'o', 'u'];
       let vowelCoun=0

       str.toLocaleLowerCase().split('').forEach(s=> {
          if(vowelStr.includes(s))
          {
             vowelCoun++
          }
       })
    return vowelCoun
}

console.log(countVowels('hello'))
console.log(countVowels('javascript'))