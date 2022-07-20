const { getFeat } = require('../models/Feat');

async function displayFeats(characterId) {
  const featsArray = await getFeat(characterId);
  const displayArray = []; //array of numbers of feat ids
  for (let i = 0; i < featsArray.length; i++) {
    const featString = featsArray[i];
    //gets feat name and feat description
    displayArray.push(featString.feat_name);
  }
  return displayArray.join(', ');
}
  
module.exports = { displayFeats };
  
