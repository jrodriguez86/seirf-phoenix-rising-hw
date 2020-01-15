// console.log("It's working");

// SPACE BATTLE

// CODE PLANNING

// Create USS Schwarzenegger object

// Create Alien ship class

// Create a game object

// START the game after that

// Turn by turn logic

// Battle

// Retreat option

// End game logic


// Create Player ship

let ussSchwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7,
    // Add methods for battle here
    attack: (enemyShip) => {
       console.log("Player attacking Alien ship!");

     // Check for hit success based on player accuracy -  ussSchwarzenegger has a .7 so 70% accuracy
    if (Math.random() < ussSchwarzenegger.accuracy) {
        console.log("Attack hit!")
        // Subtracting from the hull from the attack on Alienship
        enemyShip.hull -= ussSchwarzenegger.firepower;
    } else {
        console.log("Attack missed!")
    }
       // Subtracting from the hull from the attack on Alienship
       console.log(enemyShip);

       // Calulate chance attack will damage other ship with Math.random
       // if (Math.random() < alien[0].accuracy) {
	// console.log('You have been hit!');
}
    }


// Define Alienship class

class Alienship {
    constructor(hull, firepower, accuracy) {
        // Make hull random between 3 and 6
        // * 4 since we're looking for 4 numbers between 3 and 6 - +3 is the starting point
        this.hull = Math.floor(Math.random() * 4 + 3);
        // Make firepower random between 2 and 4 
        this.firepower = Math.floor(Math.random() * 4 + 3);
        // Make random between .6 and .8
        this.accuracy = Math.floor(Math.random() * 3 + 6) * .1;
    }
    
    attack() {
    console.log("Alien ship attacking!");
        // Check for hit or miss:
        if (Math.random() < this.accuracy) {
            console.log('Alien ship hit player!');
            ussSchwarzenegger.hull -= this.firepower;
            console.log(`Player ship hull remaining: ${ussSchwarzenegger.hull}`)
    } else {
            console.log("Alien ship missed");
        }
    }
}
    






// Gives the min - max for .6 - .8
// Math.floor(Math.random() * 3) + 6) * .1
// .1 converts in to a decimal or / 10


// Define a game object

let gameState = {
    playerIsAlive: () => {
        // return true if player is alive
       return ussSchwarzenegger.hull > 0;
    }
}

// START the game
console.log("Generating enemy ships");
enemy = new Alienship();
let enemies = [];
console.log(enemy);

// TODO: update to array of 6 enemy ships
// enemies = [];

for (let i=0; i < 6; i+=1) {
    enemies.push(new Alienship());
}

while (gameState.playerIsAlive) {

// Player ship attacks
ussSchwarzenegger.attack(enemy);

// Check if enemy ship is destroyed
if (enemy.hull <= 0) {
    // If enemy ship is destroyed:
    console.log("Enemy ship destroyed");
    

    // Ask user if they want to continue attacking or retreat:
    let response = prompt("Ship Destroyed, attack or retreat?"); // Prompt and Alert only works in browser console
 {   if (response === "retreat") {
     // User retreats, end game loop
        alert("You retreated, game over");
        break; // breaks you out of the loop
        // Keep looping, gameplay continues
    } else if (response === "attack") {
        //TODO: finish this
// do attack
console.log("Continuing gameplay");

} else {
    // Enemy ship not destroyed, their turn to attack
    // Enemy ship attacks
  enemy.attack();
}
 } if (enemy.hull <= 0) {
    // If enemy ship is destroyed:
    enemies.shift();

// End game logic

// Player either lost or retreated

console.log("Game over");
}
// Keep destroying ships and not stopping at 6
// Need to signal game over.
// 
//            - 
}
}
