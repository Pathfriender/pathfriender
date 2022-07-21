
const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCharNameByUserId } = require('../models/Character.js');
// when user types /getcharactername in discord 
//calls the character class and uses it to fetch the character name by user id. Should print 
//"Hello (username) you are playing (character-name). Sick build bro"
module.exports = {
  data: new SlashCommandBuilder()
    .setName('getcharactername')
    .setDescription('Gets the name of the character associated with your account'),
  async execute(interaction) {
    const character_name = await getCharNameByUserId(interaction.user.id);
    //can't delete something that isn't there so we make sure the user has a character first
    if (character_name === null) {
      return interaction.reply('You have no character.');
    }
    return interaction.reply(`Hello ${interaction.user.username}. You are playing ${(character_name)}. Sick build bro`);
  },
};
