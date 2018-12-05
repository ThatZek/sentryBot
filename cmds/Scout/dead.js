const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("../../config.json");
const l = require('../../log.js');
const bot = require("../../SpeedyBot.js")
const pubVar = require("../../accrossInstance.json")
const output = config.output

module.exports.run = async (client, msg, args) => {
    if (pubVar.currentSentry === null) return;
    client.channels.get(output).fetchMessage(pubVar.currentSentry).then(msg => {
        msg.delete()
        })
    killcount = pubVar.killcount;
    pubVar.killcount = killcount.parseInt() + 1;
    savepubVar();
    const cloak = bot.emojis.get('431954264785682443');
    const sentry = bot.emojis.get('431954057691791372');
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);


    const countMsg = new Discord.RichEmbed()
        .setAuthor(`Sentry Clean-Up Crew`, bot.user.avatarURL)
        .setFooter(`Created by That "One" Turtle#1123`)
        .setThumbnail(msg.guild.iconURL)
        .setTimestamp(new Date(Date.now()))
        .setURL('https://discord.gg/x82h6wr')
        .addField(`**Sentries Killed:** ${sentry}:`, `${config.killcount}`)
        .addField(`**Cloaks Dropped:** ${cloak}:`, `${config.cloaks}`)
        .addField(`**Most Calls:**`, `${sentry} ${mostCallerMember} ${sentry}: **${mostCalls}**`)
        .setColor([red, green, blue]);
    client.channels.get(output).fetchMessage(config.statsmsg).then(msg => {
        msg.edit(countMsg);
    })
    pubVar.currentSentry = null;
}

module.exports.help = {
    name: 'dead',
    role: config.scoutrole,
    usage: '',
    desc: `Kills the last called sentry`,
    example: ''
}