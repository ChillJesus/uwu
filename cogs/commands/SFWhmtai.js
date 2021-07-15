const Discord = require('discord.js');
const HMfull = require('hmfull');

module.exports = {
  // image
  wallpaper: async function(msg) {
    let res = await HMfull.HMtai.sfw.wallpaper();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send wallpaper");
      console.log(error);
      return;
    }
  },
  // image
  mobileWallpaper: async function(msg) {
    let res = await HMfull.HMtai.sfw.mobileWallpaper();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send mobile wallpaper");
      console.log(error);
      return;
    }
  },
  // image
  neko: async function(msg) {
    let res = await HMfull.HMtai.sfw.neko();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send neko");
      console.log(error);
      return;
    }
  },
  // image
  jahy: async function(msg) {
    let res = await HMfull.HMtai.sfw.jahy();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send jahy");
      console.log(error);
      return;
    }
  },
  // gif
  lick: async function(msg) {
    let res = await HMfull.HMtai.sfw.lick();
    try {
      sendEmbed(msg, res, "lick");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send lick");
      console.log(error);
      return;
    }
  },
  // gif
  slap: async function(msg) {
    let res = await HMfull.HMtai.sfw.slap();
    try {
      sendEmbed(msg, res, "spank");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send slap");
      console.log(error);
      return;
    }
  }
}

async function sendEmbed(msg, res, action) {
  let mbd = new Discord.MessageEmbed()
    .setColor('#FFFFFF')
    //.setFooter(await variables.footer(), await variables.footerImage())
    .setImage(res.url);
  let name = msg.content.split(' ')[2];
  if(name != null) {
    try {
      mbd.setDescription(`${msg.author} gives **${name}** a ${action}`)
      await msg.channel.send({embed: mbd});
      return;
    } catch(error) {
      console.log("Failed to send embed");
      console.log(error);
      return;
    }
  } else {
    try {
      mbd.setDescription(`${msg.author} ${action}'s themselves, good job :)`);
      await msg.channel.send({embed: mbd});
      return;
    } catch(error) {
      console.log("Failed to send self embed");
      console.log(error);
      return;
    }
  }
}