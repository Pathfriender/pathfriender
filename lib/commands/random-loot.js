const { SlashCommandBuilder } = require('@discordjs/builders');
const MagicItem = require('../models/Magic-item');
const { magItGen } = require('../utils/itemValues.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loot')
    .setDescription('specify the amount and type of random loot you want')
    .addNumberOption((options) => 
      options
        .setName('magic-item')
        .setDescription('number of magic items in the loot pile')
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
    const numOfMagIt = interaction.options.getNumber('MagicItemAmount');
        
    const magItSearch = magItGen(numOfMagIt);
    const magItResults = MagicItem.getRandomMagicItemsbyId(magItSearch);
    // const diceSum = sum(diceResults) + args;
    // diceResults = diceResults.join(', ');
    return interaction.reply({ content: `You find: ${magItResults}`, ephemeral: true });
  } };
    

