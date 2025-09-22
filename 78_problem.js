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

/**
 sumMissingNumbers([4, 3, 8, 1, 2]) ➞ 18
// 5 + 6 + 7 = 18

sumMissingNumbers([17, 16, 15, 10, 11, 12]) ➞ 27
// 13 + 14 = 27

sumMissingNumbers([1, 2, 3, 4, 5]) ➞ 0
// No Missing Numbers (i.e. all numbers in [1, 5] are present in the list)
 */

function sumMissingNumbers(ar) {
    let big = ar[0],
        small = ar[0],
        l = ar.length;
    (st = new Set()), (sum = 0);

    for (let i = 0; i < l; i++) {
        st.add(ar[i]);
        if (ar[i] < small) small = ar[i];
        if (ar[i] > big) big = ar[i];
    }

    for (let i = small + 1; i < big; i++) if (!st.has(i)) sum += i;

    return sum;
}

console.log(sumMissingNumbers([1, 2, 3, 4, 5]), 0);
console.log(sumMissingNumbers([4, 3, 8, 1, 2]), 18);
console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12]), 27);
console.log(sumMissingNumbers([-1, -4, -3, -2, -6, -8]), -12);

var lengthOfLastWord = function(s) {
    return s.trim().split(' ').at(-1).length;
    
};
