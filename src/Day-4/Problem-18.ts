// Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.

// function fizzBuzz(n:number) {
//     const result=[]
//      for(let i=1; i<=n ; i++)
//      {
//          if(i%3==0 && i%5==0)
//          {
//             result.push('FizzBuzz')
//          }
//          else if(i%3==0)
//          {
//              result.push('fizz')
//          }
//            else if(i%5==0)
//          {
//              result.push('buzz')
//          }else{
//             result.push(i)
//          }

//      }
//      return result
// }

// console.log(fizzBuzz(15).join(','))



// এখন জাম্প দেয়:

// ১ম জাম্প
// K1 = 0 + 3 = 3
// K2 = 4 + 2 = 6

// const  kangarujump=(x1:number,v1:number,x2:number,v2:number)=>{

//     let k1=0;
//     let k2=0
//     let n=1
//     let i=1
//     while((k1/n)<=i && (k2/n)<=i)
//     {       
//         k1+=v1
//         console.log(k1)
//         k2+=v2
//         console.log(k2)
//         i++
//         n++
//     }
  
//     if(k1==k2)
//     {
//         console.log('yes')
//     }else{
//         console.log('no')
//     }

// }

const kangarujump = (x1: number, v1: number, x2: number, v2: number): string => {
    let pos1 = x1;
    let pos2 = x2;

    while (pos1 !== pos2) {
        if (pos1 < pos2 && v1 <= v2) {
            break;
        }
        if (pos2 < pos1 && v2 <= v1) {
            break;
        }
        pos1 += v1;
        pos2 += v2;
    }

    return pos1 === pos2 ? 'yes' : 'no';
}

//  6+7=13  3+4+5
console.log(kangarujump(0, 3, 4, 2));
// ২য় জাম্প
// K1 = 6
// K2 = 8
// ৩য় জাম্প
// K1 = 9
// K2 = 10
// ৪র্থ জাম্প
// K1 = 12
// K2 = 12

// দুজন একই জায়গায়!

// তাই উত্তর:

// YES