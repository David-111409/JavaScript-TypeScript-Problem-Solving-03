const locations = {
  20: "Place 1",
  30: "Place 2",
  40: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;
let locationsKeys = Object.keys(locations).map(Number);
let check = locationsKeys.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check);

// console.log(..."Dawoud", "Dawoud");
// console.log([..."Dawoud"]);

// let ar1 = [1, 2, 3];

// let ar2 = [4, 5, 6];

// let all = [...ar1, ...ar2];

// let ar = [...ar1];

// console.log(all, ar);

// let allFriends = ["Osama", "Ahmed", "Sayed"];

// let thisYearFriends = ["Sameh", "Mahmoud"];

// // allFriends.push("Sameh", "Mahmoud");

// allFriends.push(...thisYearFriends);

// console.log(allFriends);

// let myNums = [10, 20, -100, 100, 1000, 500];

// console.log(Math.max(...myNums));

let objOne = {
  a: 1,
  b: 2,
};

let objTwo = {
  c: 3,
  d: 4,
};

let obj = { ...objOne, ...objTwo, e: 5 };

console.log(obj);

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
let res = [...n1, ...n2].length * Math.max(...n1);
console.log(res);
