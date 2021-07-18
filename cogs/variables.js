const dedent = require('dedent-js');
const config = require('../config.json');

module.exports = {
  botPrefix: async function(dev) {
    // in config
    if(dev) {
      return config.bot.prefix.dev;
    } else {
      return config.bot.prefix.prime;
    }
  },
  // in config
  footer: async function() {
    return(config.bot.footer.text);
  },
  // in config
  footerImage: async function() {
    return(config.bot.footer.url);
  },
  commandsSFW: async function() {
    return(dedent(`
      ${config.bot.prefix.prime}help - Good job, you figured this one out
      ${config.bot.prefix.prime}ping - Pong!
      ${config.bot.prefix.prime}sauce - Send or reply to image with this command to sauce it
      ${config.bot.prefix.prime}send - Send a message as the bot
    `));
  },
  commandsSFWimage: async function() {
    return(dedent(`
      ${config.bot.prefix.prime}wallpaper
      ${config.bot.prefix.prime}mwallpaper
      ${config.bot.prefix.prime}neko
      ${config.bot.prefix.prime}jahy
      ${config.bot.prefix.prime}kitsune
      ${config.bot.prefix.prime}waifu
      ${config.bot.prefix.prime}baguette
      ${config.bot.prefix.prime}dva
      ${config.bot.prefix.prime}yuri
      ${config.bot.prefix.prime}anime
    `));
  },
  commandsSFWgif: async function(){
    return(dedent(`
      ${config.bot.prefix.prime}lick
      ${config.bot.prefix.prime}slap
      ${config.bot.prefix.prime}spank
      ${config.bot.prefix.prime}pat
      ${config.bot.prefix.prime}hug
      ${config.bot.prefix.prime}kiss
      ${config.bot.prefix.prime}cry
      ${config.bot.prefix.prime}smug
      ${config.bot.prefix.prime}punch
      ${config.bot.prefix.prime}kill
      ${config.bot.prefix.prime}stare
      ${config.bot.prefix.prime}dance
    `))
  },
  commandsNSFW: async function() {
    return(dedent(`
      ${config.bot.prefix.prime}nread {code} - Creates a reader for nHentai
      ${config.bot.prefix.prime}hentai - Returns a random hentai image (see optional tags)
      ${config.bot.prefix.prime}hgif - Returns a random hentai gif (see optional tags)
    `))
  },
  // in config
  hentaiTags: async function() {
    return(dedent(`
      \`\`\`tits, ero, erofeet, erokitsu, erokemo, eroyuri, eroneko, lewdkitsu, lewdneko, lewdkemo, keta, pussyJpg, cumJpg, avatar, holoero, hololewd, gasm, trap, ass, cum, creampie, femdom, manga, vanilla, incest, masturbation, public, ero, orgy, elf, yuri, pantsu, glases, cuckold, blowjob, boobjob, foot, thighs, vagina, ahegao, uniform, gangbang, tentacles, gif, neko, wallpaper, zettai\`\`\`
    `))
  },
  // in config
  hgifTags: async function() {
    return(dedent(`
      \`\`\`vanilla, neko, lesbian, kuni, classic, boobs, anal,  feet, pussy, bj, pwankg, cum, spank\`\`\`
    `))
  },
  // in config
  colorPrimary: async function() {
    return('blurple');
  },
  // in config
  colorSecondary: async function() {
    return ('red');
  },
  // in config
  embedColor: async function() {
    return('#0099FF');
  },
  sauceFooter: async function() {
    return(dedent(`
      Powered by SauceNAO api
    `));
  },
  sauceFooterImage: async function() {
    return(dedent(`
      https://cdn.discordapp.com/attachments/863118593508114482/865079472527769621/Ynoqpam.png
    `));
  },
  sauceColor: async function(similarity) {
    // Try to convert similarity into a hex value between #00FF00 - #FF0000
    /*
    try {
      console.log(`Creating hex color from ${similarity}`);
      let l = similarity / 100;
      let s = 120;
      let a = s * Math.min(l, 1 - l) / 100;
      let f = n => {
        console.log(`Converting to hex: ${l} ${s} ${a}`);
        let k = (n + similarity / 30) % 12;
        let color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        console.log(color);
        return Math.round(255 * color).toString(16).padStart(2, '0').slice(0, -1);
      }
      console.log(`#${f(0)}${f(8)}${f(4)}`);
      return `#${f(0)}${f(8)}${f(4)}`;
    }
    catch(error) {
      console.log(error);
      return "#FFFFFF";
    }
    */
    if(similarity > 75) {
      return("#00FF00");
    } else if (75 < similarity > 50) {
      return("#FFFF00");
    } else {
      return("#FF0000");
    }
  }
}
