class Hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
}
wheelRun() {
    console.log('squeak squeak')
}
eatFood() {
    console.log('nibble nibble')
}
getPrice() {
    return this.price
}
}

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
        let i = 0;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`My name is ${this.name}`);
    }
    eat() {
        this.weight+=i;
        this.mood+=i;
    }
    exercise() {
        this.weight-=i;
    }
    // Having trouble incrementing by 1 - Have tried several options including throwing i in parameter
    // Need to add timmy's age or just change it???
    ageUp() {
        this.age += 1;
        this.height += 1;
        this.weight += 1;
        this.mood += 1;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount - getPrice();

    }
}

const timmy = new Person('Timmy', 5);
const gus = new Hamster('Gus')
console.log(timmy);

timmy.ageUp(5);
timmy.buyHamster(gus);
// How do I age Timmy? Age up method isn't working. Need to set a parameter
timmy.eat(2);
timmy.exercise(2);








