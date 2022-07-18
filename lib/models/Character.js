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
    console.log('lemme test make character');
    console.log(character, user_id);
    console.log('done testing');
    if (character.background !== undefined
      && character.race !== undefined
      && character.character_name !== undefined
      && character.stats !== undefined
      && character.class !== undefined) {
      character = this.alterStatsByRace(character);
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
        // TODO: add elf feat? (the charm thing) and similar for other races
        break;
      case 'Halfling':
        character.stats.dexterity += 2;
        character.speed = 25;
        character.darkvision = true;
        break;
      case 'Tiefling':
        character.stats.charisma += 2;
        character.speed = 30;
        character.darkvision = true;
        break;
      case 'Half-Orc':
        character.stats.dexterity += 2;
        character.speed = 30;
        character.darkvision = true;
        break;
      case 'Half-Elf':
        character.stats.charisma += 2;
        character.stats.dexterity += 1;
        character.stats.wisdom += 1;
        // TODO: you get to pick it's not just dex and wis
        character.speed = 30;
        character.darkvision = true;
        break;
      case 'Dragonborn':
        character.stats.strength += 2;
        character.stats.constitution += 1;
        character.speed = 30;
        character.darkvision = true;
        break;
      case 'Tabaxi':
        character.stats.dexterity += 2;
        character.stats.charisma += 1;
        character.speed = 30;
        character.darkvision = true;
        break;
      case 'Gnome':
        character.stats.intelligence += 2;
        character.speed = 25;
        character.darkvision = true;
        break;
      case 'Dwarf':
        character.stats.constitution += 2;
        character.speed = 25;
        character.darkvision = true;
        break;
      case 'Aarakocra':
        character.stats.dexterity += 2;
        character.stats.charisma += 1;
        character.speed = 50;
        character.darkvision = false;
        break;
      case 'Kobold':
        character.stats.dexterity += 2;
        character.stats.strength -= 1;
        character.speed = 30;
        character.darkvision = true;
        break;
      case 'Genasi':
        character.stats.constitution += 2;
        character.speed = 30;
        character.darkvision = false;
        break;
      case 'Aasimar':
        character.stats.charisma += 2;
        character.speed = 30;
        character.darkvision = true;
        break;
      default:
        break;
    }
    return character;
  }

  static async deleteCharacter(character_name) {
    const { rows } = await pool.query(
      `
        DELETE
        FROM Characters c
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


