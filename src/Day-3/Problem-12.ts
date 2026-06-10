// Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.
// 
const  findMax=(arr:number[]):number=>{
 
    return Math.max(...arr)
}

console.log(findMax([3, 1, 7, 2, 9] ))