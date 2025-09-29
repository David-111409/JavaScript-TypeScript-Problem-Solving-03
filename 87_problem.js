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

console.log(typeof ("" + 1 + 0)); // "10"
console.log(typeof ("" - 1 + 0)); // -1
console.log(true + false, 6 / "3", "2" * "3"); // 1 2 6
console.log("01" == 1, "-1" == -1); // true true

var searchMatrix = function (matrix, target) {
    let n = matrix[0].length;
    let left = 0,
        right = matrix.length * n - 1,
        mid;
    let row, col;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        row = Math.floor(mid / n);
        col = mid % n;
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};

console.log(
    searchMatrix(
        [
            [1, 3, 5, 7],
            [10, 11, 16, 20],
            [23, 30, 34, 60],
        ],
        11
    )
);

