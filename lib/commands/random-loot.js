const { SlashCommandBuilder } = require('@discordjs/builders');
const MagicItem = require('../models/Magic-item');
const { magItGen } = require('../utils/itemValues.js');
const { armorGen } = require('../utils/itemValues.js');
const { weaponGen } = require('../utils/itemValues.js');
const Armor = require('../models/Armor');
const Weapon = require('../models/Weapon');

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
        .setRequired(true)
    )

    .addNumberOption((options) => 
      options
        .setName('weapon-amount')
        .setDescription('number of weapons in the loot pile')
        .setRequired(true)
    ),


  async execute(interaction) {
    await interaction.reply({ content: 'test', ephemeral: true });
    const numOfMagIt = interaction.options.getNumber('magic-item-amount');
    const numOfArmor = interaction.options.getNumber('armor-amount');
    const numOfWep = interaction.options.getNumber('weapon-amount');
    
    const magItSearch = magItGen(numOfMagIt);
    const armorSearch = armorGen(numOfArmor);
    const weaponSearch = weaponGen(numOfWep);
    
    const magItResults = [];
    for (let i = 0; i < magItSearch.length; i++) {
      magItResults.push(await MagicItem.getRandomMagicItemById(magItSearch[i]));
    }

    const armorResults = [];
    for (let i = 0; i < armorSearch.length; i++) {
      armorResults.push(await Armor.getRandomArmorById(armorSearch[i]));
    }
    
    const weaponResults = [];
    for (let i = 0; i < weaponSearch.length; i++) {
      weaponResults.push(await Weapon.getRandomWeaponById(weaponSearch[i]));
    }

    return interaction.followUp({ content: 
        `You find these magic item(s): ${magItResults}, 
        and these pieces of armor: ${armorResults}, 
        and these weapons: ${weaponResults} `, 
    ephemeral: true });
  } };
    

