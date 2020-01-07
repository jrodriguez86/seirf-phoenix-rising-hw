console.log(alert(`Time to cut some lawn and make money! Click ok to start`));
console.log(alert(`Oh no... We don't have any tools. Guess we have to use our teeth. Click ok to start`));


// PAGE OPENS - ALERT user they are starting landscaping business
// ALERT user of their first tool and what they'll be making per day
// START game
// Player can now BUY a new tool
// ALERT player of they can buy new tool
// Player BUYS new tool
// Player now cuts grass with new tool
// Repeat til player makes $1000



// naming object


console.log(alert('Teeth make you $1 a day. Let\'s use our teeth til we make enough to buy scissors. That\'ll take 5 days!!! Click ok to start cutting'));


const player = [
    {name: "teeth", income: 1, cost: 0},
    {name: "rusty scissors", income: 5, cost: 5},
    {name: "Old-Timey Push Mower", income: 50, cost: 25},
    {name: "fancy battery-powered lawnmower", income: 100, cost: 250},
    {name: "starving students", income: 250, cost: 500}

]


// Got this part from Deejay... Couldn't figure out how to make for loop start for game

// Still can't get game to start so I'm going to comment out below for the meantime

// let clicker = document.getElementById('agree');
// ​
// document.getElementById('agree').addEventListener('click', function(evt) {
//     var target = evt.target;
//     if (target.id === 'y01') {
//       console.log(alert("You are now a land moewer"))
//       playerCutsTeeth();
     

// Player starts the game - Need to figure out how to prompt this option
const playerCutsTeeth = () => {
    // player starts with $0 but will make $1 a day with their teeth
    for(let i=0; i <= player.income; i+=1)
    let playerIncome = player.income[1]
    if (playerIncome <= 5)
    // // When the player hits $5 they are alerted they can purchase new tool
    (alert('Great news! You can now buy rusted scissors!!! Click ok to buy scissors'))
    (alert('You know own scissors! Scissors now grant you $5 a day'))
}

// Repeat loop with each tool at new income til player can buy new tool
const playerCutScissors = () => {
    for(let i=0; i <= player.income; i+=5)
    let playerIncome = player.income[5]
    if (playerIncome <= 25)
    (alert('Wow! You can now afford an old timey push lawnmower. Click ok to buy lawnmower'))
    (alert('You know own an old timey lawnmower! Old timey Lawnmower now grant you $50 a day'))
}

// Banging my head against the wall here...
// Need your help here on how to actually start the game
// If I comment out the for loops the alerts start how I want
// Alerts disappear and don't start me off the way I want
// How do I prompt user to start game with new alert that activates for loop???
// Also, how do we get the alerts to go to the middle of the page?
//


