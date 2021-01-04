const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite PunX_System to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setThumbnail('https://i.imgur.com/gwoLTim.png')
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
