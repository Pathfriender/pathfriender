const { SlashCommandBuilder } = require('@discordjs/builders');
const { playerInitRoller } = require('../utils/roller.js');
const Character = require('../models/Character.js');
const { getStatMod } = require('../utils/getStatMod.js');



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
    await interaction.reply('test');
    const players = [];

    players[0] = interaction.options.getString('character1');
    players[1] = interaction.options.getString('character2');
    if (interaction.options.getString('character3') !== null) {
      players.push(interaction.options.getString('character3'));
    }
    if (interaction.options.getString('character4') !== null) {
      players.push(interaction.options.getString('character4'));
    }
    if (interaction.options.getString('character5') !== null) {
      players.push(interaction.options.getString('character5'));
    }
    if (interaction.options.getString('character6') !== null) {
      players.push(interaction.options.getString('character6'));
    }
    
    const playersDex = [];
    const playersDexMod = [];
    const playerResults = [];

    for (let i = 0; i < players.length; i++) {
      const playerRoll = playerInitRoller();
      playerResults[i] = playerRoll;
      const playerStats = await Character.getStats(players[i]);
      const playerDexNum = playerStats.dexterity;
      playersDex[i] = playerDexNum;
      for (let i = 0; i < playersDex.length; i++) {
        const playerDexModNum = getStatMod(playerDexNum);
        playersDexMod[i] = playerDexModNum;
      }
    }

    function returnFunction(i) {
      const finalRoll = (Number(playerResults[i]) + Number(playersDexMod[i]));
      return interaction.followUp({ 
        content: `${players[i]} rolled: 
        ${playerResults[i]} + ${playersDexMod[i]} = ${finalRoll}` }
      );
    }

    for (let i = 0; i < players.length; i++) {
      returnFunction(i);
    }
    
  } 
};
