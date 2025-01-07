const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let InsideString = "";

    for (; num > 0; num--) {

        InsideString += string;
    };

    return InsideString;
};  

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
