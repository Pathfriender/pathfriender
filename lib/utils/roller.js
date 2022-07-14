function roller(dieSides, numOfDie) {

  const diceResults = [];

  for (let i = 0; i < numOfDie; i++) {
    const diceNum = Math.ceil(Math.random() * dieSides);
    diceResults[i] = diceNum;
  }

  return diceResults;
}

function statRoller() {

  const filtered = [];

  for(let i = 0; i < 6; i++) {
    const data = roller(6, 4);
    const min = Math.min(data.map(item => item.rest));
    console.log(min, 'loop log');
    const result = data.filter(item => item.rest === min);
    filtered[i] = result;
  }
  return filtered;
}
console.log(statRoller(), 'function log');

module.exports = { roller, statRoller };
