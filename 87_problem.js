// console.log(Boolean(" ")); // true
// console.log(typeof Number("\n123\t"), Number(""));
// console.log(Number(new Error()));
// console.log(4 ** (1 / 2), 8 ** (1 / 3));

// let a = 2;
// let b = 5;
// console.log(a * (b = a + 3), b);

// let x = (y = z = 25 * 3);
// console.log(x, y, z);

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(a, x);

// let s = (2, (1 + 5));
// console.log(s);
// let a , b , c;
// for (a = 1, b = 3, c = a * b; a < 10; a++ ){
//     console.log(a);
// }
// console.log(b, c);


// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// // a = 2 , b = 2
// console.log(c, d, a, b);

let a = 2;

let x = 1 + (a *= 2); // a = 4, x = 5

console.log(a, x);
