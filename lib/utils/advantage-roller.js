function advantageRoller(dieSides, numOfDie) {
  const diceResults = [];
  for (let i = 0; i < numOfDie; i++) {
    const diceNumOne = Math.ceil(Math.random() * dieSides);
    const diceNumTwo = Math.ceil(Math.random() * dieSides);
    console.log(diceNumOne, diceNumTwo);
    diceResults[i] = Math.max(diceNumOne, diceNumTwo);
  }
  return diceResults;
}

module.exports = { advantageRoller };
