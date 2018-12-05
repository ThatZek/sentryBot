const Discord = require("discord.js");

module.exports.run = async (client, msg, args) => {
    const sentence = args.toString();
    const outputChannel = client.channels.get(msg.channels)
    outputChannel.send(sentence)
    console.log(msg.author.name + ' printed: ' + sentence)
}

module.exports.help = {
    name: 'say',
    role: config.modrole,
    usage: '`message`',
    desc: `prints a message to the current channel`,
    example: 'Hello World!'
}