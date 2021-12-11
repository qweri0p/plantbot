function update(message) {
    if (message.author.id == '354943770464354306') {
        process.exit(0);
    } else {
        message.channel.send('Only qweriop#0416 can update this bot.');
    }
}
function gh(message) {
  message.channel.send("https://github.com/qweri0p/plantbot");
}
module.exports = { update, gh };                                