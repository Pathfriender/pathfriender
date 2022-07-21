const { SlashCommandBuilder } = require('@discordjs/builders');
const { deleteCharacter, getCharNameByUserId, getXp } = require('../models/Character');
const { calculateLevel } = require('../utils/calculateLevel');

//Deletes the user's character from the database and everything related to it
//The bot responds with `There goes [character's name]. 
//Level [level] [race] [class]. Gone but never gone forgotten.`
module.exports = {
  data: new SlashCommandBuilder()
    .setName('deletecharacter')
    .setDescription('Deletes the character associated with you'),

  async execute(interaction) {
    const character_name = await getCharNameByUserId(interaction.user.id);
    //can't delete something that isn't there so we make sure the user has a character first
    if (character_name === null) {
      return interaction.reply('but you don\'t have a character to delete');
    }
    const xp = await getXp(character_name);
    const level = await calculateLevel(xp);
    const character = await deleteCharacter(character_name);
    return interaction.reply(`There goes ${character.character_name}. Level ${level} ${character.race} ${character.class}. Gone but never gone forgotten.`);
  } };


