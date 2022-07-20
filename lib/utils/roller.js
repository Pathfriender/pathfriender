function roller(dieSides, numOfDie) {
//we start with adding two arguments that will represent 
//the values inputted by the user in the slash command
//and set up an array to hold the results
  const diceResults = [];

  //then we loop through the number of dice the user specified
  for (let i = 0; i < numOfDie; i++) {
    //and get a random number within the number of sides the user specified
    const diceNum = Math.ceil(Math.random() * dieSides);
    //and add that rolled result to the array
    diceResults[i] = diceNum;
  }
  //before finally returning the array with the populated values
  return diceResults;
}


function playerInitRoller() {
//as in this function a player can't roll more than one die for their initiative it needs no arguments
//we still set up an array to hold the results
  const diceResults = [];
  //then we loop through once
  for (let i = 0; i < 1; i++) {
    //and get a random number between one and twenty
    const diceNum = Math.ceil(Math.random() * 20);
    //and stick that in the result array
    diceResults[i] = diceNum;
  }
  //ended with again returning the filled array
  return diceResults;
}


function statRoller() {
//as in the typical game of fifth edition d&d, 
//if you roll for your stats you always roll four six sided die and remove the lowest value, 
//and do this six times; one for every stat
//we set an array to hold the results received after rolling four die and removing the lowest
  const filtered = [];
  //then we loop through six times, one for each state
  for(let i = 0; i < 6; i++) {
    //we call our roller function set up in this same utility, 
    //with a number of sides equalling six and the amount of dice equalling 4
    const data = roller(6, 4);
    //then we set a constant which determines the lowest value received in the data constant above
    const min = Math.min(...data);
    let minIndex = 0;
    //here we loop through our data constant for every set of die rolls
    for (let i = 0; i < data.length; i++) {
      if (data[i] === min) {
        minIndex = i;
      }
    }
    //and then we use the .splice function to remove the item at the associated index, 
    //which would be the lowest die roll received
    data.splice(minIndex, 1);
    //and here we call our sum function to combine the remaining die rolls 
    //to receive a value for your players to assign to one of their stats
    filtered[i] = sum(data);
  }
  return filtered;
}

//in this function we simply combine all integers in a given array
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

module.exports = { roller, statRoller, sum, playerInitRoller };
