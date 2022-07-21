const { SlashCommandBuilder } = require('@discordjs/builders');
const { roller, sum } = require('../utils/roller.js');

//when /dice is used in discord the user will be asked to input the number the number of sides of the dice
// The bot then prints out out what was rolled and the sum of the numbers. 3d6 should print out 3 numbers between 1 and 6
// and a total between 3 and 18
module.exports = {
  data: new SlashCommandBuilder()
    .setName('dice')
    .setDescription('Throws some dice')
    .addNumberOption((options) => 
      options
        .setName('sides')
        .setDescription('Number of sides on the dice')
        .setRequired(true)  
    ) 
    .addNumberOption((options) => 
      options
        .setName('amount')
        .setDescription('How many dice?')
        .setRequired(true)
    )
    .addNumberOption((options) => 
      options
        .setName('bonus')
        .setDescription('if you have a bonus or penalty')
    ),

  async execute(interaction) {
    const dieSides = interaction.options.getNumber('sides');
    const numOfDie = interaction.options.getNumber('amount');
    const args = interaction.options.getNumber('bonus');
    
    let diceResults = roller(dieSides, numOfDie);
    const diceSum = sum(diceResults) + args;
    diceResults = diceResults.join(', ');
    return interaction.reply(`rolled ${diceResults} = ${diceSum}`);
  } };


