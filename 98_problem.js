// let myString = "Hello Elzero Web School I Love elzero";
// let re = /elzero/gi;
// console.log(myString.match(re));

// console.log(myString.match(/elzeros/gi));

// let tld = "org Com Net Org Info Code Io org";

// let re = /org|net|com/i;
// console.log(tld.match(re));

// let nums = "12345678#$91@0!";
// let re = /[0-2]/g;
// console.log(nums.match(re));
// let re = /[^0-2]/g;
// console.log(nums.match(re));
// let re = /[^0-9]/g;
// console.log(nums.match(re));

// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let re = /os[5-9]os/gi;
// console.log(practice.match(re));

let myString = "AaBbcdefG123!234%^&*";
// let re = /[a-z]/g;
// let re = /[^a-z]/g;
// let re = /[A-Z]/g;
// let re = /[^A-Z]/g;
// let re = /[ace]/gi;
// let re = /[^ace]/ig;
// let re = /[A-Za-z]/g;
// let re = /[^a-z]/ig;
let re = /[^a-z0-9]/ig;
console.log(myString.match(re));
