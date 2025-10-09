var findComplement = function (num) {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((el) => (el === "1" ? "0" : "1"))
      .join(""),
    2
  );
};

console.log(findComplement(5));

var bitwiseComplement = function(n) {
    let mask = (1 << n.toString(2).length) - 1;
    return mask ^ n;
};
