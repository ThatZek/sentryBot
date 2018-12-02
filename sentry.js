const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./config.json");
const l = require('./log.js');
const bot = require("./SpeedyBot.js")
const pubVar = require("./accrossInstance.json")

var output = config.output
var theserver = null;
var realm = null;

module.exports = {
    newsentry: function newSentry(args, msg, client) {
        if (pubVar.currentSentry === null) {
            let string = null;
            if (args.length !== 2) return;
            let server = args.shift().toLowerCase();
            let realmArg = args.shift();
            if (server == "usw3")
				theserver = "USWest3";
			else if (server == "usw2")
				theserver = "USWest2";
			else if (server == "usw")
				theserver = "USWest";
			else if (server == "ussw")
				theserver = "USSouthWest";
			else if (server == "uss3")
				theserver = "USSouth3";
			else if (server == "uss2")
				theserver = "USSouth2";
			else if (server == "uss")
				theserver = "USSouth";
			else if (server == "usmw2")
				theserver = "USMidWest2";
			else if (server == "usmw")
				theserver = "USMidWest";
			else if (server == "usnw")
				theserver = "USNorthWest";
			else if (server == "use3")
				theserver = "USEast3";
			else if (server == "use2")
				theserver = "USEast2";
			else if (server == "use")
				theserver = "USEast";
			else if (server == "euw2")
				theserver = "EUWest2";
			else if (server == "euw")
				theserver = "EUWest";
			else if (server == "eusw")
				theserver = "EUSouthWest";
			else if (server == "eus")
				theserver = "EUSouth";
			else if (server == "eun2")
				theserver = "EUNorth2";
			else if (server == "eun")
				theserver = "EUNorth";
			else if (server == "ase")
				theserver = "AsiaSouthEast";
			else if (server == "eue")
				theserver = "EUEast";
			else if (server == "ae")
				theserver = "AsiaEast";
			else if (server == "aus" || server == "au")
				theserver = "Australia";

            console.log(serverArg);
            string = theserver + ' ' + realmArg
            client.channels.get(output).send('<@&491732360644132894>').then(msg => msg.edit({
                embed: {
                    color: 3447003,
                    title: 'A sentry has been found in ' + string + '!'
                }
            })).then(msg => {
                pubVar.currentSentry = msg.id
            })
        } else {
            msg.reply('There is already a sentry up!')
        }
    },
    killsentry: function killSentry(client) {
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
}
