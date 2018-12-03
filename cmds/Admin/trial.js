const Discord = require("discord.js");
const config = require("../../config.json");
const l = require('../../log.js')
const scoutrole = config.scoutrole;

module.exports.run = async (client, msg, args) => {
	const scouter = msg.mentions.members.first();
	if (!scouter) return msg.reply(`You are incorrectly using the !trialscout command. Please follow up the command with a @UserToPromote`);
	const trialRole = msg.guild.roles.find('name', 'Trial Scout');
	if (scouter.roles.exists('name', trialRole.name)) return msg.reply(`${scouter} already has the Trial Scout role`);
	scouter.addRole(trialRole);
	msg.react(`✅`);
	msg.guild.channels.get('485866359289413632').send(`${scouter} has been promoted to Trial Scout`);
}

module.exports.help = {
    name: 'promote',
    role: config.modrole,
    usage: '`User`',
    desc: `Promotes mentioned user`,
    example: '@That "One" Turtle#1123'
}