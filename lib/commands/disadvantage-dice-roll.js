const { SlashCommandBuilder } = require('@discordjs/builders');
const { disadvantageRoller } = require('../utils/disadvantage-roller.js');

module.exports = { 
  data: new SlashCommandBuilder()
    .setName('disadvantageroll')
    .setDescription('Throws some dice, wItH DISaDvAnTaGe'),
  async execute(interaction) {
    
    let diceResults = disadvantageRoller(20, 1);
    diceResults = diceResults.join(', ');
    return interaction.reply(`rolled ${diceResults}`);
  } };
