(function () {
    console.log("hello f1");
})();

(function () {
    console.log("hello f2");
})();

function re() {
    return;
    5;
}

console.log(re());

let log = console.log;

log(2 ** 1024);
log(-(2 ** 1024), Number("12.3"), isNaN(NaN), isFinite(1 / 1), isFinite(1 / 0));
