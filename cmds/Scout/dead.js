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
    pubVar.killcount = parseInt(killcount, 10) + 1;
    const cloak = client.emojis.get('431954264785682443');
    const sentry = client.emojis.get('431954057691791372');
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);


    const countMsg = new Discord.RichEmbed()
        .setAuthor(`Sentry Clean-Up Crew`, client.user.avatarURL)
        .setFooter(`Created by That "One" Turtle#1123`)
        .setThumbnail(msg.guild.iconURL)
        .setTimestamp(new Date(Date.now()))
        .setURL('https://discord.gg/x82h6wr')
        .addField(`**Sentries Killed:** ${sentry}:`, `${pubVar.killcount}`)
        .addField(`**Cloaks Dropped:** ${cloak}:`, `${pubVar.cloaks}`)
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