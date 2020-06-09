/*******************
 * YOUR CODE HERE! *
 *******************/
function yell (str){
  return str + "!";
}

function getFirstCharacter (str){
  return str[0];
}

function getLastCharacter (str){
  return str[str.length - 1];
  }

function getOneCharacter (str, index){
  return str[index];
}

function getTwoCharacters (str, index, index2){
  return str[index] + str[index2];
}

function makeCapitalized (str){
  return str.toUppercase()
}

function yellLouder (str){
  
  return str.toUppercase() + '!!!';
}

function getInitials (name){
  return name[0] + '.' + name[name.indexOf('') + 1] + '.'
}





/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
