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
      //can't get an inventory without a character
      if (charName === null) {
        return interaction.reply('Select or make a character to get their inventory.');
      }
    }
    const inventory = await getInventory(charName);
    console.log('inventory', inventory);
    const inventoryArray = inventory.split(', ');
    console.log('inventoryArray', inventoryArray);
    const detailedArray = [];
    for (let i = 0; i < inventoryArray.length; i++) {
      let temp = await getItemDescription(inventoryArray[i]);
      if (temp === undefined) {
        temp = inventoryArray[i];
      }
      console.log('temp', temp);
      detailedArray.push(temp);
    }
    console.log('detailedArray', detailedArray);
    await interaction.reply(`Inventory of ${charName}`);
    for (let i = 0; i < detailedArray.length; i++) {
      console.log('detailed at i:', detailedArray[i]);
      if (detailedArray[i].name === undefined) {
        await interaction.followUp({ content: `${detailedArray[i]}: No information available` });
      } else {
        const displayArray = [];
        const linkName = ('https://roll20.net/compendium/dnd5e/' + (detailedArray[i].name.split(' ').join('%20')));
        const temp = (detailedArray[i].name + '\r\n' + detailedArray[i].type + '\r\n' + linkName + '\r\n' + 'Rarity: ' + detailedArray[i].rarity + '\r\n' +  (detailedArray[i].requires_attunement === null ? 'does not require attunement' : 'requires attunement'));
        displayArray.push(temp);
        await interaction.followUp({ content: `${displayArray}` });
      }
    }
  } };
