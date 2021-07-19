const Discord = require('discord.js');
const HMfull = require('hmfull');
const variables = require('../variables.js');

module.exports = {
  // gif
  hug: async function(msg) {
    let res = await HMfull.Miss.sfw.hug();
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
    let res = await HMfull.Miss.sfw.kiss();
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
  // gif
  cry: async function(msg) {
    let res = await HMfull.Miss.sfw.cry();
    try {
      let action1 = "is crying now, apologize";
      let action2 = "is breaking inside";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "kills";
      let action2 = "is feeling murderous";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "is staring at";
      let action2 = "is having a staring contest with themselves";
      sendEmbed(msg, res, action1, action2);
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
      let action1 = "dances with";
      let action2 = "is dancing by themselves";
      sendEmbed(msg, res, action1, action2);
      //await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send dance");
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
