const sumAll = function(val1, val2) {
    let finAry = [];
    let sum = 0;
    // an if statement here that changes
    // the value of the final 
    
    if ( (val1) < 0 ||
         (val2) < 0 || 
        //  (val1||val2) !== 0 ||
        //  typeof 0 !== typeof (val1||val2)||
        //  !Number.isNumber((val1||val2))||
        //  Number.isNaN(val1||val2)||
        //  Array.isArray(val1||val2)||
         !Number.isInteger(val1)||
         !Number.isInteger(val2)){
            return "ERROR";
    }else if (val1 < val2) {
        for ( let i = val1; i <= val2; i++) {
            finAry.push(i);
        };
    }else if (val1 > val2){
        for ( let i = val1; i >= val2; i--) {
            finAry.push(i);
        };
    } 

    // } else if (val1 < 0){
    //     sum.push('ERROR');
    //     sumAll.break;   
    // }

    finAry.forEach(x => {
        sum += x;
    });
    
    if (sum > 0){
        return sum;
    };

};




    //create a loop that loops through the given numbers.
    
    //get all numbers that are inside 2 integers
    // start a sum loop from the start to finish element
    // if a large number is given first, reverse the sum loop
    // give out an error if the number is not an integer.

    // the values of the forloop could be the argument value

// return the sum of the finAry variable when loop finishes.

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
