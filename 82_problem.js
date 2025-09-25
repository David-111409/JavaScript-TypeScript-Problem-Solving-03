var addDigits = function (num) {
    // if (num < 10) return num;
    // return addDigits(Math.floor(num / 10)) + (num % 10);
    let sum = 0;
    while (num > 9) {
        while (num) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
        sum = 0;
    }

    return num;
};
