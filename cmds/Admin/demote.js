const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')
const scoutrole = config.scoutrole;

module.exports.run = async (bot, msg, args) => {
    const member = msg.mentions.members.first();
    const tscout = msg.guild.roles.get(scoutrole[0])
    const scout = msg.guild.roles.get(scoutrole[1]);
    const hscout = msg.guild.roles.get(scoutRoles[2]);
        if (member) {
            if (member.roles.has(tscout)) {
                member.removeRole(tscout);
                l.log('promotion', 'Demoted <@' + msg.mentions.users.first().id + '> from trial scout', client);
            }else if (member.roles.has(scout)) {
                member.removeRole(scout);
                member.addRole(tscout)
                l.log('promotion', 'Demoted <@' + msg.mentions.users.first().id + '> from scout', client);
                return msg.react('✅');
            } else if (member.roles.has(hscout)){
                member.removeRole(hscout);
                member.addRole(scout);
                l.log('promotion', 'Demoted <@' + msg.mentions.users.first().id + '> from head scout', client);
                return msg.react('✅');
            }else {
                return msg.reply('That person can\'t be demoted!');
            }
        } else {
                return msg.reply(' You need to mention someone!');
        }
}

module.exports.help = {
    name: 'demote',
    role: config.modrole,
    usage: '`User`',
    desc: `demotes mentioned user`,
    example: '@That "One" Turtle#1123'
}