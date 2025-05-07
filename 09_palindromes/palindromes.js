const palindromes = function (string) {
    const letters = Array.from(string)
        .filter(letter => /[a-zA-Z0-9]/.test(letter))
        .join('')
        .toLowerCase();

    const lettersReversed = Array.from(letters)
        .reverse()
        .join('')
        .toLowerCase();

    return letters === lettersReversed;
};

// Do not edit below this line
module.exports = palindromes;
