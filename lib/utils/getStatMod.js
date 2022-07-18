function getStatMod(statTotal) {
  return Math.floor((statTotal - 10) / 2);
}
  
module.exports = { getStatMod };
  
