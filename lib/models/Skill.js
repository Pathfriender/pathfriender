const pool = require('../utils/pool');
const getStatMod = require('../utils/getStatMod.js');

module.exports = class Skill {
  id;
  value;

  constructor(row) {
    this.id = row.id;
    this.value = row.value;
  }


  static async getSkillBonus(skillName, character_name) {
    console.log('hey wait a minute', skillName, character_name);
    const { rows } = await pool.query(
      `
        SELECT $1
        FROM Characters c
        WHERE c.character_name = $2`,
      [skillName, character_name]
    );
    return getStatMod(rows[0].skillName);
  }
};
