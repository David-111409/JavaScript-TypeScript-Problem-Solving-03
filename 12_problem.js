function error(n) {
  
    const errorMap = new Map([
        [1, "Check the fan: e1"],
        [2, "Emergency stop: e2"],
        [3, "Pump Error: e3"],
        [4, "c: e4"],
        [5, "Temperature Sensor Error: e5"],
    ]);
  
    return errorMap.get(n) || 101;
}

console.log(error(1) === "Check the fan: e1");
console.log(error(2) === "Emergency stop: e2");
console.log(error(3) === "Pump Error: e3");
console.log(error(4) ===  "c: e4");
console.log(error(5) === "Temperature Sensor Error: e5");
console.log(error(-1000) === 101);
