const Discord = require("discord.js");
const config = require("./config.json");
const l = require('./log.js');
const bot = require("./SpeedyBot.js")

module.exports = {
    newpoll: function newPoll(client, msg, args) {
        let time;
        if (args.length > 1) {
            time = args.shift();
        }
        let poll = args;
        let pollMsg;
    }
}