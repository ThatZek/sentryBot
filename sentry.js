const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./config.json");
const l = require('./log.js');
const bot = require("./SpeedyBot.js")

var output = config.output
var currentSentry = null;
var server = null;
var realm = null;

module.exports = {
    newsentry: function newSentry(args, msg, client) {
        if (currentSentry === null) {
            let string = null;
            if (args.length !== 2) return;
            let serverArg = args.shift().toLowerCase();
            let realmArg = args.shift();
            console.log(serverArg);
            string = serverArg + ' ' + realmArg
            client.channels.get(output).send({
                embed: {
                    color: 3447003,
                    title: 'A sentry has been found in ' + string + '!'
                }
            }).then(msg => {
                currentSentry = msg.id
            })
        } else {
            msg.reply('There is already a sentry up!')
        }
    },
    killsentry: function killSentry(client) {
        if (currentSentry !== null) return;
        client.channels.get(output).fetchMessage(currentSentry).then(msg => {
            msg.delete()
        })
        currentSentry = null
    }
}
