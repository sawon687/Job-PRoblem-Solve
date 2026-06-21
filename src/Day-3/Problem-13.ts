// Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

  const removeDuplicates=(arr:number[])=>{
     return arr.filter((item,i)=>arr.indexOf(item)==item)
  }

  




















// const removeDuplicates=(arr:number[])=>{


// return [...new Set(arr)]
// }

// const removeDuplicates=(arr:number[])=>{

//   return arr.filter((item,index)=>
//     arr.indexOf(item)===index)

// }
//  console.log(removeDuplicates([1, 2, 2, 3, 3, 4] ))