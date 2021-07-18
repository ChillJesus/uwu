const Discord = require('discord.js');
const variables = require('../variables.js');
const config = require('../../config.json');

module.exports = {
  nextPage: async function(button, disbut, saucingData) {
    let sourcelist = await db.collection(config.mongodb.collection.saucenao).find({sourcelist: button.message.id}).toArray();
    let page = sourcelist[0].page;
    page+=1;
    let mbd = sourcelist[0].sources[page];
    let btn_n = new disbut.MessageButton()
      .setStyle(config.bot.colorPrimary)
      .setLabel('Next')
      .setID('saucedNextPage');
    if(page >= Object.keys(sourcelist[0].sources).length-1) {
      page = Object.keys(sourcelist[0].sources).length-1;
      btn_n.setDisabled();
    }
    let btn_p = new disbut.MessageButton()
      .setStyle(config.bot.colorSecondary)
      .setLabel('Previous')
      .setID('saucedPreviousPage');
    if(page <= 0) {
      page = 0;
      btn_p.setDisabled();
    }
    let filter = { sourcelist: button.message.id };
    let update = {
      $set: {
        page: page,
      },
    };
    try {
      await button.reply.defer();
      await button.message.edit({embed: mbd, buttons: [btn_p, btn_n]});
      await db.collection(config.mongodb.collection.saucenao).updateOne(filter, update);
      return;
    } catch(error) {
      console.log("Could not update sauce");
      console.log(error);
      return;
    }
  },
  previousPage: async function(button, disbut, saucingData) {
    let sourcelist = await db.collection(config.mongodb.collection.saucenao).find({sourcelist: button.message.id}).toArray();
    let page = sourcelist[0].page;
    page-=1;
    let mbd = sourcelist[0].sources[page];
    let btn_n = new disbut.MessageButton()
      .setStyle(config.bot.colorPrimary)
      .setLabel('Next')
      .setID('saucedNextPage');
    if(page >= Object.keys(sourcelist[0].sources).length-1) {
      page = Object.keys(sourcelist[0].sources).length-1;
      btn_n.setDisabled();
    }
    let btn_p = new disbut.MessageButton()
      .setStyle(config.bot.colorSecondary)
      .setLabel('Previous')
      .setID('saucedPreviousPage');
    if(page <= 0) {
      page = 0;
      btn_p.setDisabled();
    }
    let filter = { sourcelist: button.message.id };
    let update = {
      $set: {
        page: page,
      },
    };
    try {
      await button.reply.defer();
      await button.message.edit({embed: mbd, buttons: [btn_p, btn_n]});
      await db.collection(config.mongodb.collection.saucenao).updateOne(filter, update);
      return;
    } catch(error) {
      console.log("Could not update sauce");
      console.log(error);
      return;
    }
  }
}
