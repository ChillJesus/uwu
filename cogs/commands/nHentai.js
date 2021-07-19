const Discord = require('discord.js');
const config = require('../../config.json');
const nhentai = require('nhentai-js');

module.exports = {
  send: async function(msg, flags, disbut, db) {
    let doujinReply;
    let book;
    let doujin = flags[2];
    if (nhentai.exists(doujin)) {
      try {
        doujinReply = await nhentai.getDoujin(doujin);
      } catch(error) {
        try {
          await msg.channel.send("This doujin can't be found");
          console.log(error);
          return;
        } catch(error) {
          console.log("Cant send message");
          console.log(error);
          return;
        }
      }
    } else {
      try {
        await msg.channel.send("This doujin doesn't exist");
        return;
      } catch(error) {
        console.log("Couldnt send message");
        console.log(error);
        return;
      }
    }
    let mbd = new Discord.MessageEmbed()
      .setTitle(doujinReply.title)
      .setImage(doujinReply.pages[0])
      .setDescription(`Page 1 of ${doujinReply.pages.length} | [Link](${doujinReply.link})`)
      .setColor(config.bot.embedColor);
    mbd.setFooter(doujinReply.details.tags.join());
    let btn_n = new disbut.MessageButton()
      .setStyle(config.bot.colorPrimary)
      .setLabel('Next')
      .setID('nhentaiNextPage');
    let btn_p = new disbut.MessageButton()
      .setStyle(config.bot.colorSecondary)
      .setLabel('Previous')
      .setID('nhentaiPreviousPage');
    let pg_m = new disbut.MessageMenu()
      .setID("nhentaiPages")
      .setPlaceholder("Pages")
      .setMaxValues(1)
      .setMinValues(1);
    let pagesItems = {};
    for(let i = 0; i < doujinReply.pages.length; i++) {
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
    try {
      book = await msg.channel.send({embed: mbd, components: [actionRow2, actionRow1]});
    } catch(error) {
      console.log("Could not send initial doujin message");
      console.log(error);
      return false;
    }
    try {
      let insertion = await db.collection(config.mongodb.collection.nhentai).insertOne({
        server: msg.guild.id,
        user: msg.author.id,
        bookid: book.id,
        link: doujinReply.link,
        title: doujinReply.title,
        pages: doujinReply.pages,
        tags: doujinReply.details.tags.join(),
        page: 0
      });
      return;
    } catch(error) {
      console.log("Failed to insert doujin to database");
      console.log(error);
      try {
        await msg.channel.send("\`\`\`Error: unable to log into database\nDoujin will be unreadable.\`\`\`");
        return;
      } catch(error) {
        console.log("Could not send message");
        console.log(error);
        return;
      }
      return;
    }
  }
}
