const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  flatArray = array.flat(Infinity);
    
    let count = 0;
    for (let i=0; i<flatArray.length; i++)
    if (flatArray[i] == "^^") {count += 1}
    else 0;


    return count;   
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
