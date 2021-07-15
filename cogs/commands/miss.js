const Discord = require('discord.js');
const HMfull = require('hmfull');

module.exports = {
  random: async function(msg) {
    start();
    async function start() {
      let randomType = Math.floor(Math.random() * 2);
      let res;
      switch(randomType) {
        case 0:
          res = await HMfull.Miss.nsfw.ero();
          break;
        case 1:
          res = await HMfull.Miss.nsfw.pussy();
          break;
        case 2:
          res = await HMfull.Miss.nsfw.boobs();
          break;
      }
      try {
        await msg.channel.send(res.url);
        return;
      } catch(error) {
        console.log("Could not send random miss");
        console.log(error);
        start();
      }
    }
  },
  // Seems to 404 every time
  ero: async function(msg) {
    let res = await HMfull.Miss.nsfw.ero();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send miss");
      console.log(error);
      return;
    }
  },
  pussy: async function(msg) {
    let res = await HMfull.Miss.nsfw.pussy();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send miss");
      console.log(error);
      return;
    }
  },
  boobs: async function(msg) {
    let res = await HMfull.Miss.nsfw.boobs();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send miss");
      console.log(error);
      return;
    }
  }
}
