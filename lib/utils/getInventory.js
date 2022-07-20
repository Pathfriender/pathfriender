const pool = require('../utils/pool');

async function getInventory(character_name) {
  const { rows } = await pool.query(
    `
        SELECT c.inventory
        FROM Characters c
        WHERE c.character_name = $1`,
    [character_name]
  );
  return rows[0].inventory;
}

module.exports = { getInventory };

