const palindromes = function (s) {
    if (typeof s !== "string") return "ERROR";

    s = s.replaceAll('!', '');
    s = s.replaceAll('?', '');
    s = s.replaceAll(',', '');
    s = s.replaceAll('.', '');
    s = s.replaceAll(' ', '');
    s = s.toLowerCase();

    r = s.split('').reverse().join('');
    return s === r;
};

// Do not edit below this line
module.exports = palindromes;
