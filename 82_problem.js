var addDigits = function (num) {
    // if (num < 10) return num;
    // return addDigits(Math.floor(num / 10)) + (num % 10);
    let sum = 0;
    while (num > 9) {
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
        sum = 0;
    }

    return num;
};

var reverseWords = function (s) {
    //return s.trim().split(/\s+/).reverse().join(" ");
    return s.split(/\s+/).filter(Boolean).reverse().join(" ");
};

console.log(reverseWords("  hello world  "));
// const os = require("os");
// console.log(os.platform());

// const { PI, pow } = Math;
// console.log(PI, pow(2, 3));

// var countDigitOne = function (n) {
//     let count = 0;
//     for (let i = 1; i <= n; i++) {
//         count += `${i}`.split("").filter((el) => el === "1").length;
//     }
//     return count;
// };

// console.log(countDigitOne(13));

var findMedianSortedArrays = function (nums1, nums2) {
    let big = [...nums1, ...nums2].sort((a, b) => a - b);
    let l = big.length;
    let half = Math.floor(l / 2);
    if (l % 2 === 1) return big[Math.floor(l / 2)];
    return (big[half] + big[half - 1]) / 2;
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));

var isPowerOfFour = function (n) {
    let res = Math.log2(n) / 2;
    return Number.isInteger(res);
    // return parseInt(res) === res;
};
const d = new Date(2025, 8, 26);
console.log(d.getDate(), d.getMonth(), d.getFullYear()); // 17
console.log(d.getDay());

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const specificDate = new Date("December 25, 1995");
const weekday = specificDate.getDay();

console.log(days[weekday]);
// Output: 1, because December 25, 1995 was a Monday

let n = 9.12;
console.log(Math.ceil(9.12));
console.log(Math.ceil(-9.12));
console.log(Number.isInteger(10));
console.log(Number.isInteger(11));

let oct = 0o16;
console.log(oct);
