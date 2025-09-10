function median(ar1, ar2) {
  
    let bigAr = [...ar1, ...ar2].sort((a, b) => a - b);
  
    let l = bigAr.length;
  
    let half = Math.floor(l / 2);

    if (l % 2) return bigAr[half];

    return (bigAr[half] + bigAr[half - 1]) / 2;
}
console.log(median([1, 2], [3, 4, 5]));
console.log(median([1, 2], [3, 4]));
