const repeatString = function(string, num) {
// hey*3
// initializer is calls the function and serves
// as counter
// Condition if init = 4 stop looping

    let repeatedString = "";

    for (; num > 0; num--) {

        repeatedString += string;
    };

    return repeatedString;
};  

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
