const { SlashCommandBuilder } = require('@discordjs/builders');
const { playerInitRoller } = require('../utils/roller.js');
const Character = require('../models/Character.js');
const { getStatMod } = require('../utils/getStatMod.js');



module.exports = {
  //using the discord.js builder library we can set up new slash commands to push into our bot
  data: new SlashCommandBuilder()
  //using .setName we create the words the users would input after their "/" in the slash command
    .setName('initiative')
    //with .setDescription we create the string that populates when you preview the slash command 
    .setDescription('Roll for initiative!')
    //with .addStringOption we add fields for the user to input values, in this case they input player names for our function later in the file
    .addStringOption((options) => 
      options
        .setName('character1')
        //.setDescription works the same here as in the base command
        .setDescription('first player char in the encounter')
        //.setRequired just makes it so the user cannot enter with a blank field
        .setRequired(true)  
    ) 
    .addStringOption((options) => 
      options
        .setName('character2')
        .setDescription('second player char in the encounter')
        .setRequired(true)  
    ) 
    .addStringOption((options) => 
      options
        .setName('character3')
        .setDescription('third player char in the encounter')
        //since the minimum amount of players needed for an initiative is just two, we don't need .setRequired on the rest of the character fields, which leaves them optional
    ) 
    .addStringOption((options) => 
      options
        .setName('character4')
        .setDescription('fourth player char in the encounter')
    ) 
    .addStringOption((options) => 
      options
        .setName('character5')
        .setDescription('fifth player char in the encounter')
    ) 
    .addStringOption((options) => 
      options
        .setName('character6')
        .setDescription('sixth player char in the encounter')
    ), 

  //this execute function is what sets the rules for the command when the user submits their inputs
  async execute(interaction) {
    //for this command since it will have multiple responses based on the amount of character fields filled out, we call a flat reply to begin
    await interaction.reply('Pin me to save your initiative!');
    //here we set up an array to store players based on how many fields are filled
    const players = [];
    //you can see that since characters 1 and 2 are required there are no conditionals for the execute function to get their inputs
    players[0] = interaction.options.getString('character1');
    players[1] = interaction.options.getString('character2');
    //whereas for the rest of the characters they all have if statements to check if those optional fields are being filled out
    if (interaction.options.getString('character3') !== null) {
      players.push(interaction.options.getString('character3'));
    }
    if (interaction.options.getString('character4') !== null) {
      players.push(interaction.options.getString('character4'));
    }
    if (interaction.options.getString('character5') !== null) {
      players.push(interaction.options.getString('character5'));
    }
    if (interaction.options.getString('character6') !== null) {
      players.push(interaction.options.getString('character6'));
    }
    
    //here we set up arrays for each player's dexterity
    const playersDex = [];
    //and here we set up the array for the info retrieved when we call our getStatMod function 
    const playersDexMod = [];
    //and here is where the array for each character's initiative roll gets stored
    const playerResults = [];

    //we loop through these arrays here
    for (let i = 0; i < players.length; i++) {
      //this variable calls our initiative roller function which rolls one 20 sided die for each player
      const playerRoll = playerInitRoller();
      //and here those rolls are stored into the player results array
      playerResults[i] = playerRoll;
      //in this variable we call our model's function which grabs the character's stats 
      //by relating their inputted name with the appropriate row in the character table
      const playerStats = await Character.getStats(players[i]);
      //and in this playerDexNum variable they pull only the dexterity from the fetched stats, 
      //as that's what we'll be using for initiative modifiers
      let playerDexNum = 10;
      if (playerStats !== null) {
        playerDexNum = playerStats.dexterity;
      }
      //here we associate the player's dexterity with their index in the array
      playersDex[i] = playerDexNum;
      //and here we loop through to calculate their modifier and store in the dex modifier array
      for (let i = 0; i < playersDex.length; i++) {
        const playerDexModNum = getStatMod(playerDexNum);
        playersDexMod[i] = playerDexModNum;
      }
    }

    //in this function we get the player's final roll amount by adding their roll and their dex modifier
    function returnFunction(i) {
      const finalRoll = (Number(playerResults[i]) + Number(playersDexMod[i]));
      //then we return a followUp function, which has the bot reply to the initial response sent after the user submitted their character names
      return interaction.followUp({ 
        content: `${players[i]} rolled: 
        ${playerResults[i]} + ${playersDexMod[i]} = ${finalRoll}` }
      );
      //looking above you can see it returns a string listing the character's name 
      //rolled their dice result plus their modifier, and then shows what those two added values equal to
    }

    //here we loop through the players array and sends a followUp reply with the initiative rolls of every character entered by the user
    for (let i = 0; i < players.length; i++) {
      returnFunction(i);
    }
    
  } 
};
