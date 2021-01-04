const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');

module.exports = class SupportServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'supportserver',
      aliases: ['support', 'ss'],
      usage: 'supportserver',
      description: 'Displays the invite link to PunX_System Discord Support Server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Support Server')
      .setThumbnail('https://i.imgur.com/gwoLTim.png')
      .addField('Other Links', 
        '**[Invite Me](https://discordapp.com/oauth2/authorize?client_id=751100712829714502&scope=bot&permissions=403008599)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
