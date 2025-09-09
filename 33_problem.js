function reverseStriing(str) {
    if (str.length === 1) return str[0];
    return reverseStriing(str.substring(1)) + str[0];
}

console.log(reverseStriing("hellogood"));

/*
countOne(1) // 1,  "1"
countOne(257799) // 12, "111110111100000111"
*/

function countOne(n) {
    let binary = n.toString(2);
    let count = 0;
    
    for (let ele of binary) if (ele === "1") count++;
    return count;
}
console.log(countOne(257799));
console.log(countOne(1));
