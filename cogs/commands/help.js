const Discord = require('discord.js');
const disbut = require('discord-buttons');
const variables = require('../variables.js');

module.exports = {
  send: async function(msg) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setColor(await variables.embedColor())
      .setFooter(await variables.footer(), await variables.footerImage())
      .addFields({
        name: "Commands",
        value: await variables.commandsSFW()
      });
    let btnSFW = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Commands')
      .setID('commandsSFW')
      .setDisabled();
    let btnNSFW = new disbut.MessageButton()
      .setStyle(await variables.colorSecondary())
      .setLabel('NSFW')
      .setID('commandsNSFW');
    let btnCommandsSFWImage = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Pics')
      .setID('commandsSFWimage');
    let btnCommandsSFWGif = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Gifs')
      .setID('commandsSFWgif');
    if(!msg.channel.nsfw) { btnNSFW.setDisabled(); }
    try {
      await msg.channel.send({
        embed: mbd,
        buttons: [btnSFW, btnNSFW, btnCommandsSFWImage, btnCommandsSFWGif]
      });
    } catch(error) {
      console.log("Could not send help message");
      console.log(error);
      return;
    }
    return;
  }
}
