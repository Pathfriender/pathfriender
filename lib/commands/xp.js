const { SlashCommandBuilder } = require('@discordjs/builders');
const { getCharNameByUserId, addXp, getXp, } = require('../models/Character.js');
const { calculateLevel } = require('../utils/calculateLevel.js');

module.exports = {
  
  data: new SlashCommandBuilder()
    .setName('xp')
    .setDescription('add experience to your character. only if the DM tells you to. >:(')
    .addNumberOption((options) => 
      options
        .setName('xp')
        .setDescription('xp to add')
        .setRequired(true)  
    ),

  async execute(interaction) {
    const charName = await getCharNameByUserId(interaction.user.id);
    const prevXp = await getXp(charName);
    const numberPrevXp = Number(prevXp);
    const prevLevel = calculateLevel(numberPrevXp);
    const xpToAdd = interaction.options.getNumber('xp');
    const currXp = await addXp(charName, xpToAdd);
    const numberCurrXp = Number(currXp);
    const currLevel = calculateLevel(numberCurrXp);
    const levelledUp = (currLevel > prevLevel);
    if (levelledUp) {
      return interaction.reply(`${charName} levelled up to ${currLevel}! Current xp: ${currXp}`);
    } else {
      return interaction.reply(`${charName} gained ${xpToAdd} experience. Current xp: ${currXp}`);
    }
  } 
};
