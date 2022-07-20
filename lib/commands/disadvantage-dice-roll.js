const { SlashCommandBuilder } = require('@discordjs/builders');
const { disadvantageRoller } = require('../utils/disadvantage-roller.js');

module.exports = { 
  data: new SlashCommandBuilder()
    .setName('disadvantageroll')
    .setDescription('Throws some dice, wItH DISaDvAnTaGe'),
  async execute(interaction) {
    
    const diceResults = disadvantageRoller(20, 1);
    return interaction.reply(`rolled ~~${diceResults[0]}~~, **${diceResults[1]}**`);
  } };
