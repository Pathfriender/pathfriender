function getStatMod(statTotal) {
  //every 2 points in a stat gives you another point of bonus
  //a 12 in dexterity gives you a +1 in dexterity things, a 13 also gives you +1, a 14 gives you +2, etc
  //calculated off of a starting 'default' stat of 0
  return Math.floor((statTotal - 10) / 2);
}
  
module.exports = { getStatMod };
  
