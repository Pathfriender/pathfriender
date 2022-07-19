
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character');
const { calculateLevel } = require('../utils/calculateLevel.js');
const { displayFeats } = require('../utils/displayFeats.js');
const { displayAttacks } = require('../utils/displayAttacks.js');
const { getStatMod } = require('../utils/getStatMod.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('charactersheet')
    .setDescription('Displays all your character information')
    .addStringOption(option => option
      .setName('charactername')
      .setDescription('name of character to get sheet for (blank if you)')),
  async execute(interaction) {
    // name, class, race, level, xp, proficiency, feats, inventory,
    let characterName = interaction.options.getString('charactername');
    if (characterName === null) {
      characterName = await Character.getCharNameByUserId(interaction.user.id);
    }
    const characterSheet = await Character.getCharacter(characterName);
    const stats = await Character.getStats(characterName);
    const calculatedXp = calculateLevel(characterSheet.experience);
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
        Feats: ${displayFeats(characterSheet.feats)}
        Inventory: ${characterSheet.inventory}
        Attacks: 
            Unarmed: 1d20+${getStatMod(stats.strength)} / 1 Bludgeoning
            
    `);//${displayAttacks(characterSheet.inventory.weapons)}
  },
};

