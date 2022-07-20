const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');
const { getCharNameByUserId } = require('../models/Character.js');
const Skill = require('../models/Skill.js');
const { roller } = require('../utils/roller.js');
// when the command /roll skill is entered it will choose a random number between 1 and 20 
// after the number it was chosen it will look at the skills table and the character stats
// printing out the number with the modified character stat 
module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Throws some dice')
    .addStringOption((options) => 
      options
        .setName('skill')
        .setDescription('Choose what skill you\'re rolling')
        .setRequired(true)  
    ) 
    .addStringOption((options) => 
      options
        .setName('character-name')
        .setDescription('Who are you rolling for? (leave empty if it is yourself)')
    ),

  async execute(interaction) {
    const skill = interaction.options.getString('skill');
    let char_name = interaction.options.getString('character-name');
    if (char_name === null) {
      char_name = await getCharNameByUserId(interaction.user.id);
    }
    const charStats = await Character.getStats(char_name);
    const bonus = await Skill.getSkillBonus(skill, charStats);
    const baseRoll = roller(20, 1)[0];
    const roll = Number(baseRoll + bonus);
    return interaction.reply(`rolling ${skill}: ${char_name} got a ${baseRoll} + ${bonus} = ${roll}`);
  } };


