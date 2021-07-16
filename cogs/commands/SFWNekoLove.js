const Discord = require('discord.js');
const HMfull = require('hmfull');
const variables = require('../variables.js');

module.exports = {
  // image
  pat: async function(msg) {
    let res = await HMfull.NekoLove.sfw.pat();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send pat");
      console.log(error);
      return;
    }
  },
  // image
  hug: async function(msg) {
    let res = await HMfull.NekoLove.sfw.hug();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send hug");
      console.log(error);
      return;
    }
  },
  // image
  kiss: async function(msg) {
    let res = await HMfull.NekoLove.sfw.kiss();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send kiss");
      console.log(error);
      return;
    }
  },
  // gif
  cry: async function(msg) {
    let res = await HMfull.NekoLove.sfw.cry();
    try {
      sendEmbed(msg, res, "cry");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send cry");
      console.log(error);
      return;
    }
  },
  // gif
  slap: async function(msg) {
    let res = await HMfull.NekoLove.sfw.slap();
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
  // image
  smug: async function(msg) {
    let res = await HMfull.NekoLove.sfw.smug();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send smug");
      console.log(error);
      return;
    }
  },
  // gif
  punch: async function(msg) {
    let res = await HMfull.NekoLove.sfw.punch();
    try {
      sendEmbed(msg, res, "punch");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send punch");
      console.log(error);
      return;
    }
  },
  // image
  neko: async function(msg) {
    let res = await HMfull.NekoLove.sfw.neko();
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
  kitsune: async function(msg) {
    let res = await HMfull.NekoLove.sfw.kitsune();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send kitsune");
      console.log(error);
      return;
    }
  },
  // image
  waifu: async function(msg) {
    let res = await HMfull.NekoLove.sfw.waifu();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send waifu");
      console.log(error);
      return;
    }
  }
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
