const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')

module.exports.run = async (client, msg, args) => {
    let role = msg.guild.roles.get(config.callouts)
    if (!msg.member.roles.has(callouts.id)) {
        msg.member.addRole(callouts)
    } else {
        msg.member.removeRole(callouts)
    }
    msg.react('✅')
}

module.exports.help = {
    name: 'callouts',
    role: config.Memberrole,
    usage: '',
    desc: `Gives the callouts role`,
    example: ''
}
