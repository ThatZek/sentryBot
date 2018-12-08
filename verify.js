const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./config.json");
const l = require('./log.js');
const bot = require("./SpeedyBot.js")

module.exports = {
    verify: function verify(user, server, member, client) {

        const veriRole = server.roles.get(config.member);
        let string = "SCUC" + Math.floor(Math.random(11111) * 99999);
        user.send('Please put the following code ALONE in any of your realmeye description lines!')
            .then(user.send({
                embed: {
                    color: 3447003,
                    title: string,
                }
            })
                .then(user.send('Please reply with your ROTMG username once your description has been updated!')
                )).then(message => {
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === user.id);
                    collector.on('collect', msg => {
                        let username = msg.content.trim()
                        msg.channel.send("I will now finish the verification process!");
                        fetch('http://www.tiffit.net/RealmInfo/api/user?u=' + username + '&f=c')
                            .then(res => res.json())
                            .then(json => {
                                if (json.description[0] = string) {
                                    collector.stop();
                                    member.addRole(veriRole)
                                    member.setNickname(username)
                                        .catch(console.error);
                                    msg.channel.send('You are now verified!')
                                    veriLog(user, client)
                                } else if (json.description[1] = string) {
                                    collector.stop();
                                    member.addRole(veriRole)
                                    member.setNickname(username)
                                        .catch(console.error);
                                    msg.channel.send('You are now verified!')
                                    veriLog(user, client)                                
                                } else if (json.description[2] = string) {
                                    collector.stop();
                                    member.addRole(veriRole)
                                    member.setNickname(username)
                                        .catch(console.error);
                                    msg.channel.send('You are now verified!')
                                    veriLog(user, client)
                                } else {
                                    return veriErr(user, client);
                                }
                            })
                    });
                }
                )
    }
}

function veriLog(user, client) {
    client.channels.get('437322745651396630').send(user + ' was verified successfully! Their Realmeye: https://www.realmeye.com/player/' + username)
}

function veriErr(user, client) {
    client.channels.get('437322745651396630').send(user + ' was verified unsuccessfully! Their Realmeye: https://www.realmeye.com/player/' + username)
}