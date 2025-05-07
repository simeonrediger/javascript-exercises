const fibonacci = function(n) {

    if (n < 0 || n != Math.floor(n)) {
        return 'OOPS';
    }

    let currentNum = 0;
    let prevNum = 0;
    let twicePrevNum = 0;

    for (let i = 1; i <= n; i++) {
        currentNum = twicePrevNum + prevNum || 1;
        twicePrevNum = prevNum;
        prevNum = currentNum;
    }

    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
