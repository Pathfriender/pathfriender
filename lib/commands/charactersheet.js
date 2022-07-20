
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character');
const { calculateLevel } = require('../utils/calculateLevel.js');
const { displayFeats } = require('../utils/displayFeats.js');
// const { displayAttacks } = require('../utils/displayAttacks.js');
const { getStatMod } = require('../utils/getStatMod.js');

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
    const proficiency = Math.floor((level / 4) + 2);
    return interaction.reply(`
        ${characterName}, level ${level} ${characterSheet.race} ${characterSheet.class}.
        Proficiency bonus: ${proficiency}
        Background: ${characterSheet.background}
        Strength: ${stats.strength}
        Dexterity: ${stats.dexterity}
        Constitution: ${stats.constitution}
        Intelligence: ${stats.intelligence}
        Wisdom: ${stats.wisdom}
        Charisma: ${stats.charisma}
        Feats: ${feats}
        Inventory: ${characterSheet.inventory}
        ${characterSheet.darkvision ? 'Has darkvision' : 'Does not have darkvision'}
        Attacks: 
            Unarmed: 1d20+${(characterSheet.class === 'Monk' ? ((Math.max(getStatMod(stats.strength), getStatMod(stats.dexterity)) + proficiency)) : getStatMod(stats.strength)) } / ${(characterSheet.class === 'Monk') ? '1d' + (Math.ceil((level + 8) / 6) * 2) : 1} ${(characterSheet.class === 'Monk') ? ('+ ' + getStatMod(stats.wisdom)) : ''} Bludgeoning
    `);//${displayAttacks(characterSheet.inventory.weapons)}
  },
};

