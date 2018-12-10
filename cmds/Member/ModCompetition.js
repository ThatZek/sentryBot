const Discord = require('discord.js')
const config = require("../../config.json")
module.exports.run = async (client, msg, args) => {
  if (args[0] === config.modcomp[0] && args[1] === config.modcomp[1] && args[2] === config.modcomp[2]) {
    let member = msg.member;
    let user = msg.author;
    user.send('Your guess was Correct!');
    member.kick("Your Guess was Correct!");
  }else {
    msg.reply('Your guess was incorrect')
    msg.delete();
  }
}

module.exports.help = {
name: '62013',
role: config.memberrole
}
