const Discord = require('discord.js');
const HMfull = require('hmfull');

module.exports = {
  // gif
  hug: async function(msg) {
    let res = await HMfull.Miss.sfw.hug();
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
    let res = await HMfull.Miss.sfw.kiss();
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
  // gif
  cry: async function(msg) {
    let res = await HMfull.Miss.sfw.cry();
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
  kill: async function(msg) {
    let res = await HMfull.Miss.sfw.kill();
    try {
      sendEmbed(msg, res, "kill");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send kill");
      console.log(error);
      return;
    }
  },
  // gif
  view: async function(msg) {
    let res = await HMfull.Miss.sfw.view();
    try {
      sendEmbed(msg, res, "stare");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send view");
      console.log(error);
      return;
    }
  },
  // gif
  dance: async function(msg) {
    let res = await HMfull.Miss.sfw.dance();
    try {
      sendEmbed(msg, res, "dance");
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send dance");
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
