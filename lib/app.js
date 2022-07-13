const express = require('express');
require('dotenv').config();
const Discord = require('discord.js');
const token = `${process.env.TOKEN}`;
const app = express();

// Built in middleware
app.use(express.json());

// App routes

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

console.log('here', token);
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });


client.once('ready', () => {
  console.log('This works?');
});



client.login(token);
