const Discord = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (client, msg, args) => {
    const member = msg.mentions.members.first();
    const tscout = msg.guild.roles.get(config.scoutrole)
    const scout = msg.guild.roles.get('431946137071648768');
    const hscout = msg.guild.roles.get('450119310615117824');
        if (member) {
            if (member.roles.has(tscout)) {
                member.removeRole(tscout.id);
                msg.guild.channels.get('485866359289413632').send(`${member} has been demoted from Trial Scout`);
            }else if (member.roles.has(scout.id)) {
                member.removeRole(scout);
                member.addRole(tscout)
                msg.guild.channels.get('485866359289413632').send(`${member} has been demoted from Official Scout`);
            } else if (member.roles.has(hscout.id)){
                member.removeRole(hscout);
                member.addRole(scout);
                msg.guild.channels.get('485866359289413632').send(`${member} has been demoted from Head Scout`);
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