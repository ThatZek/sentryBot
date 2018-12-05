const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')

module.exports.run = async (client, msg, args) => {
    const user = msg.mentions.users.first();
        args.shift()
        const reason = args.toString(' ')
        if (user) {
            const member = msg.guild.member(user);
            if (member) {
                member.ban(reason).then(() => {
                    msg.reply(`Successfully banned ${user.tag}`);
                    user.send(`You have been banned for: ${reason}`)
                    client.channels.get('450059554802237461').send({
                        embed: {
                        color: 16312092,
                        title: '**Action:** Ban',
                        description: 'Reason: ' + reason + '\n User: ' + user.tag,
                        author: {
                            name: msg.author.tag,
                            icon_url: msg.author.icon_url
                        }
                    }
                })
                }).catch(err => {
                    msg.reply('I was unable to ban the member');
                    console.error(err);
                });
            } else {
                msg.reply('That user isn\'t in this server!');
            }
        } else {
            msg.reply('You didn\'t mention the user to ban!');
        }
}

module.exports.help = {
    name: 'ban',
    role: config.modrole,
    usage: '`User`',
    desc: `kicks mentioned user`,
    example: '@That "One" Turtle#1123'
}