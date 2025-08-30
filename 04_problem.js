"use strict";
let str = "hello world";

String.prototype.toString = function () {
    return this.split("").reverse().join("");
};

console.log("Hello World!".toString() === "!dlroW olleH");
console.log("My hooking function! :3".toString() === "3: !noitcnuf gnikooh yM");
console.log("RaceCar".toString() === "raCecaR");
console.log("Level".toString() === "leveL");
console.log("live".toString() === "evil");
console.log("penut butter".toString() === "rettub tunep");
