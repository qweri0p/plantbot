const Discord = require('discord.js');
const { prefix } = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

//importing commands
const hello = require("./commands/hello.js");
const github = require("./commands/github.js");

client.once('ready', () => {
  console.log("Ready!")
});

client.on('message', message => {
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  console.log(message.content);
  switch (message.content) {
    /*case 'hello':
    case 'hallo':
      hello.command(message);
      break;*/
    case 'p github':
    case 'p qweriop':
      github.gh(message);
      break;
    case 'p update':
      github.update(message);
      break;
    case 'p plant':
      message.channel.send("PLANT GANG RISE UP!!!");
      break;
    default:
      message.channel.send("Plant Gang");
      break;
  }

});

client.login(process.env.TOKEN);
