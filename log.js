const Discord = require("discord.js");
const fetch = require('node-fetch')
const config = require("./config.json")
const bot = require("./SpeedyBot.js")

const client = bot.client

var ban = config.Banlog
var promote = config.Promotelog

module.exports = {
    log: function log(type, msg) {
        if (type = 'ban') {
            client.channels.get(ban).send(msg)
        } else if (type = 'promote') {
            client.channels.get(promote).send(msg)
        } else if (type = 'verify') {
            client.channels.get(verify).send(msg)
        }

    }
}