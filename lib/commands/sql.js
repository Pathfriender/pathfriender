
const { SlashCommandBuilder } = require('@discordjs/builders');
const Sql = require('../models/Sql.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sql')
    .setDescription('lemme test in peace'),
  async execute(interaction) {
    return interaction.reply(`${await Sql.getValue(1)}. but also, ${await Sql.getValue(2)}`);
  },
};
