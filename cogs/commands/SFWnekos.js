const Discord = require('discord.js');
const HMfull = require('hmfull');
const variables = require('../variables.js');

module.exports = {
  // gif
  pat: async function(msg) {
    let res = await HMfull.Nekos.sfw.pat();
    try {
      sendEmbed(msg, res, "pat");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send pat");
      console.log(error);
      return;
    }
  },
  // gif
  hug: async function(msg) {
    let res = await HMfull.Nekos.sfw.hug();
    try {
      sendEmbed(msg, res, "hug");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send hug");
      console.log(error);
      return;
    }
  },
  // gif
  kiss: async function(msg) {
    let res = await HMfull.Nekos.sfw.kiss();
    try {
      sendEmbed(msg, res, "kiss");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send kiss");
      console.log(error);
      return;
    }
  },
  // Not a function?
  /*
  cry: async function(msg) {
    let res = await HMfull.Nekos.sfw.cry();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send cry");
      console.log(error);
      return;
    }
  },*/
  // gif
  slap: async function(msg) {
    let res = await HMfull.Nekos.sfw.slap();
    try {
      sendEmbed(msg, res, "slap");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send slap");
      console.log(error);
      return;
    }
  },
  // gif
  smug: async function(msg) {
    let res = await HMfull.Nekos.sfw.smug();
    try {
      sendEmbed(msg, res, "smug");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send smug");
      console.log(error);
      return;
    }
  },
  // Not a function?
  /*
  punch: async function(msg) {
    let res = await HMfull.Nekos.sfw.punch();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send punch");
      console.log(error);
      return;
    }
  },*/
  // image
  neko: async function(msg) {
    let res = await HMfull.Nekos.sfw.neko();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send neko");
      console.log(error);
      return;
    }
  }
  // Not a function?
  /*
  kitsune: async function(msg) {
    let res = await HMfull.Nekos.sfw.kistune();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send kistune");
      console.log(error);
      return;
    }
  },*/
  // Not a function?
  /*
  waifu: async function(msg) {
    let res = await HMfull.Nekos.sfw.waifu();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send waifu");
      console.log(error);
      return;
    }
  }*/
}

async function sendEmbed(msg, res, action) {
  let mbd = new Discord.MessageEmbed()
    .setColor(await variables.embedColor())
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
