const { SlashCommandBuilder } = require('@discordjs/builders');
const { roller } = require('../utils/roller');

module.exports = { 
  data: new SlashCommandBuilder()
    .setName('beaver')
    .setDescription('Any large beavers nearby?'),
  async execute(interaction) {
    const diceResults = roller(100, 1);
    if(diceResults >= 95){
      return interaction.reply(`You roll a ${diceResults}, THERE IS a mighty beaver nearby!`);
    } else {
      return interaction.reply(`You roll a ${diceResults}, no beavers lurk nearby.`);
    }
  } };
