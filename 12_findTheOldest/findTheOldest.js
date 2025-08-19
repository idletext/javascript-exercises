const findTheOldest = function(human) {
    // let arrAge = [];

    let arrAge = human.map(user => ({
        name: `${user.name}`,
        age: `${user.yearOfDeath - user.yearOfBirth}`
    }));

    let getOldest = arrAge.reduce((obj, value) => {

        if (obj.age < value.age){
            return obj = value; 
        } else {
            return obj;
        };

    });

    return(getOldest['name']);
};

// Do not edit below this line
module.exports = findTheOldest;
