const express = require('express');
require('dotenv').config();
const { Discord, Client, Intents } = require('discord.js');
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

// console.log('here', token);
// const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });


// client.once('ready', () => {
//   console.log('This works?');
// });

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (msg) => {
  const prefix = '!';
  const message = msg.content;
  // const channel = msg.channelId;

  if (message.startsWith(prefix)) {
    const command = message.slice(prefix.length).split(' ')[0];

    switch (command) {
      case 'ping':
        msg.channel.send('pong');
        break;
      case 'test':
        msg.channel.send('you dare test me');
        break;
    }
  }
});

client.login(token);
