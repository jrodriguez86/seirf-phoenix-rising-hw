///////////
// Verbal Questions 
///////////

// 1. Parameter is a variable in the declaration of a function
// Argument is the value passed to the function
// 2. Return is used to output a value back when called and 
// console log is used to inspect the value for debugging

///////////
// Palindrome
///////////

// function checkPalindrome(str) {
//     return true;
// }
// Can't get it to come back false... Keep getting True True

// console.log(palindrome("Radar"));
// console.log(palindrome("Borscht"));

////////////
// Sum Array
////////////



// const sumArray = (arr) => {
//     let sum = 0      
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] /// didn't include this originally
//     }
// return sum
// }
// console.log(sumArray([1,2,3,4,5,6]));

// const checkPrime = (num) => {
//     for(i=0; i < num; i++) {
//     if (num%i===0);
//     return false;
//     }
//         return true;
// }
// console.log(checkPrime(3)); // Keep getting false no matter what number I put in

// Answer //
// check if a given number is prime
// const checkPrime = (num) => {
//     // loop from 2 to the square root of the number
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//       // if the number is evenly divisible by the current loop
//       if (num % i === 0) {
//         // that means the number is NOT prime, so return false to terminate the loop
//         return false
//       }
//     }
//     // if the for loop never returns false, it's not evenly divisible by any number  from 2 to the square root, so it must be prime
//     return true
//   }
  
//   console.log(checkPrime(3))

// const printPrimes = (limit) => {
//     for (let i = 0; i <= limit; i++) {
//         if(checkPrime(i)) {
//             console.log(i)
//         }
//     }
// }

// printPrimes(98);


