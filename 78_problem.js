let reveseString = function (ar) {
    let l = ar.length;
    let half = Math.floor(l / 2);
    for (let i = 0; i < half; i++)
        [ar[i], ar[l - 1 - i]] = [ar[l - 1 - i], ar[i]];
};

s = ["h", "e", "l", "o", "n"];
reveseString(s);
console.log(s);


var isPowerOfTwo = function(n) {
    let p = Math.log2(n);
    return p === parseInt(p);
};

var isPalindrome = function (s) {
    let str = s.toLowerCase().replaceAll(/[^a-z0-9]/ig, "");
    let rev = str.split("").reverse().join("");
    return str === rev;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

var reverse = function (x) {
    // [-2 ** 31, 2 ** 31 - 1]
    let res;
    if (x < 0) {
        res = -String(-x).split("").reverse().join("");
    } else res = +String(x).split("").reverse().join("");
    if (res >= -2147483648 && res <= 2147483647) {
        return res;
    }
    return 0;
};

console.log(reverse(-123));
console.log(reverse(123));
console.log(reverse(1534236469));
