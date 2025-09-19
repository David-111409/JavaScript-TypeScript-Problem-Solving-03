// // console.log(0 ?? "hello");
// let ar = ["Khaled", "Sarah", "Hager", "Dawoud"];
// let l = ar.length;
// // console.log(random);
// for (let i = 0; i < 5; i++){
//     let random = Math.floor(Math.random() * l);
//     console.log(random, ar[random]);
// }
/*
 orderedMatrix(5, 5) ➞ [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]
orderedMatrix(1, 1) ➞ [[1]]
orderedMatrix(1, 5) ➞ [[1, 2, 3, 4, 5]
 */

function orderedMatrix(r, c) {
    let big = [];
    let small = [];
    let n = 1;
    for (let i = 0; i < r; i++) {
        small = [];
        for (let j = 0; j < c; j++) {
            small.push(n++);
            // n++;
        }
        big.push(small);
    }
    return big;
}
console.log(orderedMatrix(1, 2), [[1, 2]]);
console.log(String(orderedMatrix(3, 3)) === String([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));
console.log(
    String(orderedMatrix(5, 5)) ===
        String([
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25],
        ])
);
console.log(
    String(orderedMatrix(3, 4)) ===
        String([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
        ])
);
