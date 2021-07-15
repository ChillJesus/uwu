const Discord = require('discord.js');

const channelRegex = new RegExp("^[0-9]{18}$");

module.exports = {
  send: async function(msg, disClient) {
    let readServers = [];
    let readMessages = [];
    let readMessagesCount = 5;
    let readServerID;
    let channelNames = [];
    if ( flags[2] == 'servers') {
      disClient.guilds.cache.forEach((guild => {
        readServers.push({name: guild.name, value: guild.id});
        //await msg.channel.send(`Name: ${guild.name}\tID: ${guild.id}`);
      }));
      let mbd = new Discord.MessageEmbed()
        .setTitle("Current Servers")
        .setDescription(`Currently in ${readServers.length} servers`)
        .addFields(readServers);
      try {
        await msg.channel.send({embed: mbd});
        //await msg.channel.send(readServers);
      } catch { return; }
      return;
    }
    if ( flags[2] == 'channels') {
      msg.channel.send("This doesn't work, are you *trying* to break the bot?");
      return;
      if(channelRegex.test(flags[3])) {
        let guild = await disClient.guilds.cache.get(flags[3]);
        console.log(guild.channels[1].id);
        for (var i = 0; i < guild.channels.length; i++) {
          await channelNames.push(guild.channels[i]);
          console.log(guild.channels[i]);
        }
        //((channel => {
        //  channelNames.push({name: channel.name, value: channel.id});
        //}));
        console.log(channelNames);
        let mbd = new Discord.MessageEmbed()
          .setTitle(`Channels in ${flags[2]}`)
          .setFields(channelNames);
        try {
          await msg.channel.send({embed: mbd});
        } catch { return; }
        return;
      }
      return;
    }
    return;
  }
}
