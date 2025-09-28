const log = console.log;
log(0xe);
log(0o14);
// function sum(a, b) {
//     return a + b;
// }
const sum = (a, b) => a + b;
// function sub(a, b) {
//     return a - b;
// }
const sub = (a, b) => a - b;

function returnBack(fun) {
    return `[${fun}]`;
}

// function mul(a, b) {
//     return a * b;
// }

const mul = (a, b) => a * b;
log(sum(1, 2), sub(1, 2));

log(returnBack(sum(1, 2)));
log(returnBack(sub(1, 2)));

function calc(first, second, op) {
    return `result = [${op(first, second)}]`;
}

log(calc(1, 2, sum));
log(calc(1, 2, sub));
log(calc(5, 2, mul));
log(
    calc(10, 2, function (first, second) {
        return first / second;
    })
);

log(calc(20, 5, (a, b) => a / b));


function format(mes, formatCallBack) {
    return formatCallBack(mes);
}

function makeJson(mes) {
    return `{"message": "${mes}"}`;
}
function makeHtml(mes) {
    return `<div>${mes}</div>`;
}

log(format("hello world", makeHtml));
log(format("hello world", makeJson));

const ar = ["red", "green", "blue"];
ar.forEach(function (el, ind) {
    console.log(ind, el);
});
