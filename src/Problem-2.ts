// Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.
// method:1
// const EvenOdd=(num:number):boolean=>{
//   if(num % 2===0)
//   {
//      return true
//   }else{
//     return false
//   }
// }

// method:2
const EvenOdd=(num:number):boolean=>{
 return num %2 ==0
}

console.log(EvenOdd(4))
console.log(EvenOdd(7))