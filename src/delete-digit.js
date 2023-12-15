const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringN = n.toString();
  const newString = '';
  const array = [];
  //array.push(stringN.slice(1) * 1);
  for (let i=0; i < stringN.length; i++) {    
    array.push(newString.concat(stringN.slice(0, i), stringN.slice(i+1)) * 1);    
  };
  return Math.max.apply(null, array);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
