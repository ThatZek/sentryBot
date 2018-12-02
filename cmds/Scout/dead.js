const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./config.json");
const l = require('../../log.js');
const bot = require("../../SpeedyBot.js")
const pubVar = require("./accrossInstance.json")


module.exports.run = async (client, msg, args) => {
    if (pubVar.currentSentry === null) return;
    client.channels.get(output).fetchMessage(pubVar.currentSentry).then(msg => {
        msg.edit({
            embed: {
                color: 3447003,
                title: 'This sentry has been slain!'
            }
        })
    })
    pubVar.currentSentry = null;
}

module.exports.help = {

}