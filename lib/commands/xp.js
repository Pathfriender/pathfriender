const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCharNameByUserId, addXp, getXp } = require('../models/Character.js');
const { calculateLevel } = require('../utils/calculateLevel.js');

module.exports = {
  
  data: new SlashCommandBuilder()
    .setName('xp')
    .setDescription('Add experience to your character. Only if the DM tells you to. >:(')
    .addNumberOption((options) => 
      options
        .setName('xp')
        .setDescription('xp to add')
        .setRequired(true)  
    ),

  async execute(interaction) {
    const charName = await getCharNameByUserId(interaction.user.id);
    //making sure the command has a character to go to
    if (charName === null) {
      return interaction.reply('Enter or make a character.');
    }
    //23-26: get your old xp, find out what level that means, and track that previous level
    const prevXp = await getXp(charName);
    const numberPrevXp = Number(prevXp);
    const prevLevel = calculateLevel(numberPrevXp);
    const xpToAdd = interaction.options.getNumber('xp');
    //add the passed in amount of xp to the previous amount of xp
    const currXp = await addXp(charName, xpToAdd);
    //31-33: calculate your new level from the new amount of xp
    const numberCurrXp = Number(currXp);
    const currLevel = calculateLevel(numberCurrXp);
    //if your level is higher once you put the xp in, you've levelled up
    const levelledUp = (currLevel > prevLevel);
    if (levelledUp) {
      return interaction.reply(`${charName} levelled up to ${currLevel}! Current xp: ${currXp}`);
    } else {
      return interaction.reply(`${charName} gained ${xpToAdd} experience. Current xp: ${currXp}`);
    }
  } 
};
