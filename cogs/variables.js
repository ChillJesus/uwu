const dedent = require('dedent-js');

module.exports = {
  footer: async function() {
    return(dedent(`
      Made with love, Јesus#0001
    `));
  },
  footerImage: async function() {
    return(dedent(`
      https://cdn.discordapp.com/avatars/194498932041187328/a_de9fbaa107b8748a7b09ff6df3fea198.gif
    `));
  },
  commandsSFW: async function() {
    return(dedent(`
      .n help - Good job, you figured this one out
      .n ping - Pong!
      .n sauce - Send or reply to image with this command to sauce it
      .n send - Send a message as the bot
    `));
  },
  commandsSFWimage: async function() {
    return(dedent(`
      .n wallpaper
      .n mwallpaper
      .n neko
      .n jahy
      .n kitsune
      .n waifu
      .n baguette
      .n dva
      .n yuri
      .n anime
    `));
  },
  commandsSFWgif: async function(){
    return(dedent(`
      .n lick
      .n slap
      .n spank
      .n pat
      .n hug
      .n kiss
      .n cry
      .n smug
      .n punch
      .n kill
      .n stare
      .n dance
    `))
  },
  commandsNSFW: async function() {
    return(dedent(`
      .n {code} - Creates a reader for nHentai
      .n {code} {page} - Creates a reader for nHentai starting at {page}
      .n hentai - Returns a random hentai image (see optional tags)
      .n hgif - Returns a random hentai gif (see optional tags)
    `))
  },
  hentaiTags: async function() {
    return(dedent(`
      \`\`\`tits, ero, erofeet, erokitsu, erokemo, eroyuri, eroneko, lewdkitsu, lewdneko, lewdkemo, keta, pussyJpg, cumJpg, avatar, holoero, hololewd, gasm, trap, ass, cum, creampie, femdom, manga, vanilla, incest, masturbation, public, ero, orgy, elf, yuri, pantsu, glases, cuckold, blowjob, boobjob, foot, thighs, vagina, ahegao, uniform, gangbang, tentacles, gif, neko, wallpaper, zettai\`\`\`
    `))
  },
  hgifTags: async function() {
    return(dedent(`
      \`\`\`vanilla, neko, lesbian, kuni, classic, boobs, anal,  feet, pussy, bj, pwankg, cum, spank\`\`\`
    `))
  },
  colorPrimary: async function() {
    return('blurple');
  },
  colorSecondary: async function() {
    return ('red');
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
