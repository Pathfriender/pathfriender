const pool = require('../utils/pool');

module.exports = class Character {
  id;
  userID;
  experience;
  characterName;
  race;
  dex;
  str;
  int;
  con;
  wis;
  cha;

  constructor(row) {
    this.id = row.id;
    this.userID = row.userID;
    this.experience = row.experience;
    this.characterName = row.characterName;
    this.race = row.race;
    this.dex = row.dex;
    this.str = row.str;
    this.int = row.int;
    this.con = row.con;
    this.wis = row.wis;
    this.cha = row.cha;
  }

  static async getCharNameByUserId(user_id) {
    const { rows } = await pool.query(
      `
        SELECT c.character_id
        FROM Characters c
        WHERE c.user_id = $1`,
      [user_id]
    );
    return rows[0].character_id;
  }

  static async getName(character_id) {
    const { rows } = await pool.query(
      `
        SELECT c.character_name
        FROM Characters c
        WHERE c.character_id = $1`,
      [character_id]
    );
    return rows[0].character_name;
  }
};
