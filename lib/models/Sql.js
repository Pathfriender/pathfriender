const pool = require('../utils/pool');

module.exports = class Sql {
  id;
  value;

  constructor(row) {
    this.id = row.id;
    this.value = row.value;
  }


  static async getValue(userInput) {
    const { rows } = await pool.query(
      `
SELECT value
FROM Characters c
WHERE c.character_id = $1`,
      [userInput]
    );
    return rows[0].value;
  }
};
