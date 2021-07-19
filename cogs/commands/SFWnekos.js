const Discord = require('discord.js');
const HMfull = require('hmfull');
const variables = require('../variables.js');

module.exports = {
  // gif
  pat: async function(msg) {
    let res = await HMfull.Nekos.sfw.pat();
    try {
      let action1 = "pats";
      let action2 = "pats themselves";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "hugs";
      let action2 = "hugs themselves";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "kisses";
      let action2 = "kisses themselves";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "slaps";
      let action2 = "slaps themselves";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "gives a smug look to";
      let action2 = "is looking pretty smug";
      sendEmbed(msg, res, action1, action2);
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
