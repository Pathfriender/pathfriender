const pool = require('./pool');

async function getItemDescription(item_name) {
  const { rows } = await pool.query(
    `
        SELECT m.*
        FROM magic_items_table m
        WHERE m.name = $1`,
    [item_name]
  );
  return rows[0];
}

module.exports = { getItemDescription };

