const Discord = require("discord.js");
const fetch = require('node-fetch')
const config = require("./config.json")
const bot = require("./SpeedyBot.js")

var ban = '450059554802237461'
var promote = '485866359289413632'
var verify = '437322745651396630'

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