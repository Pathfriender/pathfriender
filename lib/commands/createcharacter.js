
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createcharacter')
    .setDescription('Creates a character with the given information'),
  async execute(interaction) {
    const stats = { dexterity: 14, strength: 20, intelligence: 14, constitution: 6, wisdom: 13, charisma: 11 };
    //make this roll randomly?
    const character_name = 'jimbo the test clown';
    //check for text entry
    const character_class = 'fighter';
    //check for text entry. also check on class table
    const race = 'human';
    //check for text entry. also check on class table
    const character = { character_name, xp: 0, character_class, race, stats };
    await Character.makeCharacter(interaction.user.id, character);
    return interaction.reply(`you have now created ${character_name} the ${race} ${character_class}. nice`);
  },
};
