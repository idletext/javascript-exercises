const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(human) {
    // let arrAge = [];

    let arrAge = human.map(user => ({
        name: `${user.name}`,
        age: `${user.yearOfDeath - user.yearOfBirth}`
    }));

    let getOldest = arrAge.reduce((obj, value) => {
        let getAge = [obj.age];

        if (getAge < value.age){
            return getAge = value.age; 
        } else {
            return getAge;
        };

    });

    return(getOldest)
};

console.log(findTheOldest(people))

// Do not edit below this line
// module.exports = findTheOldest;
