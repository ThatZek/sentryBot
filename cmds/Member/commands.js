module.exports.run = async (client, msg, args) => {
    let theCMDs = '**The commands you can use:**\n\n';
    const member = await msg.guild.fetchMember(msg.author);
    try {
        client.commands.forEach((value, key) => {
            if (key === 'commands' || key === 'verification') {
                return true;
            }

            value = value.help;
            const role = msg.guild.roles.get(value.role);

            if (role) {
                if (role.position <= member.highestRole.position) {
                    theCMDs += `!${key} ${value.usage}- ${value.desc}\n`;
                    if (value.example.length > 0) {
                        theCMDs += `\`Example: !${key} ${value.example}\`\n\n`;
                    } else {
                        theCMDs += `\n`;
                    }
                }
            } else {
                if (value.role === 'everyone') {
                    theCMDs += `!${key} ${value.usage}- ${value.desc}\n`;
                    if (value.example.length > 0) {
                        theCMDs += `\`Example: !${key} ${value.example}\`\n\n`;
                    } else {
                        theCMDs += `\n`;
                    }
                }
            }

            if (theCMDs.length > 1800) {
                msg.channel.send(theCMDs);
                theCMDs = "";
            }
        });
    } catch (e) {
        console.log(e);
    }

    msg.channel.send(theCMDs);
}

module.exports.help = {
    name: 'commands'
}