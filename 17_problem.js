
function canBuild(first, second) {
    let first_count = {};
    // let second_count = {};

    for (let letter of first)
        first_count[letter] = first_count[letter] + 1 || 1;

    // for (let letter of second)
    //     second_count[letter] = second_count[letter] + 1 || 1;

    for (let el of second) {
        // if ((first_count[el] || 0) < second_count[el]) return false;
        if (!first_count[el]) return false;
        first_count[el]--;
    }

    return true;
}

console.log(canBuild("aPPleAL", "PAL"), true);
console.log(canBuild("OAT", "OAT"), true);
console.log(canBuild("maybelLINE", "maybe"), true);
console.log(canBuild("topsh", "shop"), true);
console.log(canBuild("topshSHP", "SHoP"), true);
console.log(canBuild("DAISIES", "SAID"), true);
console.log(canBuild("ToporP", "porT"), true);
console.log(canBuild("PoTluCK", "PuCK"), true);
console.log(canBuild("pATS", "p"), true);
console.log(canBuild("blah", ""), true);
console.log(canBuild("aPPleAL", "apple"), false);
console.log(canBuild("shortCAKE", "cakey"), false);
console.log(canBuild("maybeLINE", "lINE"), false);
console.log(canBuild("teaPOT", "lINE"), false);
console.log(canBuild("", "a"), false);
console.log(canBuild("a", "aA"), false);
console.log(canBuild("a", "A"), false);
console.log(canBuild("AAAAAA", "AAAAAAa"), false);
console.log(canBuild("apple", "appleY"), false);
console.log(canBuild("xxYYzZ", "zzZxYxY"), false);
console.log(canBuild("abCD", "aBCD"), false);
