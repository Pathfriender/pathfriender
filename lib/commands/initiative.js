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
    // await interaction.reply('test');
    const players = [];

    players[0] = interaction.options.getString('character1');
    players[1] = interaction.options.getString('character2');
    players[2] = interaction.options.getString('character3');
    players[3] = interaction.options.getString('character4');
    players[4] = interaction.options.getString('character5');
    players[5] = interaction.options.getString('character6');
    
    const playersDex = [];
    const playersDexMod = [];
    const playerResults = [];

    for (let i = 0; i < players.length; i++) {
      const playerDexNum = await Character.getDex(players[i]);
      playersDex[i] = playerDexNum;
      for (let i = 0; i < playersDex.length; i++) {
        const playerDexModNum = Math.floor((playersDex[i] - 10) / 2);
        playersDexMod[i] = playerDexModNum;
      }
    }

    for (let i = 0; i < players.length; i++) {
      const playerRoll = playerInitRoller();
      playerResults[i] = playerRoll;
    }

    // function returnFunction(i) {
    //   console.log(playerResults[i]);
    //   return interaction.followUp({ 
    //     content: `${players[i]} rolled: 
    //     ${playerResults[i]} + init: 
    //     ${playersDexMod[i]},` }
    //   );
    // }

    // players.forEach(returnFunction());
    
    return interaction.reply({ content: 
      `initiative in no particular order: 
      ${players[0]} rolled: ${playerResults[0]} + init: ${playersDexMod[0]}, 
      ${players[1]} rolled: ${playerResults[1]} + init: ${playersDexMod[1]}` });
  } 
};


