const Discord = require('discord.js');
const variables = require('../variables.js');

module.exports = {
  nextPage: async function(button, disbut, doujinData) {
    try {
      doujinData[button.message.id][3] += 1;
    } catch(error) {
      console.log("Couldnt load this doujin, probably sent before restart");
      console.log(error);
      return doujinData;
    }
    let mbd = new Discord.MessageEmbed()
      .setImage(doujinData[button.message.id][0][doujinData[button.message.id][3]])
      .setTitle(doujinData[button.message.id][1])
      .setColor(await variables.embedColor())
      .addFields({
        name: "Page",
        value: `${doujinData[button.message.id][3]}/${doujinData[button.message.id][0].length-1}`
      });
    try {
      mbd.setFooter(doujinData[button.message.id][2].join(', ') + "\u3000".repeat(25));
    } catch {
      mbd.setFooter("No tags found" + "\u3000".repeat(25))
    }
    let btn_n = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Next')
      .setID('nhentaiNextPage');
    let btn_p = new disbut.MessageButton()
      .setStyle(await variables.colorSecondary())
      .setLabel('Previous')
      .setID('nhentaiPreviousPage');
    if (doujinData[button.message.id][3] >= doujinData[button.message.id][0].length - 1) {
      btn_n.setDisabled();
    }
    await button.reply.defer();
    await button.message.edit({
      embed: mbd,
      buttons: [btn_p, btn_n]
    });
    return doujinData;
  },
  previousPage: async function(button, disbut, doujinData) {
    try {
      doujinData[button.message.id][3] -= 1;
    } catch(error) {
      console.log("Couln't load doujin, probably sent before restart");
      console.log(error);
      return doujinData;
    }
    let mbd = new Discord.MessageEmbed()
      .setImage(doujinData[button.message.id][0][doujinData[button.message.id][3]])
      .setTitle(doujinData[button.message.id][1])
      .setColor(await variables.embedColor())
      .addFields({
        name: "Page",
        value: `${doujinData[button.message.id][3]}/${doujinData[button.message.id][0].length-1}`
      })
    try {
      mbd.setFooter(doujinData[button.message.id][2].join(', ') + "\u3000".repeat(25));
    } catch {
      mbd.setFooter("No tags found" + "\u3000".repeat(25))
    }
    let btn_n = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Next')
      .setID('nhentaiNextPage');
    let btn_p = new disbut.MessageButton()
      .setStyle(await variables.colorSecondary())
      .setLabel('Previous')
      .setID('nhentaiPreviousPage');
    if (doujinData[button.message.id][3] <= 0) {
      btn_p.setDisabled();
    }
    await button.reply.defer();
    await button.message.edit({
      embed: mbd,
      buttons: [btn_p, btn_n]
    });
    return doujinData;
  }
}
