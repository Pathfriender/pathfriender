const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

const Discord = require('discord.js');

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });


client.once('ready', () => {
  console.log('This works?');
});




client.login('OTk2ODU3ODMxMjIxMzc1MTQ3.GycvT6.TwgOuxUCngULEKLM6HELSSmCAFiRjIPlDitjYU');
