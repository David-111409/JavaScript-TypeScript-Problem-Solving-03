
/*
unmix("123456") ➞ "214365"

unmix("hTsii  s aimex dpus rtni.g") ➞ "This is a mixed up string."

unmix("badce") ➞ "abcde" 
*/

function unmix(str) {
    let ar = str.split("");
    let l = str.length - 1;
    for (let i = 0; i < l ; i += 2) {
        // console.log(ar[i], ar[i + 1]);
        [ar[i], ar[i + 1]] = [ar[i + 1], ar[i]];
    }
    return ar.join("");
}

console.log(unmix("123456") === "214365");
console.log(unmix("hTsii  s aimex dpus rtni.g") === "This is a mixed up string.");
console.log(unmix("badce") === "abcde");
console.log(
    unmix(" Imaf eeilgna l tilt eidzz!y") ===
    "I am feeling a little dizzy!"
);
console.log(unmix("") === "", "Should work with empty strings as well.");
