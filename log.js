const Discord = require("discord.js");
const fetch = require('node-fetch')
const config = require("./config.json")
const bot = require("./SpeedyBot.js")

var ban = config.Banlog
var promote = config.Promotelog
var verify = config.Verifylog

module.exports = {
    log: function log(type, msg, client) {
        if (type = 'ban') {
            client.channels.get(ban).send(msg)
        } else if (type = 'promote') {
            client.channels.get(promote).send(msg)
        } else if (type = 'verify') {
            client.channels.get(verify).send(msg)
        }

    }
}