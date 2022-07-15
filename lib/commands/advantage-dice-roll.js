const { SlashCommandBuilder } = require('@discordjs/builders');
const { advantageRoller } = require('../utils/advantage-roller.js');

module.exports = { 
  data: new SlashCommandBuilder()
    .setName('advantageroll')
    .setDescription('Throws some dice, wItH aDvAnTaGe'),
  async execute(interaction) {
    
    let diceResults = advantageRoller(20, 1);
    diceResults = diceResults.join(', ');
    return interaction.reply(`rolled ${diceResults}`);
  } };

