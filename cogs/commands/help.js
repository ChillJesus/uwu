const Discord = require('discord.js');
const disbut = require('discord-buttons');
const variables = require('../variables.js');
const config = require('../../config.json');

module.exports = {
  send: async function(msg) {
    let mbd = new Discord.MessageEmbed()
      .setTitle("Commands Menu")
      .setDescription('Use the menu below to go through the commands')
      .setColor(config.bot.embedColor)
      .setFooter(config.bot.footer.text, config.bot.footer.url)
      .addFields({
        name: "Commands",
        value: await variables.commandsSFW()
      });
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
      .setDescription(`Images ${config.bot.name} can send`)
      .setValue('commandsSFWimage');
    let op_sfwGif = new disbut.MessageMenuOption()
      .setLabel('Actions')
      .setDescription(`Actions ${config.bot.name} can send`)
      .setValue('commandsSFWgif');
    let op_nsfwTags = new disbut.MessageMenuOption()
      .setLabel('NSFW Tags')
      .setDescription(`Tags for the NSFW commands`)
      .setValue('commandsTags');
    let menu_ = new disbut.MessageMenu()
      .setID('commandsMenu')
      .setPlaceholder('Commands')
      .setMaxValues(1)
      .setMinValues(1)
      .addOption(op_home)
      .addOption(op_sfwImg)
      .addOption(op_sfwGif)
    if(msg.channel.nsfw) {
      menu_.addOption(op_nsfw);
      menu_.addOption(op_nsfwTags);
    }
    menu_.addOptions(op_about);
    try {
      await msg.channel.send(mbd, menu_);
      return;
    } catch(error) {
      console.log("Failed to send commands message");
      console.log(error);
      return;
    }
  },
  info: async function(menu, disClient) {
    let mbd = new Discord.MessageEmbed()
      .setColor(config.bot.embedColor)
      .setFooter(config.bot.footer.text, config.bot.footer.url)
      .addFields({
        name: "Author",
        value: "Јesus#0001",
        inline: true
      },{
        name: "Language",
        value: "[NodeJS](https://nodejs.org)",
        inline: true
      },{
        name: "Repo",
        value: "[ChillJesus/uwu](https://github.com/ChillJesus/uwu)",
        inline: true
      },{
        name: "Servers",
        value: `In ${disClient.guilds.cache.size} servers`
      },{
        name: "About uwu",
        value: `${config.bot.name} is a bot running on [open source, uwu](https://github.com/ChillJesus/uwu) created by [Jesus](https://jesus.sh). It's still being thrown together, so if you see it act weird shoot a dm over. If you'd like to [add the bot](https://discord.com/oauth2/authorize?client_id=862928413072162836&scope=bot&permissions=2148006976) to your server, have at it.`
      });
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
      .setDescription(`Images ${config.bot.name} can send`)
      .setValue('commandsSFWimage');
    let op_sfwGif = new disbut.MessageMenuOption()
      .setLabel('Actions')
      .setDescription(`Actions ${config.bot.name} can send`)
      .setValue('commandsSFWgif');
    let op_nsfwTags = new disbut.MessageMenuOption()
      .setLabel('NSFW Tags')
      .setDescription(`Tags for the NSFW commands`)
      .setValue('commandsTags');
    let menu_ = new disbut.MessageMenu()
      .setID('commandsMenu')
      .setPlaceholder('Info')
      .setMaxValues(1)
      .setMinValues(1)
      .addOption(op_home)
      .addOption(op_sfwImg)
      .addOption(op_sfwGif)
    if(menu.channel.nsfw) {
      menu_.addOption(op_nsfw);
      menu_.addOption(op_nsfwTags);
    }
    menu_.addOption(op_about);
    try {
      await menu.reply.defer();
      await menu.message.edit(mbd, menu_);
      return;
    } catch(error) {
      console.log("Failed to send info message");
      console.log(error);
      return;
    }
  }
}
