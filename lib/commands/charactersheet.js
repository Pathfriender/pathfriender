
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character');
const { calculateLevel } = require('../utils/calculateLevel.js');
const { displayFeats } = require('../utils/displayFeats.js');
// const { displayAttacks } = require('../utils/displayAttacks.js');
const { getStatMod } = require('../utils/getStatMod.js');
//When user types command /charactersheet it sends text display of the users character sheet
// this should print out something like 
// (character name), (character level) (character race) (character class).
// Proficiency bonus: (proficiency bonus)
// Background: (character background)
// Strength: 4 (strength number)
// Dexterity: 18 (dexterity number)
// Constitution: 10 (constitution number)
// Intelligence: 18 (intelligence number)
// Wisdom: 3  (wisdom number)
// Charisma: 15 (charisma number)
// Feats: Fire Resistance (list of the characters different feats)
// Inventory:  (a list of items in their inventory )
// Does have darkvision (boolean of their darkvision)
// Attacks: (attacks with modifiers)
//     Unarmed: 1d20+-3 / 1  Bludgeoning
module.exports = {
  data: new SlashCommandBuilder()
    .setName('charactersheet')
    .setDescription('Displays all your character information')
    .addStringOption(option => option
      .setName('charactername')
      .setDescription('name of character to get sheet for (blank if you)')),
  async execute(interaction) {
    let characterName = interaction.options.getString('charactername');
    if (characterName === null) {
      characterName = await Character.getCharNameByUserId(interaction.user.id);
    }
    const characterSheet = await Character.getCharacter(characterName);
    const stats = await Character.getStats(characterName);
    const calculatedXp = calculateLevel(characterSheet.experience);
    const feats = await displayFeats(characterSheet.character_id);
    const level = Number(calculatedXp);
    return interaction.reply(`
        ${characterName}, level ${level} ${characterSheet.race} ${characterSheet.class}.
        Proficiency bonus: ${Math.floor((level / 4) + 2)}
        Background: ${characterSheet.background}
        Dexterity: ${stats.dexterity}
        Strength: ${stats.strength}
        Constitution: ${stats.constitution}
        Intelligence: ${stats.intelligence}
        Wisdom: ${stats.wisdom}
        Charisma: ${stats.charisma}
        Feats: ${feats}
        Inventory: ${characterSheet.inventory}
        Does ${characterSheet.darkvision ? null : 'not'} have darkvision
        Attacks: 
            Unarmed: 1d20+${getStatMod(stats.strength)} / 1 Bludgeoning
            
    `);//${displayAttacks(characterSheet.inventory.weapons)}
  },
};

