const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCharNameByUserId } = require('../models/Character');
const { getInventory } = require('../utils/getInventory');
const { getItemDescription } = require('../utils/getItemDescription');

module.exports = { 
  data: new SlashCommandBuilder()
    .setName('inventory')
    .setDescription('displays detailed information about all your items')
    .addStringOption(option => option
      .setName('charactername')
      .setDescription('name of character to add an item for (blank if you)')),
  async execute(interaction) {
    let charName = interaction.options.getString('charactername');
    if (charName === null) {
      charName = await getCharNameByUserId(interaction.user.id);
    }
    const inventory = await getInventory(charName);
    const inventoryArray = inventory.split(', ');
    const detailedArray = [];
    for (let i = 0; i < inventoryArray.length; i++) {
      let temp = await getItemDescription(inventoryArray[i]);
      if (temp === undefined) {
        temp = 'No information available.';
      }
      detailedArray.push(temp);
    }
    await interaction.reply(`Inventory of ${charName}`);
    for (let i = 0; i < detailedArray.length; i++) {
      const displayArray = [];
      const temp = (detailedArray[i].name + '\r\n' + detailedArray[i].type + '\r\n' + detailedArray[i].description + '\r\n' + 'Rarity: ' + detailedArray[i].rarity + '\r\n' +  detailedArray[i].requires_attunement);
      displayArray.push(temp);
      await interaction.followUp({ content: `${displayArray}` });
    }
  } };
