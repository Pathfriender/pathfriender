function magItGen(magItNum) {

  const magItResults = [];
  
  for (let i = 0; i < magItNum; i++) {
    const lootNum = Math.ceil(Math.random() * 50);
    magItResults[i] = lootNum;
  }

  const res = magItResults.join(', ');
  console.log(magItResults, 'the result received');
  console.log(res, 'the result received, dearrayed');
  return magItResults[0];
}


module.exports = { magItGen };
