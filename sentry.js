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
            if (serverArg === 'usw') {
                serverArg === 'US West'
            } else if (serverArg === 'usw2') {
                serverArg = 'US West 2'
            } else if (serverArg === 'usw3') {
                serverArg = 'US West 3'
            }else if (serverArg === 'usnw') {
                serverArg = 'US NorthWest'
            } else if (serverArg === 'use') {
                serverArg = 'US East'
            } else if (serverArg === 'use2') {
                serverArg = 'US East 2'
            } else if (serverArg === 'use3') {
                serverArg = 'US East 3'
            } else if (serverArg === 'ussw') {
                serverArg = 'US SouthWest'
            } else if (serverArg === 'uss') {
                serverArg = 'US South'
            } else if (serverArg === 'uss2') {
                serverArg = 'US South 2'
            } else if (serverArg === 'usmw') {
                serverArg = 'US MidWest'
            } else if (serverArg === 'usmw2') {
                serverArg = 'US MidWest 2'
            } else if (serverArg === 'euw') {
                serverArg = 'EU West'
            } else if (serverArg === 'euw2') {
                serverArg = 'EU West 2'
            } else if (serverArg === 'eusw') {
                serverArg = 'EU SouthWest'
            } else if (serverArg === 'eus') {
                serverArg = 'EU South'
            } else if (serverArg === 'eun') {
                serverArg = 'EU North'
            } else if (serverArg === 'eun2') {
                serverArg = 'EU North 2'
            } else if (serverArg === 'eue') {
                serverArg = 'EU East'
            } else if (serverArg === 'aus') {
                serverArg = 'Australia'
            } else if (serverArg === 'ase') {
                serverArg = 'Asia SouthEast'
            } else if (serverArg === 'ae') {
                serverArg = 'Asia East'
            }

            console.log(serverArg);
            string = serverArg + ' ' + realmArg
            client.channels.get(output).send('<@&491732360644132894>').then(msg => msg.edit({
                embed: {
                    color: 3447003,
                    title: 'A sentry has been found in ' + string + '!'
                }
            })).then(msg => {
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
