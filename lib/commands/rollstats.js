const { SlashCommandBuilder } = require('@discordjs/builders');
const { statRoller } = require('../utils/roller');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rollstats')
    .setDescription('Generates 6 scores to assign to abilities'),

  async execute(interaction) {
    return interaction.reply(`rolled ${statRoller().join(', ')}`);
  } };


