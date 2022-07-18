const pool = require('../utils/pool');
const { getStatMod } = require('../utils/getStatMod.js');

module.exports = class Skill {
  id;
  value;

  constructor(row) {
    this.id = row.id;
    this.value = row.value;
  }

  static async getRelevantStat(skillName) {
    const { rows } = await pool.query(
      `
        SELECT skill_stat
        FROM skills
        WHERE skill_name = $1`,
      [skillName]
    );
    return rows[0];
  }

  static async getSkillBonus(skillName, stats) {
    const skillStatRow = await this.getRelevantStat(skillName);
    const skillStat = stats[skillStatRow.skill_stat];
    return getStatMod(skillStat);
  }
};
