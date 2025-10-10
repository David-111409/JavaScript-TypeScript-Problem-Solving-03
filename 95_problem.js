// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(2, -2);

// myArray.copyWithin(3);

// myArray.copyWithin(4, -1);

// myArray.copyWithin( 1, -2 );

// myArray.copyWithin(1, -2);

// myArray.copyWithin(1, -2, -1);

// console.log(myArray);

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

// chars.copyWithin(3);
// console.log(chars);

// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// // Needed Output
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// chars.copyWithin(3, 4, 6);
// chars.copyWithin(4)

// console.log(chars);

// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// // Needed Output
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]

// chars.copyWithin(2);
// console.log(chars);

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars = [
  ...chars.filter((el) => !isNaN(el)),
  ...chars.filter((el) => isNaN(el)),
];
chars.copyWithin(0, 3, 6);

console.log(chars);

// console.log(isNaN("a"));
