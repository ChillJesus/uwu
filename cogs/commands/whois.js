const Discord = require('discord.js');
const variables = require('../variables.js');

module.exports = {
  send: async function(msg) {
    let target = await msg.mentions.users.first().fetch();
    console.log(target)
    if (target == 'undefined') {
      try {
        await msg.channel.send("Please mention a user");
        return;
      } catch(error) {
        console.log("Couldn't perform whois");
        console.log(error);
        return;
      }
    }
    try {
      // createdTimestamp, defaultAvatarURL, discriminator,
      // flags, lastMessageChannelID, lastMessageID,
      // presence, system, tag
      //console.log(await target.fetchFlags().toArray());
      mbd = new Discord.MessageEmbed()
        .setTitle(target.username)
        .setDescription(target.id)
        .setThumbnail(await target.avatarURL())
        .setColor("#FFFFFF")
        .setFooter(await variables.footer(), await variables.footerImage())
        .addFields({
          name: "Is Bot",
          value: target.bot,
          inline: true
        },{
          name: "Created At",
          value: target.createdAt,
          inline: true
        },{
          name: "Locale",
          value: target.locale,
          inline: true
        },{
          name: "Presence",
          value: target.presence.status,
          inline: true
        },{
          name: "Is System",
          value: target.system,
          inline: true
        //},{
          //name: "Flags",
          //value: await target.fetchFlags().toArray(),
          //inline: true
        });
      try {
        mbd.addFields({
          name: "Last Message",
          value: target.lastMessage.content,
          inline: true
        },{
          name: "Channel",
          value: target.lastMessage.channel,
          inline: true
        },{
          name: "Time",
          value: target.lastMessage.createdAt,
          inline: true
        })
      } catch(error) {
        console.log("Couldnt retrieve last message");
        console.log(error);
      }
      await msg.channel.send({embed: mbd});
      return;
    } catch(error) {
      console.log("Could not send whois data");
      console.log(error);
      return;
    }
  }
}
