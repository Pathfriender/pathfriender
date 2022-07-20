const { SlashCommandBuilder } = require('@discordjs/builders');
const { advantageRoller } = require('../utils/advantage-roller.js');

//uses /advantageroll to call our advantage roller utility function. This does selects 2 random numbers between 1 and 20
// displays both of them while crossing out the lower number and bolding the hirer number.
module.exports = { 
  data: new SlashCommandBuilder()
    .setName('advantageroll')
    .setDescription('Throws some dice, wItH aDvAnTaGe'),

  async execute(interaction) {
    const diceResults = advantageRoller(20, 1);
    return interaction.reply(`rolled ~~${diceResults[0]}~~, **${diceResults[1]}**`);
  } };

