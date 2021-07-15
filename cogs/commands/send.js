const Discord = require('discord.js');
const channelRegex = new RegExp("^[0-9]{18}$");

module.exports = {
  send: async function(msg, disClient, flags) {
    if (msg.channel.type === 'dm') {
      if (channelRegex.test(flags[2])) {
        let sendMessage = msg.content.split(' ').slice(3).join(' ');
        try {
          await disClient.channels.cache.get(flags[2]).send(sendMessage);
        } catch(error) {
          console.log("Failed to send message to server, trying user");
          try {
            await disClient.users.cache.get(flags[2]).send(sendMessage);
          } catch(error) {
            console.log("Failed to send message to user");
            console.log(error);
            return;
          }
          return;
        }
        return;
      } else {
        try {
          await msg.channel.send("Please send a channel id");
        } catch(error) {
          console.log("Failed to send message");
          console.log(error);
          return;
        }
      }
      return;
    } else if (msg.guild != null) {
      let sendMessage = msg.content.split(' ').slice(2).join(' ');
      try {
        await msg.channel.send(sendMessage);
        await msg.delete();
      } catch(error) {
        console.log("Failed to send or delete message");
        console.log(error);
        return;
      }
      return;
    }
  }
}
