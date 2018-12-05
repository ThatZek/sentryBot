//modules
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')
const config = require("./config.json")
const v = require('./verify.js')
const l = require('./log.js');
const poll = require('./poll.js')
const fs = require("fs")

//vars
var modRole = '431951465700130816'
var callouts = '491732360644132894'
var scoutRoles = ['431950915419897866', '431946137071648768','450119310615117824'];
var prefix = config.prefix;
var output = config.output;
var Promotelog = config.Promotelog;
var Banlog = config.Banlog;
var dad = '498540074049208330';
var veriRole = '431951529847816202';

client.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, folders) => {
	if (err) throw err;

	for (let i = 0; i < folders.length; i++) {
		fs.readdir(`./cmds/${folders[i]}`, (e, files) => {
			let jsfiles = files.filter(f => f.split(".").pop() === 'js');
			if (jsfiles.length < 1) {
				console.log(`No commands in ${folders[i]}`);
				return;
			}

			jsfiles.forEach((file) => {
				let properties = require(`./cmds/${folders[i]}/${file}`);
				console.log(`Loaded ${file}`);
				bot.commands.set(properties.help.name, properties);
			})
		})
	}
})

//init
client.on('ready', () => {
    console.log(config)
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Current prefix is: ' + prefix)
    console.log('Current output chanel is:' + output)
    client.user.setActivity('Hallmark Movies', { type: "WATCHING" });
});


client.on('message', msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (msg.content === 'verify') {
        if (!msg.member.roles.has(veriRole)) {
            v.verify(msg.author, msg.guild, msg.member, client)
        }
        msg.delete()
    }
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    if (command === 'ping') {
        msg.reply('Pong!');
    } 
    const cmd = client.commands.get(command);
    if (cmd) {
		if (cmd.help.role) {
			if (cmd.help.role === 'owner') {
				if (msg.author.id !== msg.guild.ownerID && msg.author.id !== '340867390541922304') {
					return msg.reply(`Only server owner can use this command.`);
				}
			} else {
				const role = msg.guild.roles.get(cmd.help.role);
				const member = msg.member;
				if (role) {
					if (role.position > member.highestRole.position) return msg.reply(`You cannot use this command as you do not have the ${cmd.help.role} role`);
				}
			}
		}
		cmd.run(client, msg, args);
	}
});

//Functions

//Login
client.login(config.token);