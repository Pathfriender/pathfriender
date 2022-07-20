const pool = require('../utils/pool');

async function getXp(character_name) {
  const { rows } = await pool.query(
    `
          SELECT experience
          FROM Characters c
          WHERE c.character_name = $1`,
    [character_name]
  );
  const currentXp = (rows[0].experience);
  return currentXp;
}

module.exports = { getXp };
