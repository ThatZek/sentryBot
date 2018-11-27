const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./config.json");
const l = require('./log.js');
const bot = require("./SpeedyBot.js")
const client = bot.client

var output = config.output
var currentSentry = null;
var server = null;
var realm = null;

module.exports = {
    newsentry: function newSentry(args, msg) {
        if (currentSentry === null) {
            let string = null;
            if (args.length !== 2) return;
            argCompute(args[0]).then(string = server + ' ' + args[1])
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
    killsentry: function killSentry() {
        if (currentSentry !== null) return;
        client.channels.get(output).fetchMessage(currentSentry).then(msg => {
            msg.delete()
        })
        currentSentry = null
    }
}

function argCompute(serverInit) {
    const serverArg = serverInit.toLowerCase();

    //US, EU, Asia?
    if (serverArg.startsWith('us')) {
        serverArg = serverArg.slice(2);
        //Area?
        if (serverArg.startsWith('w')) {
            serverArg = serverArg.slice(1)
            //Which one?
            if (serverArg.startsWith('1')) {
                server = 'US West'
            } else if (serverArg.startsWith('2')) {
                server = 'US West 2'
            } else if (serverArg.startsWith('3')) {
                server = 'US West 3'
            }
        } else if (serverArg.startsWith('e')) {
            serverArg = serverArg.slice(1)
            //Which one?
            if (serverArg.startsWith('1')) {
                server = 'US East'
            } else if (serverArg.startsWith('2')) {
                server = 'US East 2'
            } else if (serverArg.startsWith('3')) {
                server = 'US East 3'
            }
        } else if (serverArg === 'sw') {
            server = 'US South West'
        } else if (serverArg.startsWith('s')) {
            serverArg = serverArg.slice(1)
            //Which one?
            if (serverArg.startsWith('1')) {
                server = 'US South'
            } else if (serverArg.startsWith('2')) {
                server = 'US South 2'
            } else if (serverArg.startsWith('3')) {
                server = 'US South 3'
            }
        } else if (serverArg === 'nw') {
            server = 'US NorthWest'
        } else if (serverArg.startsWith('mw')) {
            serverArg = serverArg.slice(1)
            //Which one?
            if (serverArg.startsWith('1')) {
                server = 'US MidWest'
            } else if (serverArg.startsWith('2')) {
                server = 'US MidWest 2'
            }
        }
    } else if (serverArg.startsWith('eu')) {
        serverArg = serverArg.slice(2);
        if (serverArg.startsWith('w')) {
            serverArg = serverArg.slice(1)
            if (serverArg.startsWith('1')) {
                server = 'EU West'
            } else if (serverArg.startsWith('2')) {
                server = 'EU West 2'
            }
        } else if (serverArg.startsWith('n')) {
            serverArg = serverArg.slice(1)
            if (serverArg.startsWith('1')) {
                server = 'EU North'
            } else if (serverArg.startsWith('2')) {
                server = 'EU North 2'
            }
        } else if (serverArg.startsWith('sw')) {
            server = 'EU SouthWest'
        } else if (serverArg.startsWith('e')) {
            server = 'EU East'
        } else if (serverArg.startsWith('s')) {
            server = 'EU South'
        }

    } else if (serverArg.startsWith('a')) {
        serverArg = serverArg.slice(1)
        if (serverArg === 'se') {
            server = 'Asia SouthEast'
        } else if (serverArg = 'e') {
            server = 'Asia East'
        }
    } else {
        return;
    }
    }
