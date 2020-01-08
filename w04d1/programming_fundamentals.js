// DRY - Don't repeat yourself. Avoid repetition
// KISS - Keep it simple stupid. Simple code is easier to work on and debug
// Avoid creating a YAGNI - You aren't going to need it - Avoid adding fuinctionality unitl you need it
// Do the simplest thing that could possibly work - Ask yourself that question
// Don't make me think - Code needs to be easily read.
// Write code for the maintainer - Write code as if you won't remember anything but will have to maintain it in the long run
// Single responsibility principle - components of code should perform a well defined task
// Avoid premature optimization - Make sure your code is working before trying to optimize
// Separation of concerns - Different areas of functionality should be managed by distinct and minimally overlapping modules of code

// naming the function
const f = l => {
  // naming the variables withiun the function
    let es = 0, p = 0, c = 1, n = 0
  // creating a while loop
    while (c <= l) {
    // what will be running in the while loop
        n = c + p
    [c, p] = [n, c]
    es += (c % 2 === 0) ? c : 0
  }
  // what to return once code runs
  return es
}
// calling the function and giving it an arguement
console.log(f(55))

// const f2 = (limit) => {
//     let evenSum = 0;
//     let previous = 0;
//     let current = 1;
//     while (current <= limit) {
//       let next = current + previous;
//       previous = current;
//       current = next;
//       if (current % 2 === 0) {
//         evenSum += current;
//       }
//     }
//     return evenSum;
//   }
  
  
//   console.log(f2(55))

  // cont getEvenSum
  // I would start working with f2 because it's easier to read
  // it does need the semi colon - got an error without

  