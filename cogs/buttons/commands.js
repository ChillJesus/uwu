const Discord = require('discord.js');
const variables = require('../variables.js');
const config = require('../../config.json');

module.exports = {
  commandsSFW: async function(menu, disbut) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setColor(config.bot.embedColor)
      .setFooter(config.bot.footer.text, config.bot.footer.url)
      .addFields({
        name: "Commands",
        value: await variables.commandsSFW()
      });
    try {
      await updateMenu(menu, disbut, mbd, "Commands");
      return;
    } catch (error) {
      console.log('Failed to update menu');
      console.log(error);
      return;
    }
  },
  commandsSFWimage: async function(menu, disbut) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setDescription("Each of these results in an image being sent")
      .setColor(config.bot.embedColor)
      .setFooter(config.bot.footer.text, config.bot.footer.url)
      .addFields({
        name: "Commands",
        value: await variables.commandsSFWimage()
      });
    try {
      await updateMenu(menu, disbut, mbd, "Images");
      return;
    } catch(error) {
      console.log("Could not update menu");
      console.log(error);
      return;
    }
  },
  commandsSFWgif: async function(menu, disbut) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setDescription("Each of these result in a gif being sent\nEX: \`.n lick Nekotai\`")
      .setColor(config.bot.embedColor)
      .setFooter(config.bot.footer.text, config.bot.footer.url)
      .addFields({
        name: "Commands",
        value: await variables.commandsSFWgif()
      });
    try {
      await updateMenu(menu, disbut, mbd, "Actions");
      return;
    } catch(error) {
      console.log("Could not update menu");
      console.log(error);
      return;
    }
  },
  commandsNSFW: async function(menu, disbut) {
    if(!menu.channel.nsfw) { return; }
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai NSFW Commands")
      .setColor(config.bot.embedColor)
      .setFooter(config.bot.footer.text, config.bot.footer.url)
      .addFields({
        name: "NSFW Commands",
        value: await variables.commandsNSFW()
      });
    try {
      await updateMenu(menu, disbut, mbd, "NSFW Commands");
      return;
    } catch(error) {
      console.log('Failed to update menu');
      console.log(error);
      return;
    }
  },
  commandsTags: async function(menu, disbut) {
    if(!menu.channel.nsfw) { return; }
    let mbd = new Discord.MessageEmbed()
      .setTitle("Nekotai Commands")
      .setDescription("Some hentai tags")
      .setColor(config.bot.embedColor)
      .setFooter(config.bot.footer.text, config.bot.footer.url)
      .addFields({
        name: ".n hentai",
        value: await variables.hentaiTags()
      },{
        name: ".n hgif",
        value: await variables.hgifTags()
      });
    try {
      await updateMenu(menu, disbut, mbd, "Hentai Tags");
      return;
    } catch(error) {
      console.log("Could not update menu");
      console.log(error);
      return;
    }
  }
}

async function updateMenu(menu, disbut, mbd, title) {
  let op_home = new disbut.MessageMenuOption()
    .setLabel('Home')
    .setDescription('Main Commands')
    .setValue('commandsSFW');
  let op_about = new disbut.MessageMenuOption()
    .setLabel('Info')
    .setDescription('Bot information uwu')
    .setValue('botInfo');
  let op_nsfw = new disbut.MessageMenuOption()
    .setLabel('NSFW')
    .setDescription('NSFW Commands')
    .setValue('commandsNSFW');
  let op_sfwImg = new disbut.MessageMenuOption()
    .setLabel('Images')
    .setDescription(`Who doesn't want a chat full of baguettes?`)
    .setValue('commandsSFWimage');
  let op_sfwGif = new disbut.MessageMenuOption()
    .setLabel('Actions')
    .setDescription(`Slap your friends, lick your enemies`)
    .setValue('commandsSFWgif');
  let op_nsfwTags = new disbut.MessageMenuOption()
    .setLabel('NSFW Tags')
    .setDescription(`Tags for the NSFW commands`)
    .setValue('commandsTags');
  let menu_ = new disbut.MessageMenu()
    .setID('commandsMenu')
    .setPlaceholder(title)
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(op_home)
    .addOption(op_sfwImg)
    .addOption(op_sfwGif);
  if (menu.channel.nsfw) {
    menu_.addOption(op_nsfw);
    menu_.addOption(op_nsfwTags);
  }
  menu_.addOption(op_about);
  try {
    await menu.reply.defer();
    await menu.message.edit(mbd, menu_);
    return;
  } catch(error) {
    console.log("Failed to send commands message");
    console.log(error);
    return;
  }
  return;
}
