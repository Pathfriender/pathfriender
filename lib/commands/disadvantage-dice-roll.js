const { SlashCommandBuilder } = require('@discordjs/builders');
const { disadvantageRoller } = require('../utils/disadvantage-roller.js');
//when /disadvantageroll is typed into discord 2 numbers between 1 and 20 will be printed out 
//the higher of the two numbers will be crossed out and the lower will be bolded. 
//this uses our disadvantageRoller utility. 
module.exports = { 
  data: new SlashCommandBuilder()
    .setName('disadvantageroll')
    .setDescription('Throws some dice, wItH DISaDvAnTaGe'),
  async execute(interaction) {
    
    const diceResults = disadvantageRoller(20, 1);
    return interaction.reply(`rolled ~~${diceResults[0]}~~, **${diceResults[1]}**`);
  } };
