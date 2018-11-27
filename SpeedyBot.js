//modules
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')
const config = require("./config.json")
const v = require('./verify.js')
const l = require('./log.js');
const sentry = require('./sentry.js')

module.exports = {
    client: client
}

//vars
var modRole = '431951465700130816'
var callouts = '491732360644132894'
var scoutRoles = ['431950915419897866', '431946137071648768','450119310615117824'];
var prefix = '!';
var output = config.output;
var Promotelog = config.Promotelog;
var Banlog = config.Banlog;
var dad = '498540074049208330';
var veriRole = '431951529847816202';

//init
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Current prefix is: ' + prefix)
    console.log('Current output chanel is:' + output)
    client.user.setActivity("with my dad!");
});

//commands
client.on('message', msg => {
    if (msg.content === 'verify') {
        if (!msg.member.roles.has(veriRole)) {
            v.verify(msg.author, msg.guild, msg.member, client)
        }
        msg.delete()
    }
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
        msg.reply('Pong!');
    } else if (command === 'trial' && msg.member.roles.has(modRole)) {
        if (msg.mentions.members.first() !== undefined) {
            const person = msg.mentions.members.first();
            let role = msg.guild.roles.get("431950915419897866");
            if (!person.roles.has(role)) {
                person.addRole(role)
                l.log('promotion', 'Promoted <@' + msg.mentions.users.first().id + '> to trial scout', client)
                msg.react('✅')
            } else {
                msg.reply(' That person already is a scout!')
            }
        } else {
            msg.reply(' You need to mention someone!')
        }
    } else if (command === 'demote' && msg.member.roles.has(modRole)) {
        if (msg.mentions.members.first() !== undefined) {
            let role = null;
            const person = msg.mentions.members.first();
            if (person.roles.has('431950915419897866')) {
                role = msg.guild.roles.get("431950915419897866");
                person.removeRole(role)
                l.log('promotion', 'Demoted <@' + msg.mentions.users.first().id + '> from trial scout', client)
                msg.react('✅')
            } else if (person.roles.has('431946137071648768')) {
                role = msg.guild.roles.get("431950915419897866");
                person.removeRole(role)
                l.log('promotion', 'Demoted <@' + msg.mentions.users.first().id + '> from trial scout', client)
                msg.react('✅')
            } else {
                msg.reply(' That person isnt a scout!')
            }
        } else {
            msg.reply(' You need to mention someone!')
        }
    } else if (command === 'sentry') {
        if (msg.member.roles.has(scoutRoles[0]) || msg.member.roles.has(scoutRoles[1]) || msg.member.roles.has(scoutRoles[2]))
        sentry.newsentry(args, msg, client)
        msg.react('✅')
    } else if (command === 'dead') {
        sentry.killsentry(client)
        msg.react('✅')
    } else if (command === 'callouts') {
        let role = msg.guild.roles.get(callouts)
        if (!msg.member.roles.has(callouts)) {
            msg.member.addRole(callouts)
        } else {
            msg.member.removeRole(callouts)
        }
        msg.react('✅')
    }
});

//Functions

//Login
client.login(config.token);