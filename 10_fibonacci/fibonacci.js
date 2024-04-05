const fibonacci = function (n) {
    n = Number(n);
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    nm1 = 1;
    nm2 = 1;
    f = 0;
    for (i = 0; i < n - 2; i++) {
        f = nm1 + nm2;
        nm2 = nm1;
        nm1 = f;
    }
    return f;
}

// Do not edit below this line
module.exports = fibonacci;
