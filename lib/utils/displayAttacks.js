function displayAttacks(weaponsArray) {
  const attacksArray = [];
  for (const weapon of weaponsArray) {
    const attackString = weapon.name + ': 1d20 + ' + weapon.enhancement + ' / ' + weapon.damage + ' ' + weapon.damageType;
    attacksArray.push(attackString);
  }
  return weaponsArray;
}
  
module.exports = { displayAttacks };
  
