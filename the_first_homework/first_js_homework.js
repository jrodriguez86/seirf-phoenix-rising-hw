/* 
DRY = Don't repeat yourself. 
So you can shorten and clean up your code with loops
While, For loops
*/
/* 
Const are variables that do not change as you continue to code while
var/let can change down the line (var and let are the same)
*/
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kelvin';
  const f = false;
a < b
c > d
'Name' == 'Name'
a < b < c
a == a < d
e == 'Kevin'
48 != '48'
f != 'Kevin'
let g = 110
/*
10 = g is false
*/
/*
Both are infinite loops because the condition of the while statement
is set to true. Second example shows Const on run program so
runProgram = flase doesn't apply
*/
let letters = "A";
let i = 0;
// assigning variables
while (i < 20) {
    // prints the value of i to the screen
    letters += "A";
    // names the i
    i++;
    // adds to i until it's false
}
console.log(letters);
/*
I was expecting the code to look like...
A0
A1
I realized after running the code that the console log is around
(letters) so that's why it came out to "AAAAAAAA" instead. Not sure if you get what
I'm saying here but I was definitely surprised to see the result
*/
// They're essentially the same but a for loop compresses everything
// You don't have to declare any variables in a for loop
/*
the intial code applied to the loop
the condition which the loop runs
the repeating expression at the end of each loop
*/
for (let i=0; i <= 999; i++) {
	console.log(i);
}
// Bonus: Backslash is allowing an apostrophe
// "/" is for division
// cant figure out how to reverse it
for (let i=999; i > 0; i--) {
    console.log(i)
}
for (let i=1; i <= 10; i++) {
	console.log('The value of i is: ' + i);
}
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
console.log(StarWars[0])
console.log(StarWars[1])
console.log(StarWars[2])
console.log(StarWars[3])
console.log(StarWars[4])
console.log(StarWars[5])
// confused here??? ^^^

