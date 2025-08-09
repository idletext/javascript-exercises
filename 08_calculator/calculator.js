const add = function(...add) {
  return add.reduce( (array, current) => array + current);
};

const subtract = function(...subt) {
	return subt.reduce( (array, current) => array - current);
};

const sum = function(sum) {
  return sum.reduce( (som, current) => som + current, 0 );
};

const multiply = function(multi) {
  return multi.reduce( (multiply, current) => multiply * current );
};

const power = function(...power) {
  return power.reduce( (array, current) => array ** current);
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
