const findTheOldest = function(human) {
    
    let addYod = human.map(x => {
        let date = new Date();

        if (!("yearOfDeath" in x) ) {
            x.yearOfDeath = date.getFullYear();
        }
        return x;
    });
    
    let getOldest = addYod.reduce((obj, value) => {
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
