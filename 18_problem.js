const Users = [
    ["id", 20],
    ["name", "Hager"],
    ["city", "Cairo"],
    ["job", "student"],
];
console.log(
    Users.reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
    }, {})
);


const nums = [2, 1, 10, 20, -1, 100, 100, 50, 2, 1, 10, 20, -1, 20];
console.log(
    nums.reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {})
);

// to find the max value of the array nums;

console.log(
    nums.reduce((acc, cur) => {
        if (cur > acc) return cur;
        return acc;
    }, 0)
);
// const user = {
//     name: "khaled",
//     mainFun: () => `The name is ${user.name}`,
// };

// console.log(user.mainFun());
