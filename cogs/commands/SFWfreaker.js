const Discrod = require('discord.js');
const HMfull = require('hmfull');

module.exports = {
  // image
  baguette: async function(msg) {
    let res = await HMfull.Freaker.sfw.baguette();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send baguette");
      console.log(error);
      return;
    }
  },
  // image
  dva: async function(msg) {
    let res = await HMfull.Freaker.sfw.dva();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send dva");
      console.log(error);
      return;
    }
  },
  // image
  neko: async function(msg) {
    let res = await HMfull.Freaker.sfw.neko();
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
  yuri: async function(msg) {
    let res = await HMfull.Freaker.sfw.yuri();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send yuri");
      console.log(error);
      return;
    }
  },
  // image
  anime: async function(msg) {
    let res = await HMfull.Freaker.sfw.anime();
    try {
      await msg.channel.send(res.url);
      return;
    } catch (error) {
      console.log("Failed to send anime");
      console.log(error);
      return;
    }
  }
}
