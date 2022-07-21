const { getFeat } = require('../models/Feat');

async function displayFeats(characterId) {
  const featsArray = await getFeat(characterId);
  const displayArray = []; //array of numbers of feat ids; [1, 2]
  for (let i = 0; i < featsArray.length; i++) {
    const featString = featsArray[i];
    //gets feat name from database
    displayArray.push(featString.feat_name);
  }
  return displayArray.join(', '); //['Fey Ancestry', 'Sunlight Sensitivity']
}
  
module.exports = { displayFeats };
  
