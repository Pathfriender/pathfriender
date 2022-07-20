const { SlashCommandBuilder } = require('@discordjs/builders');
const MagicItem = require('../models/Magic-item');
const { magItGen } = require('../utils/itemValues.js');
const { armorGen } = require('../utils/itemValues.js');
const { weaponGen } = require('../utils/itemValues.js');
const Armor = require('../models/Armor');
const Weapon = require('../models/Weapon');

module.exports = {
  //using the discord.js builder library we can set up new slash commands to push into our bot
  data: new SlashCommandBuilder()
  //using .setName we create the words the users would input after their "/" in the slash command
    .setName('loot')
    //with .setDescription we create the string that populates when you preview the slash command 
    .setDescription('specify the amount and type of random loot you want')
    //with .addNumberOption we add fields for the user to input values, in this case they input the amount of loot they want generated later in the command
    .addNumberOption((options) => 
      options
        .setName('magic-item-amount')
        //.setDescription works the same here as in the base command
        .setDescription('number')
        .setRequired(true)  
        //.setRequired just makes it so the user cannot enter with a blank field
    ) 
    .addNumberOption((options) => 
      options
        .setName('armor-amount')
        .setDescription('amount of armor in the loot pile')
        .setRequired(true)
    )

    .addNumberOption((options) => 
      options
        .setName('weapon-amount')
        .setDescription('number of weapons in the loot pile')
        .setRequired(true)
    ),

  //this execute function is what sets the rules for the command when the user submits their inputs
  async execute(interaction) {
    //for this command since it will have multiple responses based on the amount of item fields filled out, we call a flat reply to begin
    await interaction.reply({ content: 'test', ephemeral: true });
    //with these constants we grab the values inputted by the user
    const numOfMagIt = interaction.options.getNumber('magic-item-amount');
    const numOfArmor = interaction.options.getNumber('armor-amount');
    const numOfWep = interaction.options.getNumber('weapon-amount');
    
    //with these constants we call our utility functions which loop through the amount inputted by the user for each instance
    const magItSearch = magItGen(numOfMagIt);
    const armorSearch = armorGen(numOfArmor);
    const weaponSearch = weaponGen(numOfWep);
    
    //here we set up an array to store the responses received from our randomized loot functions
    const magItResults = [];
    //and loop through to add each value from the random loot utility function, which then calls our model function 
    //and associates the randomly generated numbers received in the utility function as an ID value 
    //and returns a string with the name of the item in the table row containing the appropriate ID
    for (let i = 0; i < magItSearch.length; i++) {
      magItResults.push(await MagicItem.getRandomMagicItemById(magItSearch[i]));
    }

    //here we set up an array to store the responses received from our randomized loot functions
    const armorResults = [];
    //and loop through to add each value from the random loot utility function, which then calls our model function 
    //and associates the randomly generated numbers received in the utility function as an ID value 
    //and returns a string with the name of the item in the table row containing the appropriate ID
    for (let i = 0; i < armorSearch.length; i++) {
      armorResults.push(await Armor.getRandomArmorById(armorSearch[i]));
    }
    //here we set up an array to store the responses received from our randomized loot functions
    const weaponResults = [];
    //and loop through to add each value from the random loot utility function, which then calls our model function 
    //and associates the randomly generated numbers received in the utility function as an ID value 
    //and returns a string with the name of the item in the table row containing the appropriate ID
    for (let i = 0; i < weaponSearch.length; i++) {
      weaponResults.push(await Weapon.getRandomWeaponById(weaponSearch[i]));
    }

    //and here we return a followUp function that populates a 
    //string with every name received from each random item function
    return interaction.followUp({ content: 
        `You find these magic item(s): ${magItResults}, 
        and these pieces of armor: ${armorResults}, 
        and these weapons: ${weaponResults} `, 
    ephemeral: true });
  } };
    

