const Discord = require('discord.js');
const variables = require('../variables.js');
const config = require('../../config.json');

module.exports = {
  nextPage: async function(button, disbut, db) {
    let book = await db.collection(config.mongodb.collection.nhentai).find({bookid: button.message.id}).toArray();
    let page = book[0].page;
    page+=1;
    let mbd = new Discord.MessageEmbed()
      .setImage(book[0].pages[page])
      .setTitle(book[0].title)
      .setDescription(`Page ${page+1} of ${book[0].pages.length}`)
      .setColor(config.bot.embedColor);
    if(book[0].tags != null) {
      mbd.setFooter(book[0].tags);
    } else {
      mbd.setFooter("No tags found");
    }
    let btn_n = new disbut.MessageButton()
      .setStyle(config.bot.colorPrimary)
      .setLabel('Next')
      .setID('nhentaiNextPage');
    if(page >= book[0].pages.length-1) {
      page = book[0].pages.length-1;
      btn_n.setDisabled();
    }
    let btn_p = new disbut.MessageButton()
      .setStyle(config.bot.colorSecondary)
      .setLabel('Previous')
      .setID('nhentaiPreviousPage');
    if(page <= 0) {
      page = 0;
      btn_p.setDisabled();
    }
    let filter = { bookid: button.message.id };
    let update = {
      $set: {
        page: page,
      },
    };
    try {
      await button.reply.defer();
      await button.message.edit({embed: mbd, buttons: [btn_p, btn_n]});
      await db.collection(config.mongodb.collection.nhentai).updateOne(filter, update);
      return;
    } catch(error) {
      console.log("Could not update doujin");
      console.log(error);
      return;
    }
  },
  previousPage: async function(button, disbut, doujinData) {
    let book = await db.collection(config.mongodb.collection.nhentai).find({bookid: button.message.id}).toArray();
    let page = book[0].page;
    page-=1;
    let mbd = new Discord.MessageEmbed()
      .setImage(book[0].pages[page])
      .setTitle(book[0].title)
      .setDescription(`Page ${page+1} of ${book[0].pages.length}`)
      .setColor(config.bot.embedColor);
    if(book[0].tags != null) {
      mbd.setFooter(book[0].tags);
    } else {
      mbd.setFooter("No tags found");
    }
    let btn_n = new disbut.MessageButton()
      .setStyle(config.bot.colorPrimary)
      .setLabel('Next')
      .setID('nhentaiNextPage');
    if(page >= book[0].pages.length-1) {
      page = book[0].pages.length-1;
      btn_n.setDisabled();
    }
    let btn_p = new disbut.MessageButton()
      .setStyle(config.bot.colorSecondary)
      .setLabel('Previous')
      .setID('nhentaiPreviousPage');
    if(page <= 0) {
      page = 0;
      btn_p.setDisabled();
    }
    let filter = { bookid: button.message.id };
    let update = {
      $set: {
        page: page,
      },
    };
    try {
      await button.reply.defer();
      await button.message.edit({embed: mbd, buttons: [btn_p, btn_n]});
      await db.collection(config.mongodb.collection.nhentai).updateOne(filter, update);
      return;
    } catch(error) {
      console.log("Could not update doujin");
      console.log(error);
      return;
    }
  }
}
