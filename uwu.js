const Discord = require('discord.js');
const nhentai = require('nhentai-js');
const Sauce = require('node-sauce');
const now = require('performance-now');
require('dotenv').config();

const nSauce = new Sauce(process.env.SAUCENAO_TOKEN);
const disClient = new Discord.Client();
const disbut = require('discord-buttons');
disbut(disClient);

var doujinData = {};
var saucingData = {};

// stuff youprobably dont want, debug only
const spamChannel = process.env.SPAM_CHANNEL;
const botAuthor = process.env.BOT_AUTHOR;

// sets everything for the bot, names / colors / etc
const variables = require('./cogs/variables.js');
let prefix;
let dev = false;
if(process.argv[2] === 'dev') {
  prefix = '.nt ';
  dev = true;
} else {
  prefix = '.n ';
}


// regex for matching commands / numbers
const doujinRegex = new RegExp("^[0-9]{1,6}$");
const doujinPageRegex = new RegExp("^[0-9]{1,3}$");

// Custom js
const but_nhentai = require('./cogs/buttons/nhentai.js');
const but_commands = require('./cogs/buttons/commands.js');
const but_sauced = require('./cogs/buttons/sauced.js');

const cmd_help = require('./cogs/commands/help.js');
const cmd_ping = require('./cogs/commands/ping.js');
const cmd_send = require('./cogs/commands/send.js');
const cmd_sauce = require('./cogs/commands/sauce.js');
const cmd_read = require('./cogs/commands/read.js');
const cmd_hmtai = require('./cogs/commands/hmtai.js');
const cmd_nekos = require('./cogs/commands/nekos.js');
const cmd_miss = require('./cogs/commands/miss.js');
const cmd_freaker = require('./cogs/commands/freaker.js');
const cmd_sfwHmtai = require('./cogs/commands/SFWhmtai.js');
const cmd_sfwNekos = require('./cogs/commands/SFWnekos.js');
const cmd_sfwNekoLove = require('./cogs/commands/SFWNekoLove.js');
const cmd_sfwMiss = require('./cogs/commands/SFWmiss.js');
const cmd_sfwFreaker = require('./cogs/commands/SFWfreaker.js');
//const cmd_eyebleach = require('./cogs/commands/eyebleach.js');
const cmd_whois = require('./cogs/commands/whois.js');
//const cmd_reverse = require('./cogs/commands/whois.js');
//const cmd_features = require('./cogs/commands/features.js');
//const cmd_mal = require('./cogs/commands/mal.js');
//const cmd_stats= require('./cogs/commands/stats.js');


disClient.on('ready', () => {
  console.log(`Logged in as ${disClient.user.tag}!`);
  disClient.user.setActivity('.n help | You smell weird', {
    type: 'PLAYING'
  });
});

disClient.on('message', async msg => {
  if (msg.channel.type === 'dm' && !msg.author.bot) {
    try {
      await disClient.channels.cache.get(spamChannel).send(`Message from: ${msg.author.username} / ${msg.author.id}`);
      await disClient.channels.cache.get(spamChannel).send(msg.content);
    } catch(error) {
      console.log("Couldn't send message to spam channel");
      console.log(error);
    }
  }
  // Only take commands with the prefix, from non bots
  if (!msg.content.startsWith(prefix) | msg.author.bot) { return; }
  console.log(`Received command from ${msg.author}: ${msg.content}`);
  flags = msg.content.split(' ');

  switch (flags[1]) {
    // Utility
    case "help":
      cmd_help.send(msg);
      break;
    case "ping":
      cmd_ping.send(msg);
      break;
    case "send":
      cmd_send.send(msg, disClient, flags);
      break;
    case "whois":
      cmd_whois.send(msg);
      break;
    // Weeb stuff
    case "sauce":
      cmd_sauce.send(msg, saucingData, disbut);
      break;
    case "hgif":
      if (!flags[2]) {
        cmd_nekos.hentai(msg, flags);
        return;
      }
      if (!msg.channel.nsfw) {
        return;
      } else {
        switch (flags[2]) {
          case "vanilla":
            cmd_nekos.hentai(msg);
            break;
          case "neko":
            cmd_nekos.neko(msg);
            break;
          case "lesbian":
            cmd_nekos.lesbian(msg);
            break;
          case "kuni":
            cmd_nekos.kuni(msg);
            break;
          case "classic":
            cmd_nekos.classic(msg);
            break;
          case "boobs":
            cmd_nekos.boobs(msg);
            break;
          case "anal":
            cmd_nekos.anal(msg);
            break;
          case "feet":
            cmd_nekos.feet(msg);
            break;
          case "pussy":
            cmd_nekos.pussy(msg);
            break;
          case "bj":
            cmd_nekos.bj(msg);
            break;
          case "pwankg":
            cmd_nekos.pwankg(msg);
            break;
          case "cum":
            cmd_nekos.cum(msg);
            break;
          case "spank":
            cmd_nekos.spank(msg);
            break;
          default:
            cmd_nekos.hentai(msg);
            break;
            break;
        }
      }
      break;
    case "hentai":
      if (!flags[2]) {
        cmd_hmtai.random(msg, flags);
        return;
      }
      if (!msg.channel.nsfw) {
        return;
      } else {
        switch (flags[2]) {
          case "tits":
            cmd_nekos.tits(msg);
            break;
          case "ero":
            cmd_nekos.ero(msg);
            break;
          case "erofeet":
            cmd_nekos.erofeet(msg);
            break;
          case "erokitsu":
            cmd_nekos.erokitsu(msg);
            break;
          case "erokemo":
            cmd_nekos.erokemo(msg);
            break;
          case "eroyuri":
            cmd_nekos.eroyuri(msg);
            break;
          case "eroneko":
            cmd_nekos.eroneko(msg);
            break;
          case "lewdkitsu":
            cmd_nekos.lewdkitsu(msg);
            break;
          case "lewdneko":
            cmd_nekos.lewdneko(msg);
            break;
          case "lewdkemo":
            cmd_nekos.lewdkemo(msg);
            break;
          case "keta":
            cmd_nekos.keta(msg);
            break;
          case "pussyJpg":
            cmd_nekos.pussyJpg(msg);
            break;
          case "cumJpg":
            cmd_nekos.cumJpg(msg);
            break;
          case "avatar":
            cmd_nekos.avatar(msg);
            break;
          case "holoero":
            cmd_nekos.holoero(msg);
            break;
          case "hololewd":
            cmd_nekos.hololewd(msg);
            break;
          case "gasm":
            cmd_nekos.gasm(msg);
            break;
          case "trap":
            cmd_nekos.trap(msg);
            break;
          case "ass":
            cmd_hmtai.ass(msg);
            break;
          case "cum":
            cmd_hmtai.cum(msg);
            break;
          case "creampie":
            cmd_hmtai.creampie(msg);
            break;
          case "femdom":
            cmd_hmtai.femdom(msg);
            break;
          case "manga":
            cmd_hmtai.manga(msg);
            break;
          case "vanilla":
            cmd_hmtai.hentai(msg);
            break;
          case "incest":
            cmd_hmtai.incest(msg);
            break;
          case "masturbation":
            cmd_hmtai.masturbation(msg);
            break;
          case "public":
            cmd_hmtai.public(msg);
            break;
          case "ero":
            cmd_hmtai.ero(msg);
            break;
          case "orgy":
            cmd_hmtai.orgy(msg);
            break;
          case "elf":
            cmd_hmtai.elves(msg);
            break;
          case "yuri":
            cmd_hmtai.yuri(msg);
            break;
          case "pantsu":
            cmd_hmtai.pantsu(msg);
            break;
          case "glasses":
            cmd_hmtai.glasses(msg);
            break;
          case "cuckold":
            cmd_hmtai.cuckold(msg);
            break;
          case "blowjob":
            cmd_nekos.blowjob(msg);
            break;
          case "boobjob":
            cmd_hmtai.boobjob(msg);
            break;
          case "foot":
            cmd_hmtai.foot(msg);
            break;
          case "thighs":
            cmd_hmtai.thighs(msg);
            break;
          case "vagina":
            cmd_hmtai.vagina(msg);
            break;
          case "ahegao":
            cmd_hmtai.ahegao(msg);
            break;
          case "uniform":
            cmd_hmtai.uniform(msg);
            break;
          case "gangbang":
            cmd_hmtai.gangbang(msg);
            break;
          case "tentacles":
            cmd_hmtai.tentacles(msg);
            break;
          case "gif":
            cmd_hmtai.gif(msg);
            break;
          case "neko":
            cmd_hmtai.neko(msg);
            break;
          case "wallpaper":
            cmd_hmtai.mobileWallpaper(msg);
            break;
          case "zettai":
            cmd_hmtai.zettai(msg);
            break;
          default:
            cmd_hmtai.random(msg, flags);
            break;
            break;
        }
      }
      break;
    case "miss":
      if (!flags[2]) {
        cmd_miss.random(msg);
        break;
      }
      if (!msg.channel.nsfw) {
        break;
      } else {
        switch(flags[2]) {
          // seems to 404 every time
          //case "ero":
          //  cmd_miss.ero(msg);
          //  break;
          case "pussy":
            cmd_miss.pussy(msg);
            break;
          case "boobs":
            cmd_miss.boobs(msg);
             break;
          default:
            cmd_miss.random(msg);
            break;
        }
      }
      break;
    case "freaker":
      if(!flags[2]) {
        cmd_freaker.random(msg);
        break;
      }
      if(!msg.channel.nsfw) {
        break;
      } else {
        switch(flags[2]) {
          case "hentai":
            cmd_freaker.hentai(msg);
            break;
          case "neko":
            cmd_freaker.neko(msg);
            break;
          case "trap":
            cmd_freaker.trap(msg);
            break;
        }
        break;
      }
      break;
    case "wallpaper":
      cmd_sfwHmtai.wallpaper(msg); // image
      break;
    case "mwallpaper":
      cmd_sfwHmtai.mobileWallpaper(msg); // image
      break;
    // Actions
    case "neko":
      cmd_sfwHmtai.neko(msg); // image
      //cmd_sfwNekos.neko(msg); // image
      //cmd_sfwNekoLove.neko(msg); // image
      //cmd_sfwFreaker.neko(msg); // image
      break;
    case "jahy":
      cmd_sfwHmtai.jahy(msg); // image, lewd
      break;
    case "lick":
      cmd_sfwHmtai.lick(msg); // gif
      break;
    case "slap":
      cmd_sfwNekos.slap(msg); // gif
      //cmd_sfwNekoLove.slap(msg); // gif
      break;
    case "spank":
      cmd_sfwHmtai.slap(msg); // gif
      break;
    case "pat":
      cmd_sfwNekos.pat(msg); // gif
      //cmd_sfwNekoLove.pat(msg); // image
      break;
    case "hug":
      //cmd_sfwNekos.hug(msg); // gif
      //cmd_sfwNekoLove.hug(msg); // image
      cmd_sfwMiss.hug(msg); // gif, lolis!
      break;
    case "kiss":
      //cmd_sfwNekos.kiss(msg); // gif
      //cmd_sfwNekoLove.kiss(msg); // image
      cmd_sfwMiss.kiss(msg); // gif
      break;
    case "cry":
      //cmd_sfwNekos.cry(msg);
      //cmd_sfwNekoLove.cry(msg); // gif
      cmd_sfwMiss.cry(msg); // gif
      break;
    case "smug":
      cmd_sfwNekos.smug(msg); // gif
      //cmd_sfwNekoLove.smug(msg); // image
      break;
    case "punch":
      //cmd_sfwNekos.punch(msg);
      cmd_sfwNekoLove.punch(msg); // gif
      break;
    case "kitsune":
      //cmd_sfwNekos.kitsune(msg);
      cmd_sfwNekoLove.kitsune(msg); // image
      break;
    case "waifu":
      //cmd_sfwNekos.waifu(msg);
      cmd_sfwNekoLove.waifu(msg); // image
      break;
    case "kill":
      cmd_sfwMiss.kill(msg); // gif
      break;
    case "stare":
      cmd_sfwMiss.view(msg); // gif
      break;
    case "dance":
      cmd_sfwMiss.dance(msg); // gif
      break;
    case "baguette":
      cmd_sfwFreaker.baguette(msg); // image
      break;
    case "dva":
      cmd_sfwFreaker.dva(msg); // iamge
      break;
    case "yuri":
      cmd_sfwFreaker.yuri(msg); // image
      break;
    case "anime":
      cmd_sfwFreaker.anime(msg); // image
      break;
    // Private
    case "read":
      if (msg.author.id === botAuthor) {
        cmd_read.send(msg, disClient);
      }
      break;

    // TODO
    case "eyebleach":
      break;
    case "reverse":
      break;
    case "features":
      break;
    case "mal":
      break;
    case "stats":
      break;
    default:
      cmd_help.send(msg);
      break;
  }

  // I should really move this to its own file
  // And find a way to throw it in that switch case
  if (doujinRegex.test(flags[1]) && msg.channel.nsfw) {
    let page;
    let sent;
    let doujinDataTmp;
    doujin = flags[1];
    if (doujinPageRegex.test(flags[2])) {
      page = parseInt(flags[2]);
    } else {
      page = 0;
    }
    try {
      // pages, title, tags
      doujinDataTmp = await fetchdoujin(doujin, msg, page);
    } catch (error) {
      try {
        await msg.channel.send('This doujin does not exist.');
      } catch {
        return;
      }
      return;
    }
    let mbd = new Discord.MessageEmbed()
      .setImage(doujinDataTmp[0][page])
      .setTitle(doujinDataTmp[1])
      .setColor(await variables.embedColor())
      .addFields({
        name: "Page",
        value: `${page}/${doujinDataTmp[0].length-1}`
      }, )
    try {
      mbd.setFooter(doujinDataTmp[2].join(', ') + "\u3000".repeat(25));
    } catch {
      mbd.setFooter("No tags found" + "\u3000".repeat(25))
    }
    let btn_n = new disbut.MessageButton()
      .setStyle(await variables.colorSecondary())
      .setLabel('Next')
      .setID('nhentaiNextPage');
    let btn_p = new disbut.MessageButton()
      .setStyle(await variables.colorPrimary())
      .setLabel('Previous')
      .setID('nhentaiPreviousPage');
    if (page <= 0) {
      btn_p.setDisabled();
    }
    if (page >= doujinDataTmp[0].length - 1) {
      btn_n.setDisabled();
    }
    try {
      sent = await msg.channel.send({
        embed: mbd,
        buttons: [btn_p, btn_n]
      });
    } catch {
      return;
    }
    doujinData = Object.assign(doujinData, {
      [sent.id]: doujinDataTmp
    });
    doujinDataTmp = [];
  }
});

disClient.on('clickButton', async (button) => {
  switch (button.id) {
    case "nhentaiNextPage":
      doujinData = await but_nhentai.nextPage(button, disbut, doujinData);
      break;
    case "nhentaiPreviousPage":
      doujinData = await but_nhentai.previousPage(button, disbut, doujinData);
      break;
    case "commandsSFW":
      but_commands.commandsSFW(button, disbut);
      break;
    case "commandsNSFW":
      but_commands.commandsNSFW(button, disbut);
      break;
    case "commandsSFWimage":
      but_commands.commandsSFWimage(button, disbut);
      break;
    case "commandsSFWgif":
      but_commands.commandsSFWgif(button, disbut);
      break;
    case "commandsTags":
      but_commands.commandsTags(button, disbut);
      break;
    case "saucedNextPage":
      saucingData = await but_sauced.nextPage(button, disbut, saucingData);
      break;
    case "saucedPreviousPage":
      saucingData = await but_sauced.previousPage(button, disbut, saucingData);
      break;
  }
});

async function fetchdoujin(doujin, id, page) {
  if (nhentai.exists(doujin)) {
    const doujinReply = await nhentai.getDoujin(doujin)
    return [doujinReply.pages, doujinReply.title, doujinReply.details.tags, page];
  }
};

disClient.login(process.env.BOT_TOKEN);
