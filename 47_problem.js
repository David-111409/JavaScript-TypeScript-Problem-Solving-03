let falsy = new Boolean(false); // which is not false

if (falsy /*This is true value*/) {
    if ([] /*This is true value*/) console.log("Array [] is empty");
    if ([] == false/*This is also true vlaue*/) console.log("here is the second condition!");
}
console.log(Boolean({}), Number({}), String({}));
console.log(Boolean(+0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Number(null));
console.log(([] == false));
