function roller(dieSides, numOfDie) {

  const diceResults = [];

  for (let i = 0; i < numOfDie; i++) {
    const diceNum = Math.ceil(Math.random() * dieSides);
    diceResults[i] = diceNum;
  }

  return diceResults;
}


function playerInitRoller() {

  const diceResults = [];

  for (let i = 0; i < 1; i++) {
    const diceNum = Math.ceil(Math.random() * 20);
    diceResults[i] = diceNum;
  }

  return diceResults;
}


function statRoller() {

  const filtered = [];

  for(let i = 0; i < 6; i++) {
    const data = roller(6, 4);
    const min = Math.min(...data);
    let minIndex = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === min) {
        minIndex = i;
      }
    }
    data.splice(minIndex, 1);
    filtered[i] = sum(data);
  }
  return filtered;
}

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

module.exports = { roller, statRoller, sum, playerInitRoller };
