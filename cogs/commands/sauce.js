const Discord = require('discord.js');
const Sauce = require('node-sauce');
const variables = require('../variables.js');
const config = require('../../config.json');
const nSauce = new Sauce(config.token.saucenao);

// node-sauce configuration
nSauce.numres = 10;

const sauceResults = new RegExp("^[0-9]{1,3}$");
const imageRegex = /\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/;
const urlRegex = /(https?:\/\/[^ ]*)/;

module.exports = {
  send: async function(msg, db, disbut) {
    let sent;
    let sauced = [];
    // Check if command includes image, or is reply to one
    // Take link of resulting image and pass to Sauce
    try {
      // Saucing image you reply to
      let repSauced = await msg.channel.messages.fetch(msg.reference.messageID);
      try {
        console.log("Saucing by replied to attachment");
        sauced = await nSauce(repSauced.attachments.array()[0].url);
        await sauceTime(sauced);
        return;
      } catch (error) {
        try {
          console.log("Extracting url");
          let url = repSauced.content;
          console.log(url);
          try {
            console.log("Saucing by url");
            sauced = await nSauce(url);
            await sauceTime(sauced);
            return;
          } catch (error) {
            console.log("Failed link nsauce");
            console.log(error);
            try {
              await msg.channel.send("Please send or reply to an image.");
            } catch (error) {
              console.log("Failed to send message");
              console.log(error);
            }
            return;
          }
        } catch (error) {
          console.log("Failed url extraction");
          console.log(error);
          try {
            await msg.channel.send("Please send or reply to an image.");
          } catch (error) {
            console.log("Failed to send message");
            console.log(error);
          }
          return;
        }
        console.log("Failed attachment nsauce");
        console.log(error);
        try {
          await msg.channel.send("Please send or reply to an image.");
        } catch (error) {
          console.log("Failed to send message");
          console.log(error);
        }
        return;
      }
    } catch (error) {
      // Saucing image you send
      try {
        console.log("Saucing by attachment");
        sauced = await nSauce(msg.attachments.array()[0].url);
        await sauceTime(sauced);
        return;
      } catch (error) {
        console.log("Extracting url");
        try {
        } catch(error) {
          console.log("Couldn't retrieve image");
          console.log(error);
          try {
            await msg.channel.send("Please send or reply to an image");
            return;
          } catch(error) {
              console.log("Couldn't send message");
              console.log(error);
              return;
          }
        }
        try {
          console.log("Saucing by url");
          let url = msg.content.match(urlRegex)[1];
          console.log(url);
          sauced = await nSauce(url);
          await sauceTime(sauced);
          return;
        } catch (error) {
          console.log("Failed link nsauce");
          console.log(error);
          try {
            await msg.channel.send("Please send or reply to an image.");
          } catch (error) {
            console.log("Failed to send message");
            console.log(error);
          }
          return;
        }
        console.log("Failed attachment nsauce");
        console.log(error);
        try {
          await msg.channel.send("Please send or reply to an image.");
        } catch (error) {
          console.log("Failed to send message");
          console.log(error);
        }
        return;
      }
    }

    // Actual saucing function
    // TODO:
    //  Wrap entire function in a for statement that loops through the array built previously
    async function sauceTime(sauced) {
      // if i try to set every isntance of this to a db call ill kill myself before im done
      let saucingDataTmp = {};
      let id = 0;
      // Goes through all of sauceNAO's indexes to generate mbd
      try {
        for (let i = 0; i < sauced.length; i++) {
          //console.log(`Checking source ${i}`);
          let mbd;
          let btn_n;
          let bdn_p;
          switch(sauced[i].index_id) {
            // h-magazines
            case 0:
              console.log("Result is h-magazines")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setAuthor("H-Magazines")
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Date",
                  value: sauced[i].date,
                  inline: true
                },{
                  name: "Part",
                  value: sauced[i].part,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // pixiv
            case 5:
              console.log("Result is pixiv")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Pixiv ID",
                  value: sauced[i].pixiv_id,
                  inline: true
                }, {
                  name: "Member ID",
                  value: sauced[i].member_id,
                  inline: true
                }, {
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // pixiv historical
            case 6:
              console.log("Result is pixiv historical")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Pixiv ID",
                  value: sauced[i].pixiv_id,
                  inline: true
                },{
                  name: "Member ID",
                  value: sauced[i].member_id,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // Nico Nico Seiga
            case 8:
              console.log("Result is nico nico seiga")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Seiga ID",
                  value: sauced[i].seiga_id,
                  inline: true
                },{
                  name: "Member ID",
                  value: sauced[i].member_id,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // danbooru
            case 9:
              console.log("Result is danbooru")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].characters)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Danbooru ID",
                  value: sauced[i].danbooru_id,
                  inline: true
                },{
                  name: "Gelbooru ID",
                  value: sauced[i].gelbooru_id,
                  inline: true
                },{
                  name: "Sankaku ID",
                  value: sauced[i].sankaku_id,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);;
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // drawr images
            case 10:
              console.log("Result is drawr images")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // nijie
            case 11:
              console.log("Result is nijie")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // yande.re
            case 12:
              console.log("Result is yande.re")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].material)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Danbooru ID",
                  value: sauced[i].danbooru_id,
                  inline: true
                },{
                  name: "Yande.re ID",
                  value: sauced[i].yandere_id,
                  inline: true
                },{
                  name: "Gelbooru ID",
                  value: sauced[i].gelbooru_id,
                  inline: true
                },{
                  name:"Source",
                  value: `[Click Me](${sauced[i].source})`,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);;
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // fakku
            case 16:
              console.log("Result is fakku")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // nhentai
            case 18:
              console.log("Result is nhentai")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setAuthor(sauced[i].creator[0])
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);;
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // 2d market
            case 19:
              console.log("Result is 2d market")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // MediBang
            case 20:
              console.log("Result is medibang")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // anidb
            case 21:
              console.log("Result is anidb")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor("AniDB")
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Part",
                  value: sauced[i].part,
                  inline: true
                },{
                  name: "Year",
                  value: sauced[i].year,
                  inline: true
                },{
                  name: "Estimated Time",
                  value: sauced[i].est_time,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // H-anime
            case 22:
              console.log("Result is h-anime")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor("H-Anime")
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Year",
                  value: sauced[i].year,
                  inline: true
                },{
                  name: "Estimated Time",
                  value: sauced[i].est_time,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // gelbooru
            case 25:
              // fix characters
              console.log("Result is gelbooru")
              console.log(sauced[i]);
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].material)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // konachan
            case 26:
              console.log("Result is konachan")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].material)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Characters",
                  value: sauced[i].characters,
                  inline: true
                },{
                  name: "Source",
                  value: `[Click Me](${sauced[i].twitter_user_id})`,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // Sankaku
            case 27:
              console.log("Result is sankaku")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].material)
                .setThumbnail(sauced[i].thumbnail)
                .addFields(/*{
                  name: "Characters",
                  value: sauced[i].characters,
                  inline: true
                },*/{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // anime-pictures.net
            case 28:
              console.log("Result is anime-pictures.net");
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].characters)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);;
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // e621
            case 29:
              console.log("Result is e621")
              console.log(sauced[i]);
              // fix material and charaters
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle("From e621")
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // idol complex
            case 30:
              console.log("Result is idol complex")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].creator)
                .setTitle(sauced[i].material)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Characters",
                  value: sauced[i].characters,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // bcy
            case 31:
              console.log("Result is bcy.net")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "BCY ID",
                  value: sauced[i].bcy_id,
                  inline: true
                },{
                  name: "Member ID",
                  value: sauced[i].member_id,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // bcy cosplay
            case 32:
              console.log("Result is bcy cosplay")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].member_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "BCY ID",
                  value: sauced[i].bcy_id,
                  inline: true
                },{
                  name: "Member ID",
                  value: sauced[i].member_id,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // deviantart
            case 34:
              console.log("Result is deviantart");
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].author_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "DeviantArt ID",
                  value: sauced[i].da_id,
                  inline: true
                }, {
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);;
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // Pawoo
            case 35:
              console.log("Result is pawoo")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].pawoo_user_acct)
                .setTitle(sauced[i].pawoo_user_display_name)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Created at",
                  value: sauced[i].created_at,
                  inline: true
                },{
                  name: "Pawoo ID",
                  value: sauced[i].pawoo_id,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // mangaupdates
            case 36:
              console.log("Result is mangaupdates")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setAuthor("Manga Updates")
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Part",
                  value: sauced[i].part,
                  inline: true
                },{
                  name: "Anime / Manga",
                  value: sauced[i].type,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // mangadex
            case 37:
              console.log("Result is mangadex")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].author)
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Author",
                  value: sauced[i].author,
                  inline: true
                },{
                  name: "Artist",
                  value: sauced[i].artist,
                  inline: true
                },{
                  name: "Chapter",
                  value: sauced[i].part,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // e-hentai
            case 38:
              console.log("Result is e-hentai")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setAuthor(sauced[i].creator[0])
                .setTitle(sauced[i].source)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Similarity",
                  value: sauced[i].similarity,
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);;
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // artstation
            case 39:
              console.log("Result is artstation")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].author_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Project",
                  value: sauced[i].as_project,
                  inline: true
                },{
                  name: "Author URL",
                  value: `[Click Here](${sauced[i].twitter_user_id})`,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // fur affinity
            case 40:
              console.log("Result is furaffinity")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].author_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Author Link",
                  value: `[Click Me](${sauced[i].author_url})`,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);;
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // twitter
            case 41:
              console.log("Result is twitter")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].twitter_user_handle)
                .setTitle(sauced[i].created_at)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Tweet ID",
                  value: sauced[i].tweet_id,
                  inline: true
                },{
                  name: "User ID",
                  value: sauced[i].twitter_user_id,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            // furry network
            case 42:
              console.log("Result is furry network")
              mbd = new Discord.MessageEmbed()
                .setColor(await variables.sauceColor(parseInt(sauced[i].similarity)))
                .setURL(sauced[i].ext_urls[0])
                .setAuthor(sauced[i].author_name)
                .setTitle(sauced[i].title)
                .setThumbnail(sauced[i].thumbnail)
                .addFields({
                  name: "Author URL",
                  value: `[Click Me](${sauced[i].author_url})`,
                  inline: true
                },{
                  name: "Similarity",
                  value: sauced[i].similarity,
                  inline: true
                })
                .setFooter(config.bot.footer.text, config.bot.footer.url);
              try {
                saucingDataTmp = Object.assign(saucingDataTmp, {
                  [id]: mbd
                });
                id++;
              } catch (error) {
                console.log("Failed logging data");
                console.log(error);
                return;
              }
              break;
            default:
              console.log("Unhandled response");
              console.log(sauced[i]);
              break;
          }
        }
      } catch(error) {
        console.log("Failed to fetch sources");
        console.log(error);
        return;
      }
      try {
        btn_n = new disbut.MessageButton()
          .setStyle(await variables.colorPrimary())
          .setLabel('Next')
          .setID('saucedNextPage');
        btn_p = new disbut.MessageButton()
          .setStyle(await variables.colorSecondary())
          .setLabel('Previous')
          .setID('saucedPreviousPage')
          .setDisabled();
        sent = await msg.channel.send({
          embed: saucingDataTmp[0],
          buttons: [btn_p, btn_n]
        });

        // for now we'll just throw the tmp object into the db and call it a day
        // someday if i really really really give a shit ill replace the entire
        // tmp object with db calls
        //saucingDataTmp.id = 0;
        try {
          let insertion = await db.collection(config.mongodb.collection.saucenao).insertOne({
            server: msg.guild.id,
            user: msg.author.id,
            sourcelist: sent.id,
            sources: saucingDataTmp,
            page: 0
          });
          return;
        } catch(error) {
          console.log("Failed to insert sauces to database");
          console.log(error);
          try {
            await msg.channel.send("\`\`\`Error: unable to log into database\nSources won't be scrollable.\`\`\`");
            return;
          } catch(error) {
            console.log("Could not send message");
            console.log(error);
            return;
          }
          return;
        }/*
        saucingData = Object.assign(saucingData, {
          [sent.id]: saucingDataTmp
        });*/
      } catch(error) {
        console.log("Failed sending initial message");
        console.log(error);
        try {
          await msg.channel.send("Can't check the sauce, try a smaller filesize?");
        } catch(error) {
          console.log("Failed sending failed message");
          console.log(error);
          return;
        }
        return;
      }
      return;
    }
  }
}
