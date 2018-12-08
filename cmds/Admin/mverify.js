const config = require("../../config.json");
const discord = require("discord.js")

module.exports.run = async (client, msg, args) => {
    const member = msg.mentions.members.first()
    const user = msg.mentions.users.first()
    const username = args[1];
    member.addRole(veriRole)
    member.setNickname(username).catch(console.error);
    msg.channel.send('Manually Verified ' + user)
    veriLog(user, client)
}

module.exports.help = {
    name: 'mverify',
    role: config.modrole,
    usage: '`User` `Nickname`',
    desc: `Manually verifies a user`,
    example: '@That "One" Turtle#1123 Zekhersas'
}

function veriLog(user, client) {
    client.channels.get('437322745651396630').send(user + ' was manually verified! Their Realmeye: https://www.realmeye.com/player/' + username)
}