const Discord = require('discord.js');
const HMfull = require('hmfull');
const variables = require('../variables.js');

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
      let action1 = "is licking";
      let action2 = "licks... themselves?";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "gives a good spanking to";
      let action2 = "is spanking themself";
      sendEmbed(msg, res, action1, action2);
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send slap");
      console.log(error);
      return;
    }
  }
}

async function sendEmbed(msg, res, action1, action2) {
  let mbd = new Discord.MessageEmbed()
    .setColor(await variables.embedColor())
    //.setFooter(await variables.footer(), await variables.footerImage())
    .setImage(res.url);
  let name = msg.content.split(' ')[2];
  if(name != null) {
    try {
      let action = action1;
      mbd.setDescription(`${msg.author} ${action} **${name}**`)
      await msg.channel.send({embed: mbd});
      return;
    } catch(error) {
      console.log("Failed to send embed");
      console.log(error);
      return;
    }
  } else {
    try {
      let action = action2;
      mbd.setDescription(`${msg.author} ${action}`);
      await msg.channel.send({embed: mbd});
      return;
    } catch(error) {
      console.log("Failed to send self embed");
      console.log(error);
      return;
    }
  }
}
