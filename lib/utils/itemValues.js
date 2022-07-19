function magItGen(magItNum) {

  const magItResults = [];
  
  for (let i = 0; i < magItNum; i++) {
    const lootNum = Math.ceil(Math.random() * 50);
    magItResults[i] = lootNum;
  }

  return magItResults;
}


module.exports = { magItGen };
