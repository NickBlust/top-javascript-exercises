const reverseString = function (s) {
    if (typeof s !== "string") return "ERROR";

    // 'gnirts' is 'string' reversed
    gnirts = "";
    for (let i = 0; i < s.length; i++)
        gnirts += s[s.length - 1 - i];
    return gnirts;
};

// Do not edit below this line
module.exports = reverseString;
