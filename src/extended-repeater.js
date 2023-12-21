const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */) {
  // let newStr;
  // if (options.additionSeparator === undefined) {
  //   newStr = str.toString().concat(Array(options.additionRepeatTimes).fill(options.addition).join('|'));
  // } else newStr = str.toString().concat(Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator));
  // if (options.separator === undefined) {
  //   return Array(options.repeatTimes*1).fill(newStr).join('+');
  // } else return Array(options.repeatTimes*1).fill(newStr).join(options.separator);
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
