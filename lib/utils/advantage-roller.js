function advantageRoller(dieSides, numOfDie) {
  //advantage in dnd just means you take the higher of two rolls
  //we want to display both, but the one we care about is in index 1
  const diceResults = [];
  for (let i = 0; i < numOfDie; i++) {
    const diceNumOne = Math.ceil(Math.random() * dieSides);
    const diceNumTwo = Math.ceil(Math.random() * dieSides);
    diceResults[0] = Math.min(diceNumOne, diceNumTwo);
    diceResults[1] = Math.max(diceNumOne, diceNumTwo);
  }
  return diceResults;
}

module.exports = { advantageRoller };
