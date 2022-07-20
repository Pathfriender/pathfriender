const { SlashCommandBuilder } = require('@discordjs/builders');
const { statRoller } = require('../utils/roller');

// when /rollstats is enter into discord the stat roller utilis is called. This prints an array of 6 numbers
// this numbers are create by the sum of 4 random numbers between 1 and 6. The lowest of the 4 numbers is then dropped
// and the remaining 3 numbers are added together. If you have questions look at the statRoller utility. 
module.exports = {
  data: new SlashCommandBuilder()
    .setName('rollstats')
    .setDescription('Generates 6 scores to assign to abilities'),

  async execute(interaction) {
    return interaction.reply(`rolled ${statRoller().join(', ')}`);
  } };


