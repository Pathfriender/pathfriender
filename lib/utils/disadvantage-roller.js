function disadvantageRoller(dieSides, numOfDie) {
  //disadvantage in dnd just means you take the lower of two rolls
  //we want to display both, but the one we care about is in index 1
  const diceResults = [];
  for (let i = 0; i < numOfDie; i++) {
    const diceNumOne = Math.ceil(Math.random() * dieSides);
    const diceNumTwo = Math.ceil(Math.random() * dieSides);
    diceResults[0] = Math.max(diceNumOne, diceNumTwo);
    diceResults[1] = Math.min(diceNumOne, diceNumTwo);
  }
    
  return diceResults;
}

module.exports = { disadvantageRoller };
