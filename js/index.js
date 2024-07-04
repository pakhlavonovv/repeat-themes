// 1 misol
// Domla Math.max bilan minni bilaman nima va qanday ishlashini, kochirdi deb oylamang

// let arr = [122,7,3,221,43,5,1]
// let maxNum = Math.max(...arr);
// console.log(maxNum)

// 2 misol

// let arr = [122,7,3,221,43,5,1]
// let maxNum = Math.min(...arr);
// console.log(maxNum)

// 3 misol

// let num = +prompt("Ixtiyoriy sonni kiriting")
// let arr = [3,4,5,6,7,8]
// for(let i = 0; i < arr[i]; i++){
//     if(num >= arr.length){
//         console.log(`${num} - bu son arraydagi sonlardan katta`)
//     } else {
//         console.log(`${num} - bu son arraydagi sonlardan kichik`)
//     }
// }
// console.log(`${arr} bu sonlar arraydagi sonlar`)'

// 4 misol

// function isPerfectNumber(num) {
//     if (num <= 1) 
//     return false;  
  
//     let sum = 0;
  
//     for (let i = 1; i <= num / 2; i++) {
//       if (num % i === 0) {
//         sum += i;
//       }
//     }
  
//     return sum === num;
//   }
  
//   console.log(isPerfectNumber(6));  

// 5 misol

// function reverseArray(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArr.push(arr[i]);
//     }
//     return reversedArr;
//   }
  
//   let originalArray = [1, 2, 3, 4, 5];
//   let reversedArray = reverseArray(originalArray);
  
//   console.log(reversedArray); 
  

// 6 misol

// function numPrime(num) {
//         let count = 0
//         let result = ""
//         if (num >= 2) {
//             for (let i = 1; i < num; i++) {
//                 if (num % i == 0) {
//                     count++
//                 }
//             }        
//             if (count === 1) {
//                 result = "tub son"
//             } else {
//                 result = "tub son emas"
//             }
//         } else {
//             result = "xato kiritlgan"
//         }
//         return result
//     }
//     console.log(numPrime(23));  

// 7 misol

// function addFunctionToArray(obj, func) {
//     let valuesArray = Object.values(obj);
  
//     valuesArray.unshift(func);
  
//     valuesArray.push(func);
  
//     return valuesArray;
//   }
  
//   let myObject = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   function myFunction() {
//     console.log("Bu mening functionim");
//   }
  
//   let resultArray = addFunctionToArray(myObject, myFunction);
  
//   console.log(resultArray);
  