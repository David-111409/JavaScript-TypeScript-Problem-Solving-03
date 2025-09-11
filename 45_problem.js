const ar = ["I want to become", "a professsional", "front end developer"];

console.log(ar.map((sent) => sent.split(" ")).flat());
console.log(ar.join(" ").split(" "));
console.log(ar.flatMap((sent) => sent.split(" ")));
console.log([[[[2]]]].flat(3));
