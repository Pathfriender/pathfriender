const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');
const { getCharNameByUserId } = require('../models/Character.js');
const Skill = require('../models/Skill.js');
const { roller } = require('../utils/roller.js');
// Rolls a number between 1 and 20, then adds the character's relevant modifier to that skill.
// For example, Stealth is a Dexterity skill, so /roll ['stealth'] would look at a character's Dexterity.
// The bot looks up a character using a name or a user id and looks up their row in the characters table.
// It adds that to the random number and prints out the resulting number.
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
      const character_name = await getCharNameByUserId(interaction.user.id);
      //test for character existing before rolling
      if (character_name === null) {
        return interaction.reply('Either make a character or enter one');
      }
    }
    const charStats = await Character.getStats(char_name);
    const bonus = await Skill.getSkillBonus(skill, charStats);
    const baseRoll = roller(20, 1)[0];
    //baseRoll here will just be a random number 1-20
    const roll = Number(baseRoll + bonus);
    return interaction.reply(`rolling ${skill}: ${char_name} got a ${baseRoll} + ${bonus} = ${roll}`);
  } };


