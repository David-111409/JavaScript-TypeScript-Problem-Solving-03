function findBrokenKeys(correct, typed) {
    let l = correct.length;
    let st = new Set();
    
    for (let i = 0; i < l; i++) if (correct[i] !== typed[i]) st.add(correct[i]);

    return [...st];
}
console.log(findBrokenKeys("happy birthday", "hawwy birthday"), ["p"]);
console.log(findBrokenKeys("starry night", "starrq light"), ["y", "n"]);
console.log(findBrokenKeys("beethoven", "affthoif5"), ["b", "e", "v", "n"]);
console.log(findBrokenKeys("mozart", "aiwgvx"), ["m", "o", "z", "a", "r", "t"]);
console.log(
    findBrokenKeys("5678", "4678"),
    ["5"],
    "It should work for numbers."
);
console.log(
    findBrokenKeys("!!??$$", "$$!!??"),
    ["!", "?", "$"],
    "It should work for punctuation."
);
