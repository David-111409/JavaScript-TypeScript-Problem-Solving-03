/**
 * What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples

missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
 */
function missingLetter(str) {
    let l = str.length - 1;
    for (let i = 0; i < l; i++) {
        let secondCode = str[i + 1].charCodeAt(0);
        let firstCode = str[i].charCodeAt(0);
        let dif = secondCode - firstCode;
        if (dif > 1)
            return /* String.fromCharCode(secondCode - 1) */ String.fromCharCode(
                firstCode + 1
            );
    }
    return "No Missing Letter";
}

console.log(missingLetter("abdefg"), "c", "Example #1");
console.log(missingLetter("mnopqs"), "r", "Example #2");
console.log(missingLetter("tuvxyz"), "w", "Example #3");
console.log(missingLetter("jlm"), "k");
console.log(missingLetter("rsu"), "t");
console.log(missingLetter("eghij"), "f");
console.log(missingLetter("qrtuv"), "s");
console.log(missingLetter("ghijklmno"), "No Missing Letter", "Example #4");
console.log(missingLetter("xyz"), "No Missing Letter");
