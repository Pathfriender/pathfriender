const { SlashCommandBuilder } = require('@discordjs/builders');
const { advantageRoller } = require('../utils/advantage-roller.js');

module.exports = { 
  data: new SlashCommandBuilder()
    .setName('advantageroll')
    .setDescription('Throws some dice, wItH aDvAnTaGe'),
  async execute(interaction) {
    
    const diceResults = advantageRoller(20, 1);
    return interaction.reply(`rolled ~~${diceResults[0]}~~, **${diceResults[1]}**`);
  } };

