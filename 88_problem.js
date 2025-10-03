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

// let a;
// false || (a = 5);
// true || (a = 5 * 2);
// console.log(a);

/**
 * multTable(2) ➞ [
  [1, 2],
  [2, 4]
]

multTable(3) ➞ [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9]
]

multTable(5) ➞ [
  [1, 2, 3, 4, 5],
  [2, 4, 6, 8, 10],
  [3, 6, 9, 12, 15],
  [4, 8, 12, 16, 20],
  [5, 10, 15, 20, 25]
]
 */

function multTable(n) {
    let small = [];
    let ar = [];
    for (let i = 1; i <= n; i++) {
        small = [];
        for (let j = 1; j <= n; j++) {
            small.push(i * j);
        }
        ar.push(small);
    }
    return ar;
}
console.log(multTable(5));
