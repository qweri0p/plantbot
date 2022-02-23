const Discord = require('discord.js');
const { spamChannelList } = require('./config.json');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

//importing commands
const hello = require("./commands/hello.js");
const github = require("./commands/github.js");
const tax = require("./commands/tax.js");

client.once('ready', () => {
  client.user.setPresence({ activities: [{ name: 'Plant Gang in Super Smash Bros. Ultimate' }], status: 'online' });
  console.log("Plant Gang moment.");
});

client.on('messageCreate',message => {
  if (message.author == 918912481903124543 || message.author == 945767252517613659) return;
  if message.content.toLowerCase().startsWith('ben') {
    return;
  }
  switch (message.content.toLowerCase()) {
    case 'p fnaf':
    case 'p freddy':
    case 'fnaf':
      message.channel.send({files: ['./images/fnaf.gif']});
      break;
    case 'p russian':
    case 'p ruski':
    case 'p blyat':
      message.channel.send('банда растений');
      break;
    case 'p miss':
    case 'p mis':
    case 'miss':
    case 'mis':
      message.channel.send({files: ['./images/miss.png']});
      break;
    case 'p github':
    case 'p qweriop':
      github.gh(message);
      break;
    case 'p based':
      message.channel.send("true");
      break;
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
    case 'p help':
      hello.help(message, Discord);
      break;
    case 'p duits':
    case 'p german':
    case 'p deutsch':
      message.channel.send('Pflanzen Trupp');
      break;
    case 'p amongus':
    case 'p sus':
    case 'p sussy':
    case 'p amogus':
      message.channel.send('when the plant is sus :scream:');
      break;
    case 'p boom':
      message.channel.send('boom bros');
      break;
    case 'p tree':
      message.channel.send("tree gaming");
      break;
    case 'plant bang':
    case 'p bang':
    case 'p sex':
      message.channel.send('harder daddy');
      break;
    case 'p gex':
    case 'p gecs':
      message.channel.send({files: ['./images/gex.gif']});
      break;
    case 'p game':
    case 'p gaming':
      message.channel.send({files: ['./images/fnaf-plant.png']});
      break;
    case 'p hit':
    case 'hit':
      message.channel.send({files: ['./images/hit.png']});
      break;
    case 'p heaven':
    case 'p cruelty':
    case 'p squad':
      message.channel.send({files: ['./images/heaven.jpg']});
      break;
    case 'p spike':
    case 'p dude':
      message.channel.send({files: ['./images/dude.jpg']});
      break;
    case 'p kirby':
    case 'p car':
      message.channel.send({files: ['./images/carby.jpg']});
      break;
    case 'p vending':
    case 'p machine':
      message.channel.send({files: ['./images/vending.png']});
      break;
    case 'p dang':
    case 'monokuma':
      message.channel.send({files: ['./images/danganronpa.png']});
      break;
    case 'p tax':
      tax.command(message);
      break;
    case 'p sugoma':
      hello.sugoma(message, Discord);
      break;
    default:
      if (spamChannelList.includes(String(message.channelId))) {
        message.channel.send("Plant Gang");
      }
      break;
  }
});
client.login(process.env.TOKEN);
