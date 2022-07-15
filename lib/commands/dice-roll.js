const { SlashCommandBuilder } = require('@discordjs/builders');
const { roller, sum } = require('../utils/roller.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Throws some dice')
    .addNumberOption((options) => 
      options
        .setName('sides')
        .setDescription('number of sides on the dice')
        .setRequired(true)  
    ) 
    .addNumberOption((options) => 
      options
        .setName('amount')
        .setDescription('number of dice to roll')
        .setRequired(true)
    )
    .addStringOption((options) => 
      options
        .setName('arguments')
        .setDescription('additional arguments (drop X, add Y, etc')
    ),

  async execute(interaction) {
    const dieSides = interaction.options.getNumber('sides');
    const numOfDie = interaction.options.getNumber('amount');
    
    let diceResults = roller(dieSides, numOfDie);
    const diceSum = sum(diceResults);
    diceResults = diceResults.join(', ');
    return interaction.reply(`rolled ${diceResults} = ${diceSum}`);
  } };


