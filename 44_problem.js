// const ar = [10, 2, 3, 4, 5, 3, 2, 10, 4];
const ar = [1, 2, 3, 4, 5, 3, 2];
// const ar2 = ar.filter(el => el);
// const ar2 = ar;
let result = ar.filter((el) => ar.indexOf(el) === ar.lastIndexOf(el));
console.log(result, /*ar == ar2*/);
