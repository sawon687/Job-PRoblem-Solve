// // Problem 14: Flatten a Nested Array  [Medium]
// // Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// // Example:
// // Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// // Hint: Use flat() or reduce() with concat().

const flattenArray=(arr:any[])=>{
   return arr.reduce((acc,curr)=>{
          if(Array.isArray(curr)){
             acc.push(...flattenArray(curr))
          }else{
            acc.push(curr)
          }
          return acc
   },[])
}













// // const  flattenArray=(arr:any[])=>{
// //    return arr.flat(Infinity)
// // }

// //recursionuse
// const  flattenArray=(arr:any[])=>{
//    return arr.reduce((acc:number[ ],curr)=>{

//        if(Array.isArray(curr))
//        {
//           acc.push(...flattenArray(curr))      
//        }else{
//           acc.push(curr)
//        }

//        return acc
//    },[])
// }


// console.log(flattenArray([1, [2, 3], [4, 5]]))


const mystringinclodes=(str:string,search:string,position=0)=>
{      console.log(str.split('').join(''))
    return str.split('').includes(search)
}
console.log(mystringinclodes('hellow world','world'))