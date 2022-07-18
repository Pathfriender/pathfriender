const { SlashCommandBuilder } = require('@discordjs/builders');
const { deleteCharacter, getCharNameByUserId } = require('../models/Character');
const { calculateLevel } = require('../utils/calculateLevel');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('deletecharacter')
    .setDescription('Deletes the character associated with you'),

  async execute(interaction) {
    const character_name = await getCharNameByUserId(interaction.user.id);
    const character = await deleteCharacter(character_name);
    return interaction.reply(`there go ${character.character_name}. level ${calculateLevel(character.xp)} ${character.race} ${character.class}. gone but never gone forgotten`);
  } };


