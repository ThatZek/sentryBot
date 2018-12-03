const config = require("../../config.json");

module.exports.run = async (client, msg, args) => {
	const scouter = msg.mentions.members.first();
	if (!scouter) return msg.reply(`You are incorrectly using the !trialscout command. Please follow up the command with a @UserToPromote`);
	const trialRole = msg.guild.roles.get(config.scoutrole);
	if (scouter.roles.has(trialRole.id)) return msg.reply(`${scouter.name} already has the scouter role!`)
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