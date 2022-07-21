
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCharNameByUserId } = require('../models/Character');
const Character = require('../models/Character');
const { calculateLevel } = require('../utils/calculateLevel.js');
const { displayFeats } = require('../utils/displayFeats.js');
// const { displayAttacks } = require('../utils/displayAttacks.js');
const { getStatMod } = require('../utils/getStatMod.js');

//Displays the user's character sheet, or someone else's with an optional argument
// this should print out something like 
// (character name), (character level) (character race) (character class).
// Proficiency bonus: (proficiency bonus: derived from the character's level)
// Background: (character background)
// Strength: 4 (strength number)
// Dexterity: 18 (dexterity number)
// Constitution: 10 (constitution number)
// Intelligence: 18 (intelligence number)
// Wisdom: 3  (wisdom number)
// Charisma: 15 (charisma number)
// Feats: Fire Resistance (list of the names of the features the character has)
// Inventory:  (a list of items in their inventory )
// Darkvision (whether the character can see in the dark or not)
// Attacks: (attacks with modifiers)
//     Unarmed: 1d20+-3 / 1  Bludgeoning
//Monks have a feature that makes them much better at unarmed strikes, so there are ternaries to make it be better if the character is a monk
module.exports = {
  data: new SlashCommandBuilder()
    .setName('charactersheet')
    .setDescription('Displays all your character information')
    .addStringOption(option => option
      .setName('charactername')
      .setDescription('name of character to get sheet for (blank if you)')),
  async execute(interaction) {
    let characterName = interaction.getString('charactername');
    if (characterName === null) {
      characterName = await getCharNameByUserId(interaction.user.id);
      //check if the user has a character first
      if (characterName === null) {
        return interaction.reply('You don\'t have a character.');
      }
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

