function magItGen(magItNum) {

  const magItResults = [];
  
  for (let i = 0; i < magItNum; i++) {
    const lootNum = Math.ceil(Math.random() * 50);
    magItResults[i] = lootNum;
  }

  return magItResults;
}

function armorGen(armorNum) {

  const armorResults = [];
    
  for (let i = 0; i < armorNum; i++) {
    const lootNum = Math.ceil(Math.random() * 18);
    armorResults[i] = lootNum;
  }
  
  return armorResults;
}

module.exports = { magItGen, armorGen };
