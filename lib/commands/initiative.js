const { SlashCommandBuilder } = require('@discordjs/builders');
const { playerInitRoller } = require('../utils/roller.js');

module.exports = {
  data: new SlashCommandBuilder()

    .setName('initiative')
    .setDescription('Roll for initiative!')
    .addNumberOption((options) => 
      options
        .setName('combatants')
        .setDescription('number of parties in the encounter')
        .setRequired(true)  
    ), 

  async execute(interaction) {

    const fighters = interaction.options.getNumber('combatants');
    
    let diceResults = playerInitRoller(fighters);

    //const diceSum = sum(diceResults) + dexMod;
    
    diceResults = diceResults.join(', ');
    
    return interaction.reply(`initiative in no particular order: ${diceResults}`);

  } };


