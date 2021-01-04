const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['gh', 'repo'],
      usage: 'github',
      description: 'Displays the link to PunX_System GitHub repository.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('GitHub Link')
      .setThumbnail('https://i.imgur.com/gwoLTim.png')
      .setDescription(oneLine`
        Next Update
      `)
      .addField('Other Links',
        '**[Invite Me](https://discordapp.com/oauth2/authorize?client_id=751100712829714502&scope=bot&permissions=403008599)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
