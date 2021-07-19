const Discord = require('discord.js');
const variables = require('../variables.js');
const config = require('../../config.json');

module.exports = {
  nextPage: async function(button, disbut, db) {
    let book = await db.collection(config.mongodb.collection.nhentai).find({bookid: button.message.id}).toArray();
    let page = book[0].page;
    page+=1;
    try {
      await updateDoujin(button, disbut, db, page, book);
      return;
    } catch(error) {
      console.log("Could not update doujin");
      console.log(error);
      return;
    }
  },
  previousPage: async function(button, disbut, db) {
    let book = await db.collection(config.mongodb.collection.nhentai).find({bookid: button.message.id}).toArray();
    let page = book[0].page;
    page-=1;
    try {
      await updateDoujin(button, disbut, db, page, book);
      return;
    } catch(error) {
      console.log("Could not update doujin");
      console.log(error);
      return;
    }
  },
  setPage: async function(menu, disbut, db) {
    let book = await db.collection(config.mongodb.collection.nhentai).find({bookid: menu.message.id}).toArray();
    let page = book[0].page;
    page = parseInt(menu.values[0]);
    try {
      await updateDoujin(menu, disbut, db, page, book);
      return;
    } catch(error) {
      console.log("Could not update doujin");
      console.log(error);
      return;
    }
  }
}

async function updateDoujin(menu, disbut, db, page, book, button) {
    let mbd = new Discord.MessageEmbed()
      .setImage(book[0].pages[page])
      .setTitle(book[0].title)
      .setDescription(`Page ${page+1} of ${book[0].pages.length} | [Link](${book[0].link})`)
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
    let pg_m = new disbut.MessageMenu()
      .setID("nhentaiPages")
      .setPlaceholder("Pages")
      .setMaxValues(1)
      .setMinValues(1);
    let pagesItems = {};
    for(let i = 0; i < book[0].pages.length; i++) {
      pagesItems[i] = new disbut.MessageMenuOption()
        .setLabel(`Page ${i+1}`)
        .setValue(`${i}`);
    }
    let total;
    let add;
    if(Object.keys(pagesItems).length >= 25) {
      // i should do better math here to make sure total pages isnt over 25
      add = Math.ceil(Object.keys(pagesItems).length / 20);
    } else {
      total = Object.keys(pagesItems).length;
      add = 1;
    }
    for(let i = 0; i < Object.keys(pagesItems).length; i += add) {
      pg_m.addOption(pagesItems[i]);
    }
    let actionRow1 = new disbut.MessageActionRow();
    actionRow1.addComponent(btn_p);
    actionRow1.addComponent(btn_n);
    let actionRow2 = new disbut.MessageActionRow();
    actionRow2.addComponent(pg_m);
    let filter = { bookid: menu.message.id };
    let update = {
      $set: {
        page: page,
      },
    };
    try {
      await menu.reply.defer();
      await menu.message.edit({embed: mbd, components: [actionRow2, actionRow1]});
      //await button.message.edit({embed: mbd, buttons: [btn_p, btn_n]});
      await db.collection(config.mongodb.collection.nhentai).updateOne(filter, update);
      return;
    } catch(error) {
      console.log("Could not update doujin");
      console.log(error);
      return;
    }
}
