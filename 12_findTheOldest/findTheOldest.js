const findTheOldest = function(human) {

    let getOldest = human.reduce((obj, value) => {

        if (  
            (obj['yearOfDeath'] - obj['yearOfBirth']) 
            < (value['yearOfDeath'] - value['yearOfBirth'])
        ){
            return obj = value; 
        } else {
            return obj;
        };

    });

    return(getOldest);
};

// Do not edit below this line
module.exports = findTheOldest;
