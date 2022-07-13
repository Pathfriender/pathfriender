const Discord = require('discord.js');

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });


client.once('ready', () => {
  console.log('This works?');
});




client.login('OTk2ODU3ODMxMjIxMzc1MTQ3.GycvT6.TwgOuxUCngULEKLM6HELSSmCAFiRjIPlDitjYU');