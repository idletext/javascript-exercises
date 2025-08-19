let people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
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
];

const findTheOldest = function(human) {
    
    let addYod = human.map(x => {
        let date = new Date();

        if (!("yearOfDeath" in x) ) {
            x.yearOfDeath = date.getFullYear();
        }
        return x;
    });
    

    let getOldest = addYod.reduce((obj, value) => {

        // let yod = value["yearOfDeath"];
        // if (value.find(x => yod.includes(x))) value.push(yod)

        // if ( !("yearOfDeath" in value) ) {
        //     value.yearOfDeath = "2025";
        // };

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

console.log(findTheOldest(people))
// Do not edit below this line
// module.exports = findTheOldest;
