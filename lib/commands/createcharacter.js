
const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('node:timers/promises').setTimeout;
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
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
    .addStringOption(option => option.setName('character_name').setDescription('Enter a character name').setRequired(true)),
  async execute(interaction) {
    if (await Character.getCharNameByUserId(interaction.user_id)) {
      return interaction.reply('one character at a time bucko');
    }   
    const class_row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('class_select')
          .setPlaceholder('Nothing selected')
          .addOptions([
            {
              label: 'Fighter',
              description: 'fighting man',
              value: 'Fighter',
            },
            {
              label: 'Rogue',
              description: 'sneak man',
              value: 'Rogue',
            },
            {
              label: 'Wizard',
              description: 'magic man',
              value: 'Wizard'
            },
            {
              label: 'Warlock',
              description: 'Eldritch Blast simulator',
              value: 'Warlock'
            },
            {
              label: 'Sorceror',
              description: 'magic man 2',
              value: 'Sorceror'
            },
            {
              label: 'Paladin',
              description: 'man of God',
              value: 'Paladin'
            },
            {
              label: 'Druid',
              description: 'it\'s hip to fuck trees',
              value: 'Druid'
            },
            {
              label: 'Ranger',
              description: 'hehe bow shoot',
              value: 'Ranger'
            },
            {
              label: 'Cleric',
              description: 'paladin but without the good part',
              value: 'Cleric'
            },
            {
              label: 'Monk',
              description: 'i am speed',
              value: 'Monk'
            },
            {
              label: 'Artificer',
              description: 'your dm banned this',
              value: 'Artificer'
            }
          ]),
      );
    const race_row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('race_select')
          .setPlaceholder('Nothing selected')
          .addOptions([
            {
              label: 'Human',
              description: 'a) never played dnd before b) all your stats are odd',
              value: 'Human',
            },
            {
              label: 'Elf',
              description: '>elves',
              value: 'Elf',
            },
            {
              label: 'Tabaxi',
              description: 'furry',
              value: 'Tabaxi'
            },
            {
              label: 'Dragonborn',
              description: 'scalie',
              value: 'Dragonborn'
            },
            {
              label: 'Gnome',
              description: 'lol manlet',
              value: 'Gnome'
            },
            {
              label: 'Dwarf',
              description: 'manlet 2: beard edition',
              value: 'Dwarf'
            },
            {
              label: 'Aarakocra',
              description: 'banned buz flight speed lol',
              value: 'Aarakocra'
            },
            {
              label: 'Half-Orc',
              description: 'grats on rolling barbarian',
              value: 'Half-Orc'
            },
            {
              label: 'Half-Elf',
              description: '>elves',
              value: 'Half-Elf'
            },
            {
              label: 'Kobold',
              description: 'for men of culture and refinement',
              value: 'Kobold'
            },
            {
              label: 'Genasi',
              description: 'luv me elements. luv me plane. \'ate humies',
              value: 'Genasi'
            },
            {
              label: 'Tiefling',
              description: 'rogue lookin chaotic neutral lookin lone wolf lookin ass',
              value: 'Tiefling'
            }
          ]),
      );
    const background_row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('background_select')
          .setPlaceholder('Nothing selected')
          .addOptions([
            {
              label: 'Folk Hero',
              description: 'pobular',
              value: 'Folk Hero',
            },
            {
              label: 'Mercenary Veteran',
              description: 'stab 4 moni',
              value: 'Mercenary Veteran',
            },
            {
              label: 'Hermit',
              description: 'aka degenerate who lives in their parents\' wizard tower',
              value: 'Hermit'
            },
          ]),
      );
    await interaction.reply({ content: 'pick a class', components: [class_row], ephemeral: true });
    await wait(4000);
    await interaction.followUp({ content: 'roight. now put in your race', components: [race_row], ephemeral: true });
    await wait(4000);
    await interaction.followUp({ content: 'background time', components: [background_row], ephemeral: true });
    await wait(4000);
    return interaction.followUp({ content: 'nice', ephemeral: true });
    // return interaction.reply(`you have now created ${character_name} the ${race} ${character_class}. nice`);
  },
};
