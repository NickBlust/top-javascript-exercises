const sumAll = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    if (b < a) {
        a = a + b;
        b = a - b;
        a = a - b;
    }

    result = 0;
    for (i = a; i <= b; i++)
        result += i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
