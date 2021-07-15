const Discord = require('discord.js');
const HMfull = require('hmfull');

module.exports = {
  random: async function(msg) {
    start();
    async function start() {
      let randomType = Math.floor(Math.random() * 3);
      let res;
      switch(randomType) {
        case 0:
          res = await HMfull.Freaker.nsfw.hentai();
          break;
        case 1:
          res = await HMfull.Freaker.nsfw.neko();
          break;
        case 2:
          res = await HMfull.Freaker.nsfw.trap();
          break;
      }
      try {
        await msg.channel.send(res.url);
        return;
      } catch(error) {
        console.log("Could not send random freaker");
        console.log(error);
        start();
      }
    }
  },
  hentai: async function(msg) {
    res = await HMfull.Freaker.nsfw.hentai();
    try {
      await msg.channel.send(res.url);
      return;
    } catch(error) {
      console.log("Could not send random freaker");
      console.log(error);
      return;
    }
  },
  neko: async function(msg) {
    res = await HMfull.Freaker.nsfw.neko();
    try {
      await msg.channel.send(res.url);
      return;
    } catch(error) {
      console.log("Could not send random freaker");
      console.log(error);
      return;
    }
  },
  trap: async function(msg) {
    res = await HMfull.Freaker.nsfw.trap();
    try {
      await msg.channel.send(res.url);
      return;
    } catch(error) {
      console.log("Could not send random freaker");
      console.log(error);
      return;
    }
  }
}
