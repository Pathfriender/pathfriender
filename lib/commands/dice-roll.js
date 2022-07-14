const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rolld20')
    .setDescription('Throws some dice')
    .addStringOption((options) => 
      options
        .setName('dieSides')
        .setDescription('number of sides on the dice')
        .setRequired(true)
        
    )
    .addStringOption((options) => 
      options
        .setName('numOfDie')
        .setDescription('number of dice to roll')
        .setRequired(true)
    ),
  async execute(interaction) {
    //const dieSides = interaction.options.getNumber('dieSides');
    //const numOfDie = interaction.options.getNumber('numOfDie');
    return interaction.reply(`your roll is ${interaction.options.getString('dieSides'), interaction.options.getString('numOfDie')}`);
  } };

//return interaction
//.reply(`${interaction.options.getString('dice')} * ${Math.ceil(Math.random() * 20)}`);

//return interaction.reply(`${Math.ceil(Math.random() * 20)}, ${Math.ceil(Math.random() * 20)}`);

// interaction.reply({
//     content: interaction.options.getString('dice'),
//     ephemeral: true,
//   });

// .setName('rolld20')
//     .setDescription('Throws some dice')
//     .addStringOption((option) => 
//       option
//         .setName('dice')
//         .setDescription('select amount of dice and sides')
//         .setRequired(true)
//     ),
//   async execute(interaction) {
//     const matching = interaction.options.getString('dice');
//     if (matching) {
//       const dice = matching;
//       for (const die of dice) 
//       { const response = 1 + Math.floor(Math.random() * die);
//         return interaction.reply(`${response}`);
//       }
//     }
//   }
