function magItGen(magItNum) {

  const magItResults = [];
  
  for (let i = 0; i < magItNum; i++) {
    const lootNum = Math.ceil(Math.random() * magItNum);
    magItResults[i] = lootNum;
  }
  
  return magItResults;
}

module.exports = { magItGen };
