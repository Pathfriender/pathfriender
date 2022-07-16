const { SlashCommandBuilder } = require('@discordjs/builders');
const { playerInitRoller } = require('../utils/roller.js');
const Character = require('../models/Character.js');

module.exports = {
  data: new SlashCommandBuilder()

    .setName('initiative')
    .setDescription('Roll for initiative!')
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

    const players = [];

    players[0] = interaction.options.getString('character1');
    players[1] = interaction.options.getString('character2');
    players[2] = interaction.options.getString('character3');
    players[3] = interaction.options.getString('character4');
    players[4] = interaction.options.getString('character5');
    players[5] = interaction.options.getString('character6');
    
    const playersDex = [];

    playersDex[0] = await Character.getDex(players[0]);
    playersDex[1] = await Character.getDex(players[1]);
    playersDex[2] = await Character.getDex(players[2]);
    playersDex[3] = await Character.getDex(players[3]);
    playersDex[4] = await Character.getDex(players[4]);
    playersDex[5] = await Character.getDex(players[5]);

    const playersDexMod = [];

    playersDexMod[0] = await Math.floor((playersDex[0] - 10) / 2);
    playersDexMod[1] = await Math.floor((playersDex[1] - 10) / 2);
    playersDexMod[2] = await Math.floor((playersDex[2] - 10) / 2);
    playersDexMod[3] = await Math.floor((playersDex[3] - 10) / 2);
    playersDexMod[4] = await Math.floor((playersDex[4] - 10) / 2);
    playersDexMod[5] = await Math.floor((playersDex[5] - 10) / 2);

    const playerResults = [];

    for (let i = 0; i < players; i++) {
      const playerRoll = playerInitRoller();
      playerResults[i] = playerRoll;
    }

    if (players[2] === null 
        && players[3] === null 
        && players[4] === null 
        && players[5] === null) 
    { return interaction.reply({ content: 
    `initiative in no particular order: 
    ${players[0]} rolled: ${playerResults[0]} + init: ${playersDexMod[0]}, 
    ${players[1]} rolled: ${playerResults[1]} + init: ${playersDexMod[1]}`, ephemeral: true });
    }

  } };


