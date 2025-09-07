function eat(name) {
    console.log(name, "it eats");
}
function sleep(name) {
    console.log(name, "sleeps");
}
function drink(name) {
    console.log(name, "drinks");
}
function jump(name) {
    console.log(name, "jumps");
}
function swim(name) {
    console.log(name, "swims");
}
function Animal(name) {
    return {
        name,
        eat: () => eat(name),
        sleep: () => sleep(name),
        drink: () => drink(name),
    };
}

function Frog(name) {
    return {
        ...Animal(name),
        jump: () => jump(name),
    };
}

function Fish(name) {
    return {
        ...Animal(name),
        swim: () => swim(name),
    };
}
let animal_1 = new Animal("first");
let frog1 = new Frog("frog");
// animal_1.eat();
// animal_1.sleep();
animal_1.drink();

frog1.jump();
frog1.eat();
frog1.sleep();
let fish = new Fish("hager");

fish.swim();

let date = new Date();
let map = new Map();
map.set(9, "August");
console.log(date.getMonth() + 1, map.get(date.getMonth() + 1));
