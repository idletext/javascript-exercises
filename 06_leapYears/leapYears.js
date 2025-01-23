const leapYears = function(gvnYear) {
    if (gvnYear % 100 === 0 && gvnYear % 400 !== 0){
        return false;
    }else if (gvnYear % 4 === 0) {
        return true; 
    }else {
        return false;
    }
    // } else {
    //     return true;
    // }
};

// if numbber is divisible by 100, return false
// elese if number is divisible by 4 && 400, return true

leapYears();
// Do not edit below this line
module.exports = leapYears;
