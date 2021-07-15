const Discord = require('discord.js');
const variables = require('../variables.js');

module.exports = {
  commandsSFW: async function(button, disbut) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setColor('#0099ff')
      .setFooter(await variables.footer(), await variables.footerImage())
      .addFields({
        name: "Commands",
        value: await variables.commandsSFW()
      });
    let btnSFW = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Commands')
      .setID('commandsSFW')
      .setDisabled();
    let btnNSFW = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('NSFW')
      .setID('commandsNSFW');
    let btnCommandsSFWImage = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Pics')
      .setID('commandsSFWimage');
    let btnCommandsSFWGif = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Gifs')
      .setID('commandsSFWgif');
    await button.reply.defer();
    await button.message.edit({
      embed: mbd,
      buttons: [btnSFW, btnNSFW, btnCommandsSFWImage, btnCommandsSFWGif]
    });
  },
  commandsSFWimage: async function(button, disbut) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setDescription("Each of these results in an image being sent")
      .setColor('#0099ff')
      .setFooter(await variables.footer(), await variables.footerImage())
      .addFields({
        name: "Commands",
        value: await variables.commandsSFWimage()
      });
    let btnSFW = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Commands')
      .setID('commandsSFW');
    let btnNSFW = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('NSFW')
      .setID('commandsNSFW');
    let btnCommandsSFWImage = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Pics')
      .setID('commandsSFWimage')
      .setDisabled();
    let btnCommandsSFWGif = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Gifs')
      .setID('commandsSFWgif');
    await button.reply.defer();
    await button.message.edit({
      embed: mbd,
      buttons: [btnSFW, btnNSFW, btnCommandsSFWImage, btnCommandsSFWGif]
    });
  },
  commandsSFWgif: async function(button, disbut) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setDescription("Each of these result in a gif being sent\nEX: \`.n lick Nekotai\`")
      .setColor('#0099ff')
      .setFooter(await variables.footer(), await variables.footerImage())
      .addFields({
        name: "Commands",
        value: await variables.commandsSFWgif()
      });
    let btnSFW = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Commands')
      .setID('commandsSFW');
    let btnNSFW = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('NSFW')
      .setID('commandsNSFW');
    let btnCommandsSFWImage = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Pics')
      .setID('commandsSFWimage');
    let btnCommandsSFWGif = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Gifs')
      .setID('commandsSFWgif')
      .setDisabled();
    await button.reply.defer();
    await button.message.edit({
      embed: mbd,
      buttons: [btnSFW, btnNSFW, btnCommandsSFWImage, btnCommandsSFWGif]
    });
  },
  commandsNSFW: async function(button, disbut) {
    if(!button.channel.nsfw) { return; }
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setColor('#0099ff')
      .setFooter(await variables.footer(), await variables.footerImage())
      .addFields({
        name: "NSFW Commands",
        value: await variables.commandsNSFW()
      });
    let btnSFW = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Commands')
      .setID('commandsSFW');
    let btnNSFW = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('NSFW')
      .setID('commandsNSFW')
      .setDisabled();
    let btnTags = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('Tags')
      .setID('commandsTags');
    await button.reply.defer();
    await button.message.edit({
      embed: mbd,
      buttons: [btnSFW, btnNSFW, btnTags]
    });
  },
  commandsTags: async function(button, disbut) {
    if(!button.channel.nsfw) { return; }
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setDescription("Some hentai tags")
      .setColor('#0099ff')
      .setFooter(await variables.footer(), await variables.footerImage())
      .addFields({
        name: ".n hentai",
        value: await variables.hentaiTags()
      },{
        name: ".n hgif",
        value: await variables.hgifTags()
      });
    let btnSFW = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel('Commands')
      .setID('commandsSFW');
    let btnNSFW = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('NSFW')
      .setID('commandsNSFW');
    let btnTags = new disbut.MessageButton()
      .setStyle('red')
      .setLabel('Tags')
      .setID('commandsTags')
      .setDisabled();
    await button.reply.defer();
    await button.message.edit({
      embed: mbd,
      buttons: [btnSFW, btnNSFW, btnTags]
    });
  }
}
