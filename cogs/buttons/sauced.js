const Discord = require('discord.js');
const variables = require('../variables.js');

module.exports = {
  nextPage: async function(button, disbut, saucingData) {
    length = Object.keys(saucingData[button.message.id]).length-2;
    saucingData[button.message.id].id = parseInt(saucingData[button.message.id].id+1);
    let mbd = saucingData[button.message.id][saucingData[button.message.id].id];
    let btn_n = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Next')
      .setID('saucedNextPage');
    let btn_p = new disbut.MessageButton()
      .setStyle(await variables.colorSecondary())
      .setLabel('Previous')
      .setID('saucedPreviousPage');
    if(saucingData[button.message.id].id == length) {
      btn_n.setDisabled();
    }
    try {
      await button.reply.defer();
      await button.message.edit({
        embed: mbd,
        buttons: [btn_p, btn_n]
      });
    } catch(error) {
      console.log("Failed to go to next page");
      console.log(error);
      return saucingData;
    }
    return saucingData;
  },
  previousPage: async function(button, disbut, saucingData) {
    saucingData[button.message.id].id = parseInt(saucingData[button.message.id].id-1);
    let mbd = saucingData[button.message.id][saucingData[button.message.id].id];
    let btn_n = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Next')
      .setID('saucedNextPage');
    let btn_p = new disbut.MessageButton()
      .setStyle(await variables.colorSecondary())
      .setLabel('Previous')
      .setID('saucedPreviousPage');
    if(saucingData[button.message.id].id == 0) {
      btn_p.setDisabled();
    }
    try {
      await button.reply.defer();
      await button.message.edit({
        embed: mbd,
        buttons: [btn_p, btn_n]
      });
    } catch(error) {
      console.log("Failed to go to previous page");
      console.log(error);
      return saucingData;
    }
    return saucingData;
  }
}
