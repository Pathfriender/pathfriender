const { SlashCommandBuilder } = require('@discordjs/builders');
const { roller } = require('../utils/roller');


// If the user the command /beaver a random number is select between 1 and 100 if the number is 95 or higher it sends the message
//of 'You roll a ${diceResults}. By Tempus's thunder! A mighty beaver!' with a picture. Anything below 95 user receives message
//`You roll a ${diceResults}. No beavers lurk nearby.`
module.exports = { 
  data: new SlashCommandBuilder()
    .setName('beaver')
    .setDescription('Any large beavers nearby?'),
  async execute(interaction) {
    const diceResults = roller(100, 1);
    if(diceResults >= 95){
      await interaction.reply({ content: `You roll a ${diceResults}. By Tempus's thunder! A mighty beaver!` });
      return interaction.followUp({ content:'https://static.wikia.nocookie.net/monsterhunter/images/d/dd/MHO-Caeserber_Render_001.png/revision/latest/scale-to-width-down/1200?cb=20150501001551' });
    } else {
      return interaction.reply(`You roll a ${diceResults}. No beavers lurk nearby.`);
    }
  } };
