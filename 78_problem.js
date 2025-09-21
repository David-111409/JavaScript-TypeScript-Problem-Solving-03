let reveseString = function (ar) {
    let l = ar.length;
    let half = Math.floor(l / 2);
    for (let i = 0; i < half; i++)
        [ar[i], ar[l - 1 - i]] = [ar[l - 1 - i], ar[i]];
};

s = ["h", "e", "l", "o", "n"];
reveseString(s);
console.log(s);
