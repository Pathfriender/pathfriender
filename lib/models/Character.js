const pool = require('../utils/pool');

module.exports = class Character {
  id;
  userID;
  experience;
  characterName;
  race;
  background;
  dexterity;
  strength;
  intelligence;
  constitution;
  wisdom;
  charisma;

  constructor(row) {
    this.id = row.id;
    this.userID = row.userID;
    this.experience = row.experience;
    this.characterName = row.characterName;
    this.race = row.race;
    this.background = row.background;
    this.dexterity = row.dexterity;
    this.strength = row.strength;
    this.intelligence = row.intelligence;
    this.con = row.con;
    this.wisdom = row.wisdom;
    this.charisma = row.charisma;
  }

  static async getCharNameByUserId(user_id) {
    const { rows } = await pool.query(
      `
        SELECT c.character_id
        FROM Characters c
        WHERE c.user_id = $1`,
      [user_id]
    );
    if (rows && rows.length > 0) {
      return rows[0].character_id;
    }
    return null;
  }

  static async makeCharacter(user_id, character) {
    console.log('lemme test make character');
    console.log(character, user_id);
    console.log('done testing');
    if (character.background !== undefined
      && character.race !== undefined
      && character.character_name !== undefined
      && character.stats !== undefined
      && character.class !== undefined) {
      await pool.query(
        `
        INSERT INTO characters(
          user_id,
          character_name,
          experience,
          class,
          race,
          background,
          dexterity,
          strength,
          intelligence,
          constitution,
          wisdom,
          charisma)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
      `, [user_id, 
          character.character_name,
          0,
          character.class,
          character.race,
          character.background,
          character.stats.dexterity,
          character.stats.strength,
          character.stats.dexterity,
          character.stats.intelligence,
          character.stats.constitution,
          character.stats.charisma]
      );
    }
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

  static async getDex(character_name) {
    const { rows } = await pool.query(
      `
    SELECT *
    FROM Characters c
    WHERE c.character_name = $1;
  `, [character_name]
    );
    if (rows && rows.length > 0) {
      return rows[0].dexterity;
    }
    return null;
  }

};


