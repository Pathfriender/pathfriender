const pool = require('../utils/pool');

//just gets a character's id from their name
async function getId(character_name) {
  const { rows } = await pool.query(
    `
        SELECT c.character_id
        FROM Characters c
        WHERE c.character_name = $1`,
    [character_name]
  );
  return rows[0].character_name;
}

module.exports = { getId };

