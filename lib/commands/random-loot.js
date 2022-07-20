const { SlashCommandBuilder } = require('@discordjs/builders');
const MagicItem = require('../models/Magic-item');
const { magItGen } = require('../utils/itemValues.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loot')
    .setDescription('specify the amount and type of random loot you want')
    .addNumberOption((options) => 
      options
        .setName('magic-item-amount')
        .setDescription('number')
        .setRequired(true)  
    ) 

    .addNumberOption((options) => 
      options
        .setName('armor-amount')
        .setDescription('amount of armor in the loot pile')
      //.setRequired(true)
    )

    .addNumberOption((options) => 
      options
        .setName('weapon-amount')
        .setDescription('number of weapons in the loot pile')
      //.setRequired(true)
    ),


  async execute(interaction) {
    await interaction.reply({ content: 'test', ephemeral: true });
    // const numOfArmor = interaction.options.getNumber('armor-amount');
    // const numOfWep = interaction.options.getNumber('weapon-amount');
    const numOfMagIt = interaction.options.getNumber('magic-item-amount');
    
    const magItSearch = magItGen(numOfMagIt);

    const magItResults = [];
    for (let i = 0; i < magItSearch.length; i++) {
      magItResults.push(await MagicItem.getRandomMagicItembyId(magItSearch[i]));
    }

    return interaction.followUp({ content: `You find magic item(s): ${magItResults}, `, ephemeral: true });
  } };
    

