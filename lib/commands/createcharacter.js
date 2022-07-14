
const { SlashCommandBuilder } = require('@discordjs/builders');
const Character = require('../models/Character.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createcharacter')
    .setDescription('Creates a character with the given information')
    .addStringOption(option => option.setName('dexterity').setDescription('Dexterity score').setRequired(true))
    .addStringOption(option => option.setName('strength').setDescription('Strength score').setRequired(true))
    .addStringOption(option => option.setName('intelligence').setDescription('Intelligence score').setRequired(true))
    .addStringOption(option => option.setName('constitution').setDescription('Constitution score').setRequired(true))
    .addStringOption(option => option.setName('wisdom').setDescription('Wisdom score score').setRequired(true))
    .addStringOption(option => option.setName('charisma').setDescription('Charisma score').setRequired(true))
    .addStringOption(option => option.setName('character_name').setDescription('Enter a character name').setRequired(true))
    .addStringOption(option => option.setName('race').setDescription('Enter a race').setRequired(true))
    .addStringOption(option => option.setName('character_class').setDescription('Enter a character class').setRequired(true))
    .addStringOption(option => option.setName('background').setDescription('Enter a background name').setRequired(true)),
  async execute(interaction) {
    if (await Character.getCharNameByUserId(interaction.user_id)) {
      return interaction.reply('one character at a time bucko');
    }
    const dexterity = interaction.options.getString('dexterity');
    const strength = interaction.options.getString('strength');
    const intelligence = interaction.options.getString('intelligence');
    const constitution = interaction.options.getString('constitution');
    const wisdom = interaction.options.getString('wisdom');
    const charisma = interaction.options.getString('charisma');
    const stats = { dexterity, strength, intelligence, constitution, wisdom, charisma };
    const character_name = interaction.options.getString('character_name');
    const character_class = interaction.options.getString('character_class');
    const background = interaction.options.getString('background');
    try {
      null;
      //   class = Character.getRaceID(interaction.options.getString('class'));
    } catch (error) {
      console.error(error);
      return interaction.reply('invalid class entered');
    }  
    //check for text entry. also check on class table
    const race = interaction.options.getString('race');
    try {
      null;
    //   race = Character.getRaceID(interaction.options.getString('race'));
    } catch (error) {
      console.error(error);
      return interaction.reply('invalid race entered');
    }      
    //check for text entry. also check on class table
    const character = { character_name, xp: 0, character_class, race, background, stats };
    await Character.makeCharacter(interaction.user.id, character);
    return interaction.reply(`you have now created ${character_name} the ${race} ${character_class}. nice`);
  },
};
