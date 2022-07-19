function magItGen(magItNum) {

  const magItResults = [];
  
  for (let i = 0; i < magItNum; i++) {
    const lootNum = Math.ceil(Math.random() * 50);
    magItResults[i] = lootNum;
  }

  const res = magItResults.join(' ');

  return res;
}


module.exports = { magItGen };
