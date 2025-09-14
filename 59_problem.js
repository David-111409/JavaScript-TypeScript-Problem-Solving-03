const grid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];
function spotlightSum(n) {
    let col = (n - 1) % 10;
    let row = Math.floor((n - 1) / 10);
    return [
        grid[row][col],
        grid[row][col - 1],
        grid[row][col + 1],
        grid[row - 1][col - 1],
        grid[row - 1][col],
        grid[row - 1][col + 1],
        grid[row + 1][col - 1],
        grid[row + 1][col],
        grid[row + 1][col + 1],
    ].reduce((acc, cur) => acc + cur, 0);
}

console.log(spotlightSum(12), 108);
console.log(spotlightSum(13), 117);
console.log(spotlightSum(14), 126);
console.log(spotlightSum(15), 135);
console.log(spotlightSum(16), 144);
console.log(spotlightSum(17), 153);
console.log(spotlightSum(18), 162);
console.log(spotlightSum(19), 171);
console.log(spotlightSum(22), 198);
console.log(spotlightSum(23), 207);
console.log(spotlightSum(24), 216);
console.log(spotlightSum(25), 225);
console.log(spotlightSum(26), 234);
console.log(spotlightSum(27), 243);
console.log(spotlightSum(28), 252);
console.log(spotlightSum(29), 261);
console.log(spotlightSum(32), 288);
console.log(spotlightSum(33), 297);
console.log(spotlightSum(34), 306);
console.log(spotlightSum(35), 315);
console.log(spotlightSum(36), 324);
console.log(spotlightSum(37), 333);
console.log(spotlightSum(38), 342);
console.log(spotlightSum(39), 351);
console.log(spotlightSum(42), 378);
console.log(spotlightSum(43), 387);
console.log(spotlightSum(44), 396);
console.log(spotlightSum(45), 405);
console.log(spotlightSum(46), 414);
console.log(spotlightSum(47), 423);
console.log(spotlightSum(48), 432);
console.log(spotlightSum(49), 441);
console.log(spotlightSum(52), 468);
console.log(spotlightSum(53), 477);
console.log(spotlightSum(54), 486);
console.log(spotlightSum(55), 495);
console.log(spotlightSum(56), 504);
console.log(spotlightSum(57), 513);
console.log(spotlightSum(58), 522);
console.log(spotlightSum(59), 531);
console.log(spotlightSum(62), 558);
console.log(spotlightSum(63), 567);
console.log(spotlightSum(64), 576);
console.log(spotlightSum(65), 585);
console.log(spotlightSum(66), 594);
console.log(spotlightSum(67), 603);
console.log(spotlightSum(68), 612);
console.log(spotlightSum(69), 621);
console.log(spotlightSum(72), 648);
console.log(spotlightSum(73), 657);
console.log(spotlightSum(74), 666);
console.log(spotlightSum(75), 675);
console.log(spotlightSum(76), 684);
console.log(spotlightSum(77), 693);
console.log(spotlightSum(78), 702);
console.log(spotlightSum(79), 711);
console.log(spotlightSum(82), 738);
console.log(spotlightSum(83), 747);
console.log(spotlightSum(84), 756);
console.log(spotlightSum(85), 765);
console.log(spotlightSum(86), 774);
console.log(spotlightSum(87), 783);
console.log(spotlightSum(88), 792);
console.log(spotlightSum(89), 801);
