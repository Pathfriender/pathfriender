function disadvantageRoller(dieSides, numOfDie) {
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
