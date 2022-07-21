function displayAttacks(weaponsArray) {
  //not yet implemented.
  //theoretically this would look at the your inventory to see your weapons,
  //the weapons table to see their statistics, and display based on those statistics
  //but you have to stop adding features at some point
  const attacksArray = [];
  for (const weapon of weaponsArray) {
    const attackString = weapon.name + ': 1d20 + ' + weapon.enhancement + ' / ' + weapon.damageDice + ' ' + weapon.damageType;
    attacksArray.push(attackString);
  }
  return weaponsArray;
}
  
module.exports = { displayAttacks };
  
