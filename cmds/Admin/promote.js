const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')
const tscout = msg.guild.roles.get(config.scoutrole.tscout.id)
const scout = msg.guild.roles.get(config.scoutrole.scout.id);
const hscout = msg.guild.roles.get(config.scoutrole.hscout.id);

module.exports.run = async (client, msg, args) => {
    const member = msg.mentions.members.first()
        if (member) {
            if (!member.roles.has(tscout.id) && !member.roles.has(scout.id)) {
                msg.reply('That person can\'t be promoted!')
            } else if (!member.roles.has(scout.id) && !member.roles.has(hscout.id)) {
                member.removeRole(tscout)
                member.addRole(scout)
                l.log('promotion', 'Promoted <@' + msg.mentions.users.first().id + '> to scout', client)
                return msg.react('✅');
            } else if (!member.roles.has(hscout)){
                member.removeRole(scout)
                member.addRole(hscout)
                l.log('promotion', 'Promoted <@' + msg.mentions.users.first().id + '> to head scout', client)
                return msg.react('✅');
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