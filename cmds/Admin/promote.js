const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')
const scoutrole = config.scoutrole;

module.exports.run = async (bot, msg, args) => {
    const member = msg.mentions.members.first();
    const scout = msg.guild.roles.get(scoutrole[1]);
    const hscout = msg.guild.roles.get(scoutrole[2]);
        if (member) {
            if (!member.roles.has(scoutrole[0])) return msg.reply('That person isn\t a scout!')
            if (!member.roles.has(scout)) {
                member.addRole(scout)
                l.log('promotion', 'Promoted <@' + msg.mentions.users.first().id + '> to scout', client)
                return msg.react('✅');
            } else if (!member.roles.has(hscout)){
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