// [10, 20, 30, 40, 50] → [40, 50, 30, 40, 50]
// let arr = [10, 20, 30, 40, 50];
// arr.copyWithin(0, 3);

// [1, 2, 3, 4, 5] → [1, 2, 3, 2, 3]
// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(3, 1, 3);

// [0, 1, 2, 3, 4, 5] → [0, 1, 0, 1, 2, 3]
let arr = [0, 1, 2, 3, 4, 5];
arr.copyWithin(2);
console.log(arr);

// let nums = [1, 2, 3, 4, 5, 6, 7];
// // let check = nums.some(function (el) {
// //   return el > 5;
// // });
// let check = nums.some((el) => el > 5);
// console.log(check);

// let i = 0;
// let check = nums.some(function (e) {
//   console.log("Hello", ++i);
//   return e > 5;
// });
// let check = nums.some((e) => e > 5);

// let i = 0;
// let n = 5 * 2;
// let check = nums.some(function (e) {
//   console.log("Hello", ++i);
//   return e > n;
// }, n);

// let checkValues = function (arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// };

// console.log(checkValues(nums, 1));
// console.log(checkValues(nums, 20));
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let range = {
  min: 10,
  max: 20,
};

let i = 0;
let checkNumberInRange = nums.some(function (e) {
//   console.log(++i, this.min, ":", this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);
