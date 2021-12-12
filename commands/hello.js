function command(message) {
  message.channel.send("Hello there!");
}
function help(message, Discord) {
    const helpEmbed = new Discord.MessageEmbed().setTitle("Plant gang moment").setDescription("Plant gang can do:").setColor("#00ff00").setURL('https://qweri0p.github.io/plantbot').addField("p plant", "Do plant thing", true).addField("p plm", "Plant Lives Matter", true).addField("p based", "true", true).setFooter("Plant gang")
    
    message.channel.send({ embeds:[helpEmbed] });
}

module.exports = { command, help };
