console.log(
  Number(null),
  null == 0,
  undefined == undefined,
  undefined == null,
  null == 0,
  undefined == 0
);
console.log("19" > 18, "18" == 18, 18 > "19");

let question = prompt("What's the “official” name of JavaScript?");
if (question === "ECMAScript") {
  console.log("Right!");
} else {
  console.log("You don’t know? ECMAScript!");
}
