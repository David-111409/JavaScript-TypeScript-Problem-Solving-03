/**
 * arithmeticOperation("12 + 12") ➞ 24 // 12 + 12 = 24

arithmeticOperation("12 - 12") ➞ 24 // 12 - 12 = 0

arithmeticOperation("12 * 12") ➞ 144 // 12 * 12 = 144

arithmeticOperation("12 / 0") ➞ -1 // 12 / 0 = -1
 */

let arithmeticOperation = (str) => {
    let [left, op, right] = str.split(" ");
    let a = Number(left),
        b = Number(right);
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b === 0 ? -1 : a / b;
        default:
            return NaN;
    }
    // if (op === "+") return +left + +right;
    // else if (op === "-") return left - right;
    // else if (op === "*") return left * right;
    // else if (op === "/" && right === "0") return -1;
    // else return left / right;
};

console.log(arithmeticOperation("12 + 12"), 24);
console.log(arithmeticOperation("22 - 12"), 10);
console.log(arithmeticOperation("100 * 12"), 1200);
console.log(arithmeticOperation("120 / 10"), 12);
console.log(arithmeticOperation("122 / 0"), -1);
console.log(arithmeticOperation("10 * 20"), 200);
console.log(arithmeticOperation("10 - 10"), 0);
console.log(arithmeticOperation("10 - 12"), -2);
