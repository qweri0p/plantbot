var lyrics = [
    "Word up, Yoshisaur Munchakoopas is my name",
    "And I'mma tell you how I beat the IRS at their own game",
    "I lied on my tax forms 'cause I just don't give a fuck",
    "Now I'm practically swimming around in big bucks",

    "I got 12 million dollars in my attic undeclared",
    "And I got another million more right under my stairs",
    "I do my business deals under cover of the night",
    "So I can hide the cash away from Uncle Sam without a fight",

    "I take advantage of every loophole, even ones that don't apply",
    "It's been 20 years, still haven't been caught in a lie",
    "I claimed Baby Mario as a dependent though he ain't my kid",
    "And made up charity work I never even did",

    "I must have cheated on my tax forms at least a hundred times",
    "So many clever tricks I can't fit them all into rhymes",
    "Yoshi is my name, money laundering is my game",
    "And committing tax fraud is worth every single dime",

    "I'm a tax dodging badass, I don't play by the rules",
    "I make the government look like a bunch of damn fools",
    "I keep 99 cents of every dollar that I make",
    "Nothing makes me cum faster than a good old tax break",

    "I hate paying taxes if there's anything I hate",
    "I supported Ron Paul back in 2008",
    "You might think it's unfair that I don't have to pay",
    "But it's okay, because taxation is theft anyway"
];

function command(message) {
    for (var i = 0; i < lyrics.length; i++) {
        message.channel.send(lyrics[i]);
    }
}

module.exports = { command };