function command(message) {
  message.channel.send("Hello there!");
}
function help(message, Discord) {
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle("Plant gang moment")
    .setDescription("Plant gang can do:")
    .setColor("#00ff00")
    .setURL('https://qweri0p.github.io/plantbot')
    .addField("p plant", "Do plant thing", true)
    .addField("p plm", "Plant Lives Matter", true)
    .addField("p based", "true", true)
    .addField("p sus", "amognus sus", true)
    .addField("p ruski", "cyka plant", true)
    .addField('p fnaf', 'feddy', true)
    .addField('p gex', '100 gecs!', true)
    .addField('p gaming', 'scary gaem', true)
    .addField('p tax', 'yosh', true)
    .setFooter("Plant gang")
    
    message.channel.send({ embeds:[helpEmbed] });
}
function sugoma(message) {
  const sugomaEmbed = new Discord.MessageEmbed()
  .setTitle("sougon deez nuts")
  .setDescription("sus")
  .setColor("#000000")
  .setURL('https://sugoma.xyz/')
  .setImage('https://sugoma.xyz/content/sumoga.jpg')
  .setFooter("sussiest plant alive")

  message.channel.send({ embeds:[sugomaEmbed] });
}
module.exports = { command, help, sugoma };
