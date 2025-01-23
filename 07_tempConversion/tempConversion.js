const convertToCelsius = function(fah) {

//convert celcius to fahrenheit
//let cnvCel

//if converted celcius is not rounded, round
//else return cnv

// if number is an integer, return number
// else, convert 

  //  let cnvCel = 0;
   const compToCel = (fah - 32) * 5/9 ;
   let rndFah = Math.round(compToCel *10) / 10;
   return rndFah;
  
  };


   const convertToFahrenheit = function(cel) {
    const compToFah = (cel * 9 / 5) + 32 ;
    let rndCel = Math.round(compToFah *10) / 10;
    return rndCel;
};


convertToCelsius()
convertToFahrenheit()
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
