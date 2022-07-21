function magItGen(magItNum) {
//we start with adding an argument that will represent 
//the value inputted by the user in the slash command
//and set up an array to hold the results
  const magItResults = [];
  //then we loop through for an amount of times equalling the inputted value
  for (let i = 0; i < magItNum; i++) {
    //we determine what number gets pulled to later match with the magic item ID with a random math function that caps at the 
    const lootNum = Math.ceil(Math.random() * 50);
    //and then store that number in the array
    magItResults[i] = lootNum;
  }
  //and return the filled out array
  return magItResults;
}

function armorGen(armorNum) {
//we start with adding an argument that will represent 
//the value inputted by the user in the slash command
//and set up an array to hold the results
  const armorResults = [];
  //then we loop through for an amount of times equalling the inputted value
  for (let i = 0; i < armorNum; i++) {
    //we determine what number gets pulled to later match with the armor ID with a random math function
    const lootNum = Math.ceil(Math.random() * 13);
    //and then store that number in the array
    armorResults[i] = lootNum;
  }
  //and return the filled out array
  return armorResults;
}

function weaponGen(weaponNum) {
//we start with adding an argument that will represent 
//the value inputted by the user in the slash command
//and set up an array to hold the results
  const weaponResults = [];
  //then we loop through for an amount of times equalling the inputted value
  for (let i = 0; i < weaponNum; i++) {
    //we determine what number gets pulled to later match with the weapon ID with a random math function
    const lootNum = Math.ceil(Math.random() * 37);
    //and then store that number in the array
    weaponResults[i] = lootNum;
  }
  //and return the filled out array
  return weaponResults;
}

module.exports = { magItGen, armorGen, weaponGen };
