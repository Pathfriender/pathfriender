const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');
const { getCharNameByUserId } = require('../models/Character.js');
const Skill = require('../models/Skill.js');
const { roller } = require('../utils/roller.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Throws some dice')
    .addStringOption((options) => 
      options
        .setName('skill')
        .setDescription('choose what skill you\'re rolling')
        .setRequired(true)  
    ) 
    .addStringOption((options) => 
      options
        .setName('character-name')
        .setDescription('who are you rolling for? (empty if yourself)')
    ),

  async execute(interaction) {
    const skill = interaction.options.getString('skill');
    let char_name = interaction.options.getString('character-name');
    if (char_name === null) {
      char_name = await getCharNameByUserId(interaction.user.id);
    }
    const charStats = await Character.getStats(char_name); // { dex: ... str: ...}
    console.log(skill, char_name, charStats);
    const bonus = await Skill.getSkillBonus(charStats);
    console.log(skill, char_name);
    console.log('good luck lmao');
    console.log(charStats, bonus);
    const roll = (roller(20, 1) + bonus);
    return interaction.reply(`rolling ${skill}: ${char_name} got a ${roll}`);
  } };


