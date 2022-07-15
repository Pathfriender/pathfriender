
const { SlashCommandBuilder } = require('@discordjs/builders');
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
              label: 'Acolyte',
              description: 'You serve a god or a pantheon of gods, acting as a font of their will upon the mortal world.',
              // Proficiencies: Insight, Religion. Two languages of your choice
              value: 'Acolyte',
            },
            {
              label: 'Athlete',
              description: 'You are a paragon of physicality and form, excited for your next, even greater performance.',
              // Proficiencies: Acrobatics, Athletics, land vehicles. One language of your choice
              value: 'Athlete',
            },
            {
              label: 'Charlatan',
              description: 'You know people and how to use them. You don\'t tell the whole truth about it, but they don\'t need that.',
              // Proficiencies: Deception, Sleight of Hand. No languages.
              value: 'Charlatan',
            },
            {
              label: 'City Watch',
              description: 'You serve the community by keeping it safe, protecting them from themselves through sword and sorcery.',
              // Proficiencies: Athletics, Insight. Two languages of your choice
              value: 'City Watch',
            },
            {
              label: 'Cloistered Scholar',
              description: 'You work out at the library. You have spent much of your time studying and bettering your mind where others would play or spar.',
              // Proficiencies: History plus one of Arcana, Nature, and Religion. Two languages of your choice
              value: 'Cloistered Scholar',
            },
            {
              label: 'Courtier',
              description: 'Not quite a noble, but one acquainted with higher life through social talent rather than birth.',
              // Proficiencies: Insight, Persuasion. Two languages of your choice
              value: 'Courtier',
            },
            {
              label: 'Criminal',
              description: 'Do I need to explain what a criminal is?',
              // Proficiencies: Deception, Stealth, a gaming set, thieves' tools. No languages
              value: 'Criminal',
            },
            {
              label: 'Entertainer',
              description: 'You know how to perform in front of an audience and feel most alive when you get to do so.',
              // Proficiencies: Acrobatics, Performance. Disguise kit, one musical instrument. No languages/
              value: 'Entertainer',
            },
            {
              label: 'Faction Agent',
              description: `You serve one of the great organizations of Faerûn wherever you go.\n
              Usually, this is one of are the Harpers, the Order of the Gauntlet, the Emerald Enclave, the Lords' Alliance, or the Zhentarim.`,
              // Proficiencies: Insight and one Int/Wis/Cha skill as appropriate for the faction. Two languages of your choice.
              value: 'Faction Agent',
            },
            {
              label: 'Far Traveler',
              description: 'You are from far enough away that this land, its inhabitants, and its ways are unfamiliar to you.',
              // Proficiencies: Insight and Perception. One language of your choice. One musical instrument or gaming set from your homeland.
              value: 'Far Traveler',
            },
            {
              label: 'Feylost',
              description: 'You grew up in the Feywild, a warped plane of Fey magic and amusement. You came back, but it changed you forever.',
              // Proficiencies: Deception, Survival. One of Elvish, Gnomish, Goblin, or Sylvan. One musical instrument, and three Feywild Trinkets.
              value: 'Feylost',
            },
            {
              label: 'Folk Hero',
              description: 'People from your home sing praises of your deeds, and people from afar soon will. You are destined for greatness.',
              //Proficiencies: Animal Handling, Survival, one set of Artisan's tools, land vehicles
              value: 'Folk Hero',
            },
            {
              label: 'Hermit',
              description: 'You lived in seclusion, whether alone or in an isolated community, for the majority of your life.',
              //Proficiencies: Medicine, Religion, herbalism kit
              value: 'Hermit'
            },
            {
              label: 'Noble',
              description: 'One of the rich and powerful families by birth. Work with your DM to make sure it, and you, fit into the world.',
              //Proficiencies: History, Persuasion, a gaming set. One language of your choice
              value: 'Noble'
            },
            {
              label: 'Outlander',
              description: 'You were born in the wild and it is a part of you even in civilization. Technology and people are alien to you.',
              //Proficiencies: Athletics, Survival, one musical instrument. One language of your choice.
              value: 'Outlander'
            },
            {
              label: 'Mercenary Veteran',
              description: 'You\'re used to risking death for a few coin. Who did you fight for, who did you fight, and why?',
              //Proficiencies: Athletics, Persuasion, one gaming set, land vehicles
              value: 'Mercenary Veteran',
            },
            {
              label: 'Sailor',
              description: 'You need a moment to get your land legs. Whether voyages of discovery, storms of fable, or watery beasts, the sea is known to you.',
              //Proficiencies: Athletics, Perception, navigator's tools, water vehicles.
              value: 'Sailor',
            },
            {
              label: 'Smuggler',
              description: 'The eyes of the law have never seen your true self. You\'ve stolen and sold things people have never heard of.',
              //Proficiencies: Athletics, Deception, water vehicles
              value: 'Smuggler',
            },
            {
              label: 'Soldier',
              description: 'War is your body, and fighting is your blood. Whether professional, conscripted, or local militia, fighting is most of your life.',
              //Proficiencies: Athletics, Intimidating, one gaming set, land vehicles
              value: 'Soldier',
            },
            {
              label: 'Spy',
              description: 'You write to your loved ones in code and cipher. Whether for a foreign power or an usurping vizier, you have your cover established.',
              //Proficiencies: Deception, Stealth, one gaming set, thieves' tools
              value: 'Spy',
            },
            {
              label: 'Urchin',
              description: 'A roof over your head is a luxury, and money for bread is an unheard of blessing. Despite all odds, you survive, through force of will.',
              //Proficiencies: Sleight of Hand, Stealth, disguise kit, thieves' tools
              value: 'Urchin',
            },
            {
              label: 'Waterdhavian Noble',
              description: 'A member of one of the houses of Waterdeep. Your name and signet alone buy your expenses, inn, and food. Work with your DM to see which house and how you fit in.',
              //Proficiencies: History, Persuasion, one gaming set, one musical instrument
              value: 'Waterdhavian Noble',
            },
          ]),
      );
    await interaction.reply({ content: 'pick a class', components: [class_row], ephemeral: true });
    await interaction.followUp({ content: 'roight. now put in your race', components: [race_row], ephemeral: true });
    await interaction.followUp({ content: 'background time', components: [background_row], ephemeral: true });
    await interaction.followUp({ content: 'nice', ephemeral: true });
    // TODO: says 'this interaction failed' but. like. it works
    return true;
  },
};
