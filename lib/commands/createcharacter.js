
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const Character = require('../models/Character.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('createcharacter')
    .setDescription('Creates a character with the (pre-modified) stats and the given name.')
    .addNumberOption(option => option.setName('dexterity').setMinValue(3).setMaxValue(18).setDescription('Dexterity score').setRequired(true))
    .addNumberOption(option => option.setName('strength').setMinValue(3).setMaxValue(18).setDescription('Strength score').setRequired(true))
    .addNumberOption(option => option.setName('intelligence').setMinValue(3).setMaxValue(18).setDescription('Intelligence score').setRequired(true))
    .addNumberOption(option => option.setName('constitution').setMinValue(3).setMaxValue(18).setDescription('Constitution score').setRequired(true))
    .addNumberOption(option => option.setName('wisdom').setMinValue(3).setMaxValue(18).setDescription('Wisdom score score').setRequired(true))
    .addNumberOption(option => option.setName('charisma').setMinValue(3).setMaxValue(18).setDescription('Charisma score').setRequired(true))
    .addStringOption(option => option.setName('character_name').setDescription('Enter a character name').setRequired(true)),
  async execute(interaction) {
    if (await Character.getCharNameByUserId(interaction.user_id)) {
      return interaction.reply('One character at a time, please.');
    } else {
      const class_row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId('class_select')
            .setPlaceholder('Nothing selected')
            .addOptions([
              {
                label: 'Fighter',
                description: 'Hit them with your sword. Uses Strength or Dexterity and Constitution.',
                value: 'Fighter',
              },
              {
                label: 'Rogue',
                description: 'Stab them in the back and slink away in shadow. Uses Dexterity, but sometimes Charisma.',
                value: 'Rogue',
              },
              {
                label: 'Wizard',
                description: 'Use your studied magical might to obliterate your foes and your reading list. Uses Intelligence.',
                value: 'Wizard'
              },
              {
                label: 'Bard',
                description: 'Honk a trumpet hard enough it kills your enemy spiritually. Uses Charisma.',
                value: 'Bard'
              },
              {
                label: 'Warlock',
                description: 'Call upon an otherworldly being for power to spam Eldritch Blast. Uses Charisma and Constitution.',
                value: 'Warlock'
              },
              {
                label: 'Sorceror',
                description: 'Use your natural talent to magic all your problems away. Uses Charisma and Constitution.',
                value: 'Sorceror'
              },
              {
                label: 'Paladin',
                description: 'Spread your deity\'s will through preaching and incredible violence. Uses Cha, Str, Dex, and Con.',
                value: 'Paladin'
              },
              {
                label: 'Druid',
                description: 'Give your aid to nature and call upon its aid for yourself. Uses Wisdom and Dexterity.',
                value: 'Druid'
              },
              {
                label: 'Ranger',
                description: 'Explore the unexplored, see the unseen. Have your pet bear eat the unseen. Uses Dex and Wisdom.',
                value: 'Ranger'
              },
              {
                label: 'Cleric',
                description: 'Embody your chosen deity\'s will on your plane. Uses Wisdom, Strength, and Dexterity.',
                value: 'Cleric'
              },
              {
                label: 'Monk',
                description: 'See the ki that flows through all things and enhance yourself with it. Uses Wisdom, Dex, and Con.',
                value: 'Monk'
              },
              {
                label: 'Artificer',
                description: 'Build things that solve all your problems for you with magic. Uses Intelligence and Dexterity.',
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
                description: 'As varied as they come and utterly unpredictable. +1 to all ability scores, 30 ft movement.',
                value: 'Human',
              },
              {
                label: 'Elf',
                description: 'Graceful, ethereal, and long-lived magical folk. +2 to dexterity, 30 ft. movement. Resist charms.',
                value: 'Elf',
              },
              {
                label: 'Halfling',
                description: 'Short creatures of comfort, habit, and community. +2 to Dexterity, 30 ft. movement. Reroll 1s.',
                value: 'Halfling'
              },
              {
                label: 'Tiefling',
                description: 'Borne of the Abyss and wreathed in its shadow. +2 to Charisma. 30 ft. movement. Hellish powers.',
                value: 'Tiefling'
              },
              {
                label: 'Half-Orc',
                description: 'Renowned for their fury and strength. +2 strength, +1 con. 30 ft. movement. Orcish tenacity',
                value: 'Half-Orc'
              },
              {
                label: 'Half-Elf',
                description: 'Human ambition and Elven timeless grace. +2 charisma, +1 to two others. 30 ft. Elven resistances.',
                value: 'Half-Elf'
              },
              {
                label: 'Dragonborn',
                description: 'Massive creatures of scale and flame. +2 strength, +1 con. Draconic breath weapon.',
                value: 'Dragonborn'
              },
              {
                label: 'Tabaxi',
                description: 'Catlike folk driven by curiosity and wanderlust. +2 dex, +1 cha. Feline agility for double speed.',
                value: 'Tabaxi'
              },
              {
                label: 'Gnome',
                description: 'Short creatures of innovation and creation. +2 int, 25 ft speed.  Very varied subraces.',
                value: 'Gnome'
              },
              {
                label: 'Dwarf',
                description: 'Clan, tradition, and creation - the ties that bind. +2 con 25 ft speed. Stout form and resilience.',
                value: 'Dwarf'
              },
              {
                label: 'Aarakocra',
                description: 'Birdfolk immigrants from the Plane of Air. +2 dex, +1 cha. Short-lived. Fly when lightly armoured.',
                value: 'Aarakocra'
              },
              {
                label: 'Kobold',
                description: 'Weak and cowardly alone, but clever and deadly. +2 dex, -1 strength. Allies provide advantage.',
                value: 'Kobold'
              },
              {
                label: 'Air Genasi',
                description: 'As playful and free as elemental wind. +2 con, +1 dex. Infinite breath.',
                value: 'Air Genasi'
              },
              {
                label: 'Earth Genasi',
                description: 'As stubborn and unmoving as elemental earth. +2 con, +1 strength. Walk through earth.',
                value: 'Earth Genasi'
              },
              {
                label: 'Fire Genasi',
                description: 'As volatile and chaotic as elemental fire. +2 con, +1 int. Resist fire and see with it.',
                value: 'Fire Genasi'
              },
              {
                label: 'Water Genasi',
                description: 'As free and untamed as elemental water. +2 con, +1 wis. Resist acid, live in water.',
                value: 'Water Genasi'
              },
              {
                label: 'Aasimar',
                description: 'A soul touched by the Good deities, blessed by light. +2 cha. Heal creatures by touching them.',
                value: 'Aasimar'
              },
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
                description: 'You know people and how to use them. You don\'t tell them the whole truth, but they don\'t need that.',
                // Proficiencies: Deception, Sleight of Hand. No languages.
                value: 'Charlatan',
              },
              {
                label: 'City Watch',
                description: 'You serve the community by keeping it safe, protecting them from themselves and enforcing law.',
                // Proficiencies: Athletics, Insight. Two languages of your choice
                value: 'City Watch',
              },
              {
                label: 'Cloistered Scholar',
                description: 'You work out at the library. You spent most of your childhood studying and bettering your mind.',
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
                description: 'You serve one of the great organizations of Faerûn wherever you go. Ask your DM!',
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
                description: 'You grew up in the Feywild, a warped plane of Fey magic. You came back, but it changed you forever.',
                // Proficiencies: Deception, Survival. One of Elvish, Gnomish, Goblin, or Sylvan. One musical instrument, and three Feywild Trinkets.
                value: 'Feylost',
              },
              {
                label: 'Folk Hero',
                description: 'People from your home sing praises of your deeds, and people from afar soon will.',
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
                description: 'One of the rich and powerful families. Work with your DM to make sure it and you fit into the world.',
                //Proficiencies: History, Persuasion, a gaming set. One language of your choice
                value: 'Noble'
              },
              {
                label: 'Outlander',
                description: 'You were born in the wild and it is a part of you even in civilization.',
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
                description: 'Whether voyages of discovery, storms of fable, or watery beasts, the sea is known to you.',
                //Proficiencies: Athletics, Perception, navigator's tools, water vehicles.
                value: 'Sailor',
              },
              {
                label: 'Smuggler',
                description: 'You\'re an expert at hiding from the law. You\'ve stolen and sold things people have never heard of.',
                //Proficiencies: Athletics, Deception, water vehicles
                value: 'Smuggler',
              },
              {
                label: 'Soldier',
                description: 'Whether fresh out of the academy, conscripted into service, or local militia, fighting is your life.',
                //Proficiencies: Athletics, Intimidating, one gaming set, land vehicles
                value: 'Soldier',
              },
              {
                label: 'Spy',
                description: 'You write to your loved ones in code and cipher. You aren\'t who you say you are.',
                //Proficiencies: Deception, Stealth, one gaming set, thieves' tools
                value: 'Spy',
              },
              {
                label: 'Urchin',
                description: 'A roof over your head is a luxury, and money for bread is an unheard of blessing.',
                //Proficiencies: Sleight of Hand, Stealth, disguise kit, thieves' tools
                value: 'Urchin',
              },
              {
                label: 'Waterdhavian Noble',
                description: 'A member of one of the Waterdeep Houses. Your name and signet alone buy your inn and food.',
                //Proficiencies: History, Persuasion, one gaming set, one musical instrument
                value: 'Waterdhavian Noble',
              },
            ]),
        );
      await(interaction.reply('select your stuff'));
      const classMessage = await (interaction.channel.send({ content: 'pick a class', components: [class_row] }));
      const raceMessage = await (interaction.channel.send({ content: 'pick a race', components: [race_row] }));
      const backgroundMessage = await (interaction.channel.send({ content: 'pick a background', components: [background_row] }));
      const filter = i => {
        i.deferUpdate();
        return i.user.id === interaction.user.id;
      };
      classMessage.awaitMessageComponent({ filter, componentType: 'SELECT_MENU', time: 60000 })
        .then(interaction => interaction.editReply('didn\'t recieve class'))
        // eslint-disable-next-line no-unused-vars
        .catch(err => classMessage.delete());
      raceMessage.awaitMessageComponent({ filter, componentType: 'SELECT_MENU', time: 60000 })
        .then(interaction => interaction.editReply('didn\'t recieve race'))
      // eslint-disable-next-line no-unused-vars
        .catch(err => raceMessage.delete());
      backgroundMessage.awaitMessageComponent({ filter, componentType: 'SELECT_MENU', time: 60000 })
        .then(interaction => interaction.editReply('didn\'t recieve background'))
      // eslint-disable-next-line no-unused-vars
        .catch(err => backgroundMessage.delete());
    }
  },
};
