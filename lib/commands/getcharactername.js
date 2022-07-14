
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('getcharactername')
    .setDescription('Gets the name of the character associated with your account'),
  async execute(interaction) {
    const character_id = await Character.getCharNameByUserId(interaction.user.id);
    return interaction.reply(`hello ${interaction.user.username}. you are playing ${await Character.getName(character_id)}. sick build bro`);
  },
};
