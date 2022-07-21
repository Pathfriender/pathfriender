const { getId } = require('../utils/getId');
const { getXp } = require('../utils/getXp');
const pool = require('../utils/pool');

module.exports = class Character {
  id;
  userID;
  experience;
  characterName;
  race;
  background;
  strength;
  dexterity;
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
    this.strength = row.strength;
    this.dexterity = row.dexterity;
    this.intelligence = row.intelligence;
    this.constitution = row.constitution;
    this.wisdom = row.wisdom;
    this.charisma = row.charisma;
  }

  static async getCharNameByUserId(user_id) {
    const { rows } = await pool.query(
      `
        SELECT c.character_name
        FROM Characters c
        WHERE c.user_id = $1`,
      [user_id]
    );
    if (rows && rows.length > 0) {
      return rows[0].character_name;
    }
    return null;
  }

  static async makeCharacter(user_id, character) {
    // console.log('lemme test make character');
    // console.log(character, user_id);
    // console.log('done testing');
    if (character.background !== undefined
      && character.race !== undefined
      && character.character_name !== undefined
      && character.stats !== undefined
      && character.class !== undefined) {
      character = await this.alterStatsByRace(character);
      const { rows } = await pool.query(
        `
        INSERT INTO characters(
          user_id,
          character_name,
          experience,
          class,
          race,
          feats,
          background,
          darkvision,
          strength,
          dexterity,
          intelligence,
          constitution,
          wisdom,
          charisma)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING character_id;
      `, [user_id, 
          character.character_name,
          0,
          character.class,
          character.race,
          character.feats,
          character.background,
          character.darkvision,
          character.stats.strength,
          character.stats.dexterity,
          character.stats.intelligence,
          character.stats.constitution,
          character.stats.wisdom,
          character.stats.charisma]
      );
      await this.addFeatsToTable(rows[0].character_id, character.feats);
    }
  }

  static async alterStatsByRace(character) {
    switch(character.race) {
      case 'Human':
        character.stats.dexterity += 1;
        character.stats.strength += 1;
        character.stats.dexterity += 1;
        character.stats.intelligence += 1;
        character.stats.constitution += 1;
        character.stats.charisma += 1;
        character.speed = 30;
        character.darkvision = false;
        break;
      case 'Elf':
        character.stats.dexterity += 2;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [1];
        break;
      case 'Halfling':
        character.stats.dexterity += 2;
        character.speed = 25;
        character.darkvision = true;
        character.feats = [17, 18, 19];
        break;
      case 'Tiefling':
        character.stats.charisma += 2;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [5];
        break;
      case 'Half-Orc':
        character.stats.strength += 2;
        character.stats.constitution += 1;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [15, 16];
        break;
      case 'Half-Elf':
        character.stats.charisma += 2;
        character.stats.dexterity += 1;
        character.stats.wisdom += 1;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [1];
        break;
      case 'Dragonborn':
        character.stats.strength += 2;
        character.stats.charisma += 1;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [13, 12];
        break;
      case 'Tabaxi':
        character.stats.dexterity += 2;
        character.stats.charisma += 1;
        character.speed = 30;
        character.feats = [20, 21];
        character.darkvision = true;
        break;
      case 'Gnome':
        character.stats.intelligence += 2;
        character.speed = 25;
        character.darkvision = true;
        character.feats = [14];
        break;
      case 'Dwarf':
        character.stats.constitution += 2;
        character.speed = 25;
        character.darkvision = true;
        character.feats = [10, 11];
        break;
      case 'Aarakocra':
        character.stats.dexterity += 2;
        character.stats.charisma += 1;
        character.speed = 50;
        character.darkvision = false;
        character.feats = [22];
        break;
      case 'Kobold':
        character.stats.dexterity += 2;
        character.stats.strength -= 1;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [2, 23, 24];
        break;
      case 'Air Genasi':
        character.stats.constitution += 2;
        character.stats.dexterity += 1;
        character.speed = 30;
        character.darkvision = false;
        character.feats = [3];
        break;
        
      case 'Earth Genasi':
        character.stats.constitution += 2;
        character.stats.strength += 1;
        character.speed = 30;
        character.darkvision = false;
        character.feats = [4];
        break;
        
      case 'Fire Genasi':
        character.stats.constitution += 2;
        character.stats.intelligence += 1;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [5];
        break;
        
      case 'Water Genasi':
        character.stats.constitution += 2;
        character.stats.wisdom += 1;
        character.speed = 30;
        character.darkvision = false;
        character.feats = [6, 7];
        break;
      case 'Aasimar':
        character.stats.charisma += 2;
        character.speed = 30;
        character.darkvision = true;
        character.feats = [8, 9];
        break;
      default:
        break;
    }
    return character;
  }

  static async addFeatsToTable(charId, featsArray) {
    for (const feat of featsArray) {
      await pool.query(
        `
          INSERT INTO character_feats (character_id, feat_id)
          VALUES ($1, $2)
          RETURNING character_feats.*`,
        [charId, feat]
      );
    }

  }

  static async addXp(character_name, xpToAdd) {
    const currentXp = await getXp(character_name);
    // would just call getStats but 'this' isn't defined yet by the time this is called
    const numberXp = Number(currentXp);
    const char_xp = numberXp + xpToAdd;
    const { rows } = await pool.query(
      `
        UPDATE Characters c
        SET experience = $1
        WHERE character_name = $2
        RETURNING c.*`,
      [char_xp, character_name]
    );
    return rows[0].experience;
  }

  static async deleteCharacter(character_name) {
    const charId = await getId(character_name);
    await pool.query(
      `
        DELETE
        FROM characters cf
        WHERE cf.character_id = $1
        RETURNING cf.*`,
      [charId]
    );
    const { rows } = await pool.query(
      `
        DELETE
        FROM characters c
        WHERE c.character_name = $1
        RETURNING c.*`,
      [character_name]
    );
    return rows[0];
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

  static async getXp(character_name) {
    const { rows } = await pool.query(
      `
        SELECT c.experience
        FROM Characters c
        WHERE c.character_name = $1`,
      [character_name]
    );  
    if (!rows[0]) {
      return null;
    }
    return rows[0].experience;
  }

  static async getCharacter(character_name) {
    const { rows } = await pool.query(
      `
        SELECT *
        FROM Characters c
        WHERE c.character_name = $1`,
      [character_name]
    );
    return rows[0];
  }
  
  static async getStats(character_name) {
    const { rows } = await pool.query(
      `
    SELECT dexterity, strength, intelligence, constitution, wisdom, charisma
    FROM Characters c
    WHERE c.character_name = $1;
  `, [character_name]
    );
    if (rows && rows.length > 0) {
      return rows[0];
    }
    return null;
  }


};


