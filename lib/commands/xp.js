const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCharNameByUserId, addXp } = require('../models/Character.js');
const Character = require('../models/Character.js');

module.exports = {
  
  data: new SlashCommandBuilder()
    .setName('xp')
    .setDescription('add de xp')
    .addNumberOption((options) => 
      options
        .setName('xp')
        .setDescription('xp to add')
        .setRequired(true)  
    ),

  async execute(interaction) {
    const charName = await getCharNameByUserId(interaction.user.id);
    console.log(charName);
    const xpToAdd = interaction.options.getNumber('xp');
    await addXp(charName, xpToAdd);
    await interaction.reply('test');
    
  } 
};
