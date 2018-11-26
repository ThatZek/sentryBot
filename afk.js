const Discord = require("discord.js");
const config = require("./config.json")

var testRunLead = null;
var testAfk = false;
var currentAfk = null;
var output = config.output;
var testHasKey = [];
var testRunUsers = [];
var testRun = false;

module.exports = {
    misc: function misc(client, msg) {
        if (testAfk = false) {
            testAfk = true;
            testRunLead = rl;
            //testRunUsers.push(testRunLead)
            /*client.channels.get(output).send('@here').then(msg => {
                msg.delete()
            })*/
            client.channels.get(output).send({
                embed: {
                    color: 3447003,
                    title: 'TEST AFK STARTING',
                    description: '<@' + testRunLead + `> is starting an AFK check!  Join queue then react with ✅ to join!`
                }
            }).then(async msg => {
                currentAfk = msg.id;
                await msg.react('✅')
                await msg.react(client.emojis.get('514208936874737675'))
                await msg.react('❌')
                const filter = (reaction, user) => reaction.emoji.name === '✅' && user.id !== '480772132456890379' || reaction.emoji.name === '❌' && user.id === testRunLead || reaction.emoji.id === '514208936874737675' && user.id !== '480772132456890379'
                const collector = msg.createReactionCollector(filter, { time: 240000 })
                collector.on('collect', r => {
                    if (r.emoji.name === '✅') {
                        console.log(`${r.users.last().id}`)
                        testRunUsers.push(r.users.last().id)
                    } else if (r.emoji.name === '❌') {
                        endAfk(msg);
                        collector.stop();
                    } else if (r.emoji.id === '514208936874737675') {
                        testHasKey.push(r.users.last().id)
                    }
                });
                collector.on('end', collected => {
                    if (testAfk === true) {
                        let outputRL = rl;
                        endAfk(msg, outputRL, collector);
                    }
                });

            })
        } else {
            msg.reply('There is already an afk check up!').catch(console.error)
        }
    },
    end: function endAfk(message, rl, collector, client) {
        if (testAfk = true) {
            testAfk = false;
            if (collecter !== null) { collector.stop(); }
            client.channels.get(output).fetchMessage(currentAfk).then(msg => {
                msg.edit({
                    embed: {
                        color: 3447003,
                        title: 'TEST AFK HAS ENDED',
                        description: 'You missed the AFK check!  Make sure to join queue and react with ✅!'
                    }
                })
                for (var i = 0; i < testRunUsers.length; i++) {
                    message.guild.members.get(testRunUsers[i]).setVoiceChannel(testChannel);
                }
                rl.send('These people reacted with a key:')
                if (testHasKey > 0) {
                    for (var i = 0; i < testHasKey.length; i++) {
                        rl.send('<@' + testHasKey[i] + '>');
                    }
                }
            });
        } else {
            msg.reply('There is no test afk currently up!')
        }
    },
    abort: function abortAfk(client, msg) {
    if(testAfk === true) {
    msg.react('✅')
    client.channels.get(output).fetchMessage(currentAfk).then(msg => {
        msg.edit({
            embed: {
                color: 3447003,
                title: 'TEST AFK ABORTED',
                description: `This is most likely due to no one reacting with a key!`
            }
        });
    });
    testAfk = false;
} else {
           msg.reply(" there isn't currently an afk check up!")
        }
    },
    endRun: function endRun(client, msg) {
        if (testRun === true) {
            testRun === false;
        } else {
            msg.reply('There is not currently a run going!')
        }
    }
    }