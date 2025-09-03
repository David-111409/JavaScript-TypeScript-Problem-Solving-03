function uncensor(str, vowels) {
    let i = 0;
    
    return str
        .split("")
        .map((el) => {
            if (el === "*") {
                return vowels[i++];
            }
            return el;
        })
        .join("");
}

console.log(
    uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"),
    "Where did my vowels go?"
);
console.log(uncensor("abcd" , "") === "abcd" , "Works with no vowels.");
console.log(uncensor("*PP*RC*S*", "UEAE") === "UPPERCASE", "Works with uppercase");
console.log(
    uncensor("Ch**s*, Gr*mm*t -- ch**s*", "eeeoieee") ===
    "Cheese, Grommit -- cheese",
    "Works with * at the end"
);
console.log(
    uncensor("*l*ph*nt", "Eea") ===
    "Elephant",
    "Works with * at the start"
);
