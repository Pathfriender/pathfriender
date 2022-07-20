const { SlashCommandBuilder } = require('@discordjs/builders');
const { deleteCharacter, getCharNameByUserId } = require('../models/Character');
const { calculateLevel } = require('../utils/calculateLevel');

//when /deletecharacter command user is able to delete their character 
//discord responds with `There goes ${character.character_name}. 
//Level ${calculateLevel(character.xp)} ${character.race} ${character.class}. Gone but never gone forgotten.`
module.exports = {
  data: new SlashCommandBuilder()
    .setName('deletecharacter')
    .setDescription('Deletes the character associated with you'),

  async execute(interaction) {
    const character_name = await getCharNameByUserId(interaction.user.id);
    // TODO: not just break if you don't have a character
    const character = await deleteCharacter(character_name);
    return interaction.reply(`There goes ${character.character_name}. Level ${calculateLevel(character.xp)} ${character.race} ${character.class}. Gone but never gone forgotten.`);
  } };


