module.exports = function roller(dieSides, numOfDie) {
  const diceResults = [];
  for (let i = 0; i < numOfDie; i++) {
    const diceNum = Math.ceil(Math.random() * dieSides);
    diceResults[i] = diceNum;
  }
  return diceResults;
};
