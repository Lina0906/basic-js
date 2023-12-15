const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(membersArray) {
  if (Array.isArray(membersArray)) {
    
    const stringMembersArray = [];
    const dreamTeamNameArray = [];
  
    for (let i=0; i<membersArray.length; i++)
    if (typeof(membersArray[i]) == 'string') {
      stringMembersArray.push(membersArray[i].toUpperCase().trim());
    } 

    
  
    for (let j=0; j<stringMembersArray.length; j++) {
      dreamTeamNameArray.push(stringMembersArray[j][0]);
    }
  
    return dreamTeamName = dreamTeamNameArray.sort().join('');}

  return false;
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
