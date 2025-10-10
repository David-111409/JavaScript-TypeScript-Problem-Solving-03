const locations = {
  20: "Place 1",
  30: "Place 2",
  40: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;
let locationsKeys = Object.keys(locations).map(Number);
let check = locationsKeys.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check);
