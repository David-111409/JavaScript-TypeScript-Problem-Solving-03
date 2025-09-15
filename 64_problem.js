function textToNumberBinary(str) {
  
    let obj = { zero: "0", one: "1" };

    let result = str
        .toLowerCase()
        .split(" ")
        .map((el) => {
            if (el === "one" || el === "zero") return obj[el];
            else return "";
        })
        .join("");
        
    let l = Math.floor(result.length / 8);

    return result.slice(0, l * 8);
}

console.log(
    textToNumberBinary("one one one one zero zero zero zero") === "11110000"
);
console.log(
    textToNumberBinary(
        "one Zero zero one zero zero one one one one one zero oNe one one zero one zerO"
    ) === "1001001111101110"
);
console.log(textToNumberBinary("one zero one") === "");
console.log(
    textToNumberBinary("one zero zero one zero ten one one one one two") ===
        "10010111"
);
console.log(
    textToNumberBinary(
        "One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero"
    ) === "1001011101100001011101100001011101100001011101100001011101100001"
);
console.log(textToNumberBinary("TWO one zero one one zero one zero") === "");
console.log(
    textToNumberBinary("TWO one zero one one zero one zero one") === "10110101"
);
