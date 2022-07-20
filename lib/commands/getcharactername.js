
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');
// when user types /getcharactername in discord 
//calls the character class and uses it to fetch the character name by user id. Should print 
//Hello (username) you are playing (charcter-name). Sick build bro.
module.exports = {
  data: new SlashCommandBuilder()
    .setName('getcharactername')
    .setDescription('Gets the name of the character associated with your account'),
  async execute(interaction) {
    const character_name = await Character.getCharNameByUserId(interaction.user.id);
    //TODO: not break if you don't have a character
    return interaction.reply(`Hello ${interaction.user.username}. You are playing ${(character_name)}. Sick build bro`);
  },
};
