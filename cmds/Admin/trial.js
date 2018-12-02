const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')
const scoutrole = config.scoutrole;

module.exports.run = async (client, msg, args) => {
    const member = msg.mentions.members.first();
    const role = msg.guild.roles.get(scoutrole[0]);
        if (member) {
            if (!member.roles.has(role)) {
                member.addRole(role)
                l.log('promotion', 'Promoted <@' + msg.mentions.users.first().id + '> to trial scout', client)
                return msg.react('✅');
            } else {
                return msg.reply(' That person already is a scout!');
            }
        } else {
                return msg.reply(' You need to mention someone!');
        }
}

module.exports.help = {
    name: 'promote',
    role: config.modrole,
    usage: '`User`',
    desc: `Promotes mentioned user`,
    example: '@That "One" Turtle#1123'
}