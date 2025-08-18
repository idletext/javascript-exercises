const palindromes = function (str) {

let punct = ["!", "?", ",", " ","."];

let filterStr = str
.toLowerCase()
.split("")
.filter(x => !punct.includes(x))
.join("");

let revStr = "";

for (let i = filterStr.length - 1; i >= 0; i--){
    revStr += filterStr[i];
};

return (revStr == filterStr) ?  true :  false;

};

// Do not edit below this line
module.exports = palindromes;
