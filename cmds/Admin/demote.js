const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')
const tscout = msg.guild.roles.get(config.scoutrole.tscout.id)
const scout = msg.guild.roles.get(config.scoutrole.scout.id);
const hscout = msg.guild.roles.get(config.scoutrole.hscout.id);

module.exports.run = async (client, msg, args) => {
    const member = msg.mentions.members.first();
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