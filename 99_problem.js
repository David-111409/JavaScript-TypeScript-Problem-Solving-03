/**
 secret("div*2") ➞ "<div></div><div></div>"

secret("p*1") ➞ "<p></p>"

secret("li*3") ➞ "<li></li><li></li><li></li>"
 */
const secret = (str) => {
  //   let [s, n] = str.split("*");
  
  //   return `<${s}></${s}>`.repeat(n);
  
  let r1 = /\w+/g;
  
  let match = str.match(r1);
  
  if (!match || match.length < 2) return "invalid";
  
  let [s, n] = match;
  
  return `<${s}></${s}>`.repeat(n);
};

console.log(secret("div*2") === `<div></div><div></div>`);
console.log(secret("p*1") === `<p></p>`);
console.log(secret("li*3") === `<li></li><li></li><li></li>`);
console.log(secret("h1*4") === `<h1></h1><h1></h1><h1></h1><h1></h1>`);
console.log(secret("ul*2"), `<ul></ul><ul></ul>`);

// Example : 2
/*
RegEx: Boundary Assertions II
You are given an array with random words but 
your program doesn't accept words that begin with the capital letter "C". 
Remove the unaccepted words and return the new array.

Examples

accepted(["Ducks", "Bears",  "Cats"]) ➞ ["Ducks", "Bears"]

accepted(["cars", "trucks", "planes"] ➞ ["cars", trucks", "planes"]

 ➞ ["Worms", "Bugs", "Beans"]
Notes
Use a RegEx boundary assertion in your function.
 */

// const accepted = (ar) => ar.filter((word) => !word.startsWith("C"));
const acceptedWords = (ar) => ar.filter((word) => !/^C.*/.test(word));
console.log(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"]), [
  "Worms",
  "Bugs",
  "Beans",
]);
console.log(acceptedWords(["Ducks", "Bears", "Cats"]), ["Ducks", "Bears"]);
console.log(acceptedWords(["cars", "trucks", "planes"]), [
  "cars",
  "trucks",
  "planes",
]);
