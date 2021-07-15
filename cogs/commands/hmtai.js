const Discord = require('discord.js');
const HMfull = require('hmfull');
const urlExists = require('url-exists');

module.exports = {
  random: async function(msg) {
    start()
    async function start() {
      let randomType = Math.floor(Math.random() * 30);
      let res;
      switch (randomType) {
        case 1:
          res = await HMfull.HMtai.nsfw.ass();
          break;
        case 2:
          res = await HMfull.HMtai.nsfw.bdsm();
          break;
        case 3:
          res = await HMfull.HMtai.nsfw.cum();
          break;
        case 4:
          res = await HMfull.HMtai.nsfw.creampie();
          break;
        case 5:
          res = await HMfull.HMtai.nsfw.femdom();
          break;
        case 6:
          res = await HMfull.HMtai.nsfw.manga();
          break;
        case 7:
          res = await HMfull.HMtai.nsfw.hentai();
          break;
        case 8:
          res = await HMfull.HMtai.nsfw.incest();
          break;
        case 9:
          res = await HMfull.HMtai.nsfw.masturbation();
          break;
        case 10:
          res = await HMfull.HMtai.nsfw.public();
          break;
        case 11:
          res = await HMfull.HMtai.nsfw.ero();
          break;
        case 12:
          res = await HMfull.HMtai.nsfw.orgy();
          break;
        case 13:
          res = await HMfull.HMtai.nsfw.elves();
          break;
        case 14:
          res = await HMfull.HMtai.nsfw.yuri();
          break;
        case 15:
          res = await HMfull.HMtai.nsfw.pantsu();
          break;
        case 16:
          res = await HMfull.HMtai.nsfw.glasses();
          break;
        case 17:
          res = await HMfull.HMtai.nsfw.cuckold();
          break;
        case 18:
          res = await HMfull.HMtai.nsfw.blowjob();
          break;
        case 19:
          res = await HMfull.HMtai.nsfw.boobjob();
          break;
        case 20:
          res = await HMfull.HMtai.nsfw.foot();
          break;
        case 21:
          res = await HMfull.HMtai.nsfw.thighs();
          break;
        case 22:
          res = await HMfull.HMtai.nsfw.vagina();
          break;
        case 23:
          res = await HMfull.HMtai.nsfw.ahegao();
          break;
        case 24:
          res = await HMfull.HMtai.nsfw.uniform();
          break;
        case 25:
          res = await HMfull.HMtai.nsfw.gangbang();
          break;
        case 26:
          res = await HMfull.HMtai.nsfw.tentacles();
          break;
        case 27:
          res = await HMfull.HMtai.nsfw.gif();
          break;
        case 28:
          res = await HMfull.HMtai.nsfw.neko();
          break;
        case 29:
          res = await HMfull.HMtai.nsfw.nsfwMobileWallpaper();
          break;
        case 30:
          res = await HMfull.HMtai.nsfw.zettaiRyouiki();
          break;
      }
      try {
        await msg.channel.send(res.url);
      } catch (error) {
        console.log(error);
        start();
      }
    }
  },
  ass: async function(msg) {
    res = await HMfull.HMtai.nsfw.ass();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  neko: async function(msg) {
    res = await HMfull.HMtai.nsfw.neko();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  zettai: async function(msg) {
    res = await HMfull.HMtai.nsfw.zettaiRyouiki();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  // returns 404
  bdsm: async function(msg) {
    res = await HMfull.HMtai.nsfw.bdsm();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  cum: async function(msg) {
    res = await HMfull.HMtai.nsfw.cum();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  creampie: async function(msg) {
    res = await HMfull.HMtai.nsfw.creampie();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  femdom: async function(msg) {
    res = await HMfull.HMtai.nsfw.femdom();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  manga: async function(msg) {
    res = await HMfull.HMtai.nsfw.manga();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  hentai: async function(msg) {
    res = await HMfull.HMtai.nsfw.hentai();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  incest: async function(msg) {
    res = await HMfull.HMtai.nsfw.incest();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  masturbation: async function(msg) {
    res = await HMfull.HMtai.nsfw.masturbation();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  public: async function(msg) {
    res = await HMfull.HMtai.nsfw.public();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  ero: async function(msg) {
    res = await HMfull.HMtai.nsfw.ero();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  orgy: async function(msg) {
    res = await HMfull.HMtai.nsfw.orgy();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  elves: async function(msg) {
    res = await HMfull.HMtai.nsfw.elves();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  yuri: async function(msg) {
    res = await HMfull.HMtai.nsfw.yuri();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  pantsu: async function(msg) {
    res = await HMfull.HMtai.nsfw.pantsu();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  glasses: async function(msg) {
    res = await HMfull.HMtai.nsfw.glasses();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  cuckold: async function(msg) {
    res = await HMfull.HMtai.nsfw.cuckold();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  blowjob: async function(msg) {
    res = await HMfull.HMtai.nsfw.blowjob()
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  boobjob: async function(msg) {
    res = await HMfull.HMtai.nsfw.boobjob();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  foot: async function(msg) {
    res = await HMfull.HMtai.nsfw.foot();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  thighs: async function(msg) {
    res = await HMfull.HMtai.nsfw.thighs();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  vagina: async function(msg) {
    res = await HMfull.HMtai.nsfw.vagina();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  ahegao: async function(msg) {
    res = await HMfull.HMtai.nsfw.ahegao();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  uniform: async function(msg) {
    res = await HMfull.HMtai.nsfw.uniform();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  gangbang: async function(msg) {
    res = await HMfull.HMtai.nsfw.gangbang();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  tentacles: async function(msg) {
    res = await HMfull.HMtai.nsfw.tentacles();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  gif: async function(msg) {
    res = await HMfull.HMtai.nsfw.gif();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  },
  mobileWallpaper: async function(msg) {
    res = await HMfull.HMtai.nsfw.nsfwMobileWallpaper();
    try {
      await msg.channel.send(res.url);
    } catch (error) {
      console.log("Failed to send image");
      console.log(error);
      return;
    }
  }
}
