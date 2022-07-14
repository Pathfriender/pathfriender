const { SlashCommandBuilder } = require('@discordjs/builders');
const roller = require('../utils/roller.js');

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
    const args = interaction.options.getString('arguments'); //for example, 'k1' 'd3' like if you roll stats you 4d6d1
    
    let diceResults = roller(dieSides, numOfDie);
    diceResults = diceResults.join(', ');
    return interaction.reply(`rolled ${diceResults}`);
  } };
