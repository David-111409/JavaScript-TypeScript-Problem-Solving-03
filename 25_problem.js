// const obj = {
//     a: 1,
//     b: 2,
//     sum() {
//         return this.a + this.b;
//     },
// };

// let s = obj.sum.bind(obj);
// console.log(s());

// const ar = [1, 2, 3, 4, 5];

// console.log(
//     ar.reduce((acc, cur) => {
//         acc[cur] = cur;
//         return acc;
//     }, {})
// );

/**
 * KM({"Total": "10.00$", "Difference": "0.40$", "Mouse": "?"})
➞ {"Total": "10.00$", "Difference":"0.40$", "Mouse": "4.8$"}

KM({"Total": "90.00$", "Difference": "5.40$", "Mouse": "?"})
➞ {"Total": "90.00$", "Difference": "5.40$", "Mouse": "42.3$"}

KM({"Total": "1.30$", "Difference": "0.80$", "Mouse": "?"})
➞ {"Total": "1.30$", "Difference": "0.80$", "Mouse": "0.25$"}
k + m = total ; k - m = dif; m = total  - dif / 2
 */

function KM(obj) {
    let m = (obj.Total.slice(0, -1) - obj.Difference.slice(0, -1)) / 2;
    obj.Mouse = `${Math.round(m * 100) / 100}$`;
    return obj;
}

console.log(KM({ Total: "1.90$", Difference: "0.90$", Mouse: "?" }), {
    Total: "1.90$",
    Difference: "0.90$",
    Mouse: "0.5$",
});
console.log(KM({ Total: "1.30$", Difference: "0.80$", Mouse: "?" }), {
    Total: "1.30$",
    Difference: "0.80$",
    Mouse: "0.25$",
});
console.log(KM({ Total: "3.90$", Difference: "0.20$", Mouse: "?" }), {
    Total: "3.90$",
    Difference: "0.20$",
    Mouse: "1.85$",
});
console.log(KM({ Total: "0.801$", Difference: "0.40$", Mouse: "?" }), {
    Total: "0.801$",
    Difference: "0.40$",
    Mouse: "0.2$",
});
console.log(KM({ Total: "10.00$", Difference: "0.40$", Mouse: "?" }), {
    Total: "10.00$",
    Difference: "0.40$",
    Mouse: "4.8$",
});
console.log(KM({ Total: "20.00$", Difference: "1.40$", Mouse: "?" }), {
    Total: "20.00$",
    Difference: "1.40$",
    Mouse: "9.3$",
});
