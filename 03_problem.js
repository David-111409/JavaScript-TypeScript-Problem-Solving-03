const misreadMap = {
    4: "A",
    5: "S",
    0: "O",
    1: "I",
};
//
function keyboardMistakes(str) {
    // let l = str.length;
    // let ar = str.split("");

    // for (let i = 0; i < l; i++) {
    //     let ele = str[i];
    //     if (ele in misreadMap) ar[i] = misreadMap[ele];
    // }
    // return ar.join("");

    // return str
    //     .split("")
    //     .map((el) => {
    //         if (el in misreadMap) return misreadMap[el];
    //         return el;
    //     })
    //     .join("");

    return str.replace(/[4015]/g, (char) => misreadMap[char]);
}

console.log(keyboardMistakes("51NG4P0RE"));
console.log(keyboardMistakes("MUB45H1R") === "MUBASHIR");
console.log(keyboardMistakes("DUBL1N") === "DUBLIN");
console.log(keyboardMistakes("51NG4P0RE") === "SINGAPORE");
console.log(keyboardMistakes("P4K15T4N") === "PAKISTAN");
console.log(keyboardMistakes("P4R15") === "PARIS");
