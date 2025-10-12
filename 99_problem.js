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
