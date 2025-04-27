const sumAll = function(n, m) {
    const inputsAreNonNegative = n >= 0 && m >= 0;
    const inputsAreIntegers = n === parseInt(n) && m === parseInt(m);

    if (!inputsAreNonNegative || !inputsAreIntegers) {
        return 'ERROR';
    }

    let sum = 0;
    for (let i = Math.min(n, m); i <= Math.max(n, m); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
