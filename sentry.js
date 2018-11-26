const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./config.json");
const l = require('./log.js');
const bot = require("./SpeedyBot.js")
const client = bot.client

var output = config.output
var currentSentry = null;

module.exports = {
    newsentry: function newSentry(args, msg) {
        if (currentSentry === null) {

        } else {
            
        }
    },
    killsentry: function killSentry() {

    }
}