function toCamelCase(str) {
    return str.replaceAll(/[-_](\w)/gi, (el) => el[1].toUpperCase());
}

console.log(
    toCamelCase("the_stealth_warrior") === "theStealthWarrior",
    "Did not return correct value"
);
console.log(
    toCamelCase("The-Stealth-Warrior") === "TheStealthWarrior",
    "Did not return correct value"
);
console.log(toCamelCase("A-B-C") === "ABC", "Did not return correct value.");
console.log(
    toCamelCase("") === "",
    "An empty string was provided but not returned."
);
