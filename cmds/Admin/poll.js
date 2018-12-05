const config = require("../../config.json");
const discord = require("discord.js")

module.exports.run = async (client, msg, args) => {
    msg.reply('**IN DEVELOPMENT!**')
}

module.exports.help = {
    name: 'poll',
    role: config.modrole,
    usage: '`Question`',
    desc: `Creates a poll with the question`,
    example: 'Is this a cool poll?'
}