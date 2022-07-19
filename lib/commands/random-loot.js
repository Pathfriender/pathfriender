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
    // const numOfArmor = interaction.options.getNumber('Armor Amount');
    // const numOfWep = interaction.options.getNumber('Weapon Amount');
    const numOfMagIt = interaction.options.getNumber('magic-item-amount');
        
    const magItSearch = magItGen(numOfMagIt);

    console.log(magItSearch, 'the result received');

    const magItResults = await MagicItem.getRandomMagicItemsbyId(magItSearch);

    console.log(magItResults, 'the results');

    return interaction.reply({ content: `You find: ${magItResults}`, ephemeral: true });
  } };
    

