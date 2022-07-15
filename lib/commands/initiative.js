const { SlashCommandBuilder } = require('@discordjs/builders');
const { playerInitRoller, sum } = require('../utils/roller.js');
const Character = require('../models/Character.js');

module.exports = {
  data: new SlashCommandBuilder()

    .setName('initiative')
    .setDescription('Roll for initiative!')
    .addNumberOption((options) => 
      options
        .setName('combatants')
        .setDescription('number of parties in the encounter')
        .setRequired(true)  
    ) 
    .addStringOption((options) => 
      options
        .setName('character1')
        .setDescription('first player char in the encounter')
        .setRequired(true)  
    ) 
    .addStringOption((options) => 
      options
        .setName('character2')
        .setDescription('second player char in the encounter')
        .setRequired(true)  
    ) 
    .addStringOption((options) => 
      options
        .setName('character3')
        .setDescription('third player char in the encounter')
    ) 
    .addStringOption((options) => 
      options
        .setName('character4')
        .setDescription('fourth player char in the encounter')
    ) 
    .addStringOption((options) => 
      options
        .setName('character5')
        .setDescription('fifth player char in the encounter')
    ) 
    .addStringOption((options) => 
      options
        .setName('character6')
        .setDescription('sixth player char in the encounter')
    ), 

  async execute(interaction) {

    const fighters = interaction.options.getNumber('combatants');
    const playerOne = interaction.options.getString('character1');
    const playerTwo = interaction.options.getString('character2');
    const playerThree = interaction.options.getString('character3');
    const playerFour = interaction.options.getString('character4');
    const playerFive = interaction.options.getString('character5');
    const playerSix = interaction.options.getString('character6');
    
    const playerOneDex = await Character.getDex(playerOne);
    const playerTwoDex = await Character.getDex(playerTwo);
    const playerThreeDex = await Character.getDex(playerThree);
    const playerFourDex = await Character.getDex(playerFour);
    const playerFiveDex = await Character.getDex(playerFive);
    const playerSixDex = await Character.getDex(playerSix);

    const playerOneDexmod = await Math.floor((playerOneDex - 10) / 2);
    const playerTwoDexmod = await Math.floor((playerTwoDex - 10) / 2);
    const playerThreeDexmod = await Math.floor((playerThreeDex - 10) / 2);
    const playerFourDexmod = await Math.floor((playerFourDex - 10) / 2);
    const playerFiveDexmod = await Math.floor((playerFiveDex - 10) / 2);
    const playerSixDexmod = await Math.floor((playerSixDex - 10) / 2);
    
    let diceResults = playerInitRoller(fighters);

    // const diceSum = diceResults) + dexMod;
    
    diceResults = diceResults.join(', ');
    
    return interaction.reply({ content: 
    `initiative in no particular order: ${playerOne} 
    rolled: ${diceResults} + init: ${playerOneDexmod}` });

  } };


