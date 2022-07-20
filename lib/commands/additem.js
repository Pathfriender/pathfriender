const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCharNameByUserId } = require('../models/Character');
const { addToInventory } = require('../models/Magic-item');

module.exports = { 
  data: new SlashCommandBuilder()
    .setName('additem')
    .setDescription('give youself an item. or someone else.')
    .addStringOption(option => option
      .setName('item')
      .setDescription('name of the item you got (spell it right pls ty)')
      .setRequired(true))
    .addStringOption(option => option
      .setName('charactername')
      .setDescription('name of character to add an item for (blank if you)')),
  async execute(interaction) {
    const itemName = interaction.options.getString('item');
    let charName = interaction.options.getString('charactername');
    if (charName === null) {
      charName = await getCharNameByUserId(interaction.user.id);
    }
    await addToInventory(itemName, charName);
    await interaction.reply('added ' + itemName);
    //!inventory should give name, description, type, rarity, attunement
  } };
