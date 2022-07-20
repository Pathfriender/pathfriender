const express = require('express');
require('dotenv').config();
const token = `${process.env.TOKEN}`;
const app = express();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require('discord.js');
const Character = require('./models/Character');

module.exports = app;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const character = {};

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (interaction.isSelectMenu()) {
    if (interaction.customId === 'class_select') {
      const selected = (interaction.values[0]);
      character.class = selected;
      if (character.background !== undefined
        && character.race !== undefined
        && character.character_name !== undefined
        && character.stats !== undefined
        && character.class !== undefined) {
        await Character.makeCharacter(interaction.user.id, character);
      }
      return;
    }
    if (interaction.customId === 'race_select') {
      const selected = (interaction.values[0]);
      character.race = selected;
      if (character.background !== undefined
        && character.race !== undefined
        && character.character_name !== undefined
        && character.stats !== undefined
        && character.class !== undefined) {
        await Character.makeCharacter(interaction.user.id, character);
      }
      return;
    }
    if (interaction.customId === 'background_select') {
      const selected = (interaction.values[0]);
      character.background = selected;
      if (character.background !== undefined
        && character.race !== undefined
        && character.character_name !== undefined
        && character.stats !== undefined
        && character.class !== undefined) {
        await Character.makeCharacter(interaction.user.id, character);
      }
      return;
    }
  }
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    if (interaction.commandName === 'createcharacter') {
      const dexterity = interaction.options.getNumber('dexterity');
      const strength = interaction.options.getNumber('strength');
      const intelligence = interaction.options.getNumber('intelligence');
      const constitution = interaction.options.getNumber('constitution');
      const wisdom = interaction.options.getNumber('wisdom');
      const charisma = interaction.options.getNumber('charisma');
      character.stats = { dexterity, strength, intelligence, constitution, wisdom, charisma };
      character.character_name = interaction.options.getString('character_name');
    }
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.login(token);


// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//App routes
app.use('/characters', require('./controllers/character'));
app.use('/magic-items', require('./controllers/magicItems'));
app.use('/armor', require('./controllers/armors'));
app.use('/weapon', require('./controllers/weapons'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

