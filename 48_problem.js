console.log(Object.is(NaN, NaN));
console.log(Object.is("test", "test"));
console.log(Object.is(undefined, undefined));
console.log(Object.is({a: 1}, {a:1}));
console.log(Object.is([1, 2], [1, 2]));
console.log(undefined == undefined);
console.log(undefined === undefined);

console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));
console.log(null === null);

let person = {name: "dawoud"};
const members = [person];
person = null;
console.log(members, person);
