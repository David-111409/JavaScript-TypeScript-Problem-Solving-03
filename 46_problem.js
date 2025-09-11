let map = new Map();

map["name"] = "hager";
map["name"] = "hager2";
map.set("name", "hager");

console.log(map.has("hager"));
console.log(map, map.size);

const ar = Array(3).fill([9]);

ar[0].push(10);
console.log(ar);
