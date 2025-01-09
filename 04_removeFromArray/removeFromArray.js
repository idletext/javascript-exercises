const removeFromArray = function(ary, ...val) {
 
    // let i = 0;
    // while (i < ary.length) {
    //     if (ary[i] === val) {
    //         ary.splice(i, 1);
    //     } else {
    //         ++i;
    //     }
    // }
    // return ary;

    return ary.filter(x => !val.includes(x))

};

removeFromArray([1, 2, 3, 4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
