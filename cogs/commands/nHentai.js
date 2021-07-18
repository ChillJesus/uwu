const Discord = require('discord.js');
const config = require('../../config.json');
const nhentai = require('nhentai-js');

module.exports = {
  send: async function(msg, flags, disbut, db) {
    let doujinReply;
    let book;
    let doujin = flags[2];
    if (nhentai.exists(doujin)) {
      doujinReply = await nhentai.getDoujin(doujin);
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
      .setDescription(`Page 1 of ${doujinReply.pages.length}`)
      .setColor(config.bot.embedColor);
    if(doujinReply.tags != null) {
      mbd.setFooter(doujinReply.tags);
    } else {
      mbd.setFooter("No tags found");
    }
    let btn_n = new disbut.MessageButton()
      .setStyle(config.bot.colorPrimary)
      .setLabel('Next')
      .setID('nhentaiNextPage');
    let btn_p = new disbut.MessageButton()
      .setStyle(config.bot.colorSecondary)
      .setLabel('Previous')
      .setID('nhentaiPreviousPage');
    try {
      book = await msg.channel.send({embed: mbd, buttons: [btn_p, btn_n]});
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
        title: doujinReply.title,
        pages: doujinReply.pages,
        tags: doujinReply.tags,
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
