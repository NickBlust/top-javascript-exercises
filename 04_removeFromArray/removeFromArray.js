const removeFromArray = function (arr, num) {

    for (let i = 1; i < arguments.length; i++) {
        arr = arr.filter((item) => item !== arguments[i]);
    }
    console.log(arr);
    return arr;
    // if (!Array.isArray(arr)) return "ERROR";
    // if(Number.isNaN(num) === NaN || typeof num === "undefined") num = 1;
    // console.log(num);
    // arr.splice(pos - 1, num);
    // console.log(arr);
    // return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
