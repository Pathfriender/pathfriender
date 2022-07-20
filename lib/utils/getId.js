const pool = require('../utils/pool');

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

