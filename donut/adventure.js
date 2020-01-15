// This is our hero class

class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10,
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories']

    
}
   talkSass() {
       console.log(this.catchPhrases[Math.random]);

   }
   announceHealth() {
       console.log(this.health)
   }
   fight() {
       console.log("I\'m ready to rumble")
   }
   }

   // This is our Enemy class