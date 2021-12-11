const Discord = require('discord.js');
const { spamChannelList } = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

//importing commands
const hello = require("./commands/hello.js");
const github = require("./commands/github.js");

client.once('ready', () => {
  client.user.setPresence({ activities: [{ name: 'Plant Gang in Super Smash Bros.' }], status: 'online' });
  console.log("Plant Gang moment.");
});

client.on('messageCreate', message => {
  if (message.author == 918912481903124543) return;
  switch (message.content.toLowerCase()) {
    /*case 'hello':
    case 'hallo':
      hello.command(message);
      break;*/
    case 'p github':
    case 'p qweriop':
      github.gh(message);
      break;
    case 'p based':
      message.channel.send("true");
    case 'p update':
      github.update(message);
      break;
    case 'p site':
    case 'p website':
      github.website(message);
      break;
    case 'p gang':
    case 'p plant':
      message.channel.send("PLANT GANG RISE UP!!!");
      break;
    case 'p blm':
    case 'p plm':
    case 'p lives':
      message.channel.send("Plant Lives Matter. #PLM");
      break;
    default:
      if (spamChannelList.includes(String(message.channelId))) {
        message.channel.send("Plant Gang"); }
      break;
  }

});

client.login(process.env.TOKEN);
