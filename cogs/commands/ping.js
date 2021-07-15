const Discord = require('discord.js');
const now = require('performance-now');

var pingMessage;

module.exports = {
  send: async function(msg) {
    let start = now();
    let mbd = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('<:ping_pong:863658173999480893> Pong!')
      .addFields({
        name: "Message Speed",
        value: "Loading..."
      }, )
      .setThumbnail("https://cdn.discordapp.com/attachments/863118593508114482/863861507125149726/pp.gif");
    try {
      pingMessage = await msg.channel.send({
        embed: mbd
      });
    } catch {
      return;
    }
    let end = now()
    let mstPing = parseInt(end - start);
    if (mstPing < 200) {
      mstQuality = "<:green_circle:863855461802967071> Good";
      mstSide = "#008000"
    } else if (mstPing > 400) {
      mstQuality = "<:red_circle:863855461802967071> Poor";
      mstSide = "#FF0000";
    } else {
      mstQuality = "<:yellow_circle:863855461802967071> Average";
      mstSide = "#FFFF00";
    }
    mbd = new Discord.MessageEmbed()
      .setColor(mstSide)
      .setTitle('<:ping_pong:863658173999480893> Pong!')
      .addFields({
        name: "Message Speed",
        value: `${mstQuality} - ${mstPing}ms`
      }, )
      .setThumbnail("https://cdn.discordapp.com/attachments/863118593508114482/863861507125149726/pp.gif");
    await pingMessage.edit({
      embed: mbd
    });
    return;
  }
}
