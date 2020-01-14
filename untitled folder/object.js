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
        console.log('My name is ' + this.name);
    }
    eat(i) {
        this.weight+=i;
        this.mood+=i;
    }
    exercise(i) {
        this.weight-=i;
    }
    
    ageUp(i) {
        this.age+=i;
        this.height+=i;
        this.weight+=i;
        this.mood-=i;
        this.bankAccount+=10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount - getPrice();

    }
}

const Timmy = new Person('Timmy', 5,);
Timmy.ageUp(5);
console.log(Timmy);







