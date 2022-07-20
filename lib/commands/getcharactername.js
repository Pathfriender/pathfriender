
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('getcharactername')
    .setDescription('Gets the name of the character associated with your account'),
  async execute(interaction) {
    const character_name = await Character.getCharNameByUserId(interaction.user.id);
    //TODO: not break if you don't have a character
    return interaction.reply(`hello ${interaction.user.username}. you are playing ${(character_name)}. sick build bro`);
  },
};
