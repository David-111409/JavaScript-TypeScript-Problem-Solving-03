const REGEXP = /^$/;
console.log(REGEXP.test(""));

const str = "";

const validate = (REGEXP) => {
    // if(!//.test(String(REGEXP))) return () => "invalid"
    return function testReg(str) {
        return REGEXP.test(str);
    };
};

const testExp = validate(REGEXP);

// Test.assertNotEquals(testExp(str), "invalid", "Nothing new here")
console.log(testExp(str), true);
