
<h1 align="center">UwU hai thur~</h1>

# Overview

UwU is a self-hosted bot with awful code and inefficient functions. If you chose to use it, please only do so after checking out the code for yourself. Because I haven't laid down a single line of it without the need of a lethal injections worth of caffeine. It's not modular, adaptable, or fancy. Now with that out of the way, on to the features!

### Cogs

The cogs folder consists of two sub folders

##### Buttons

**commands.js** - handles the buttons for the help commands<br/>
**nhentai.js** - handles the page buttons for the nhentai reader<br/>
**sauced.js** - handles the page buttons for the image sourcing command<br/>

##### Commands

I really hope this one is self explanatory, this folder contains individual files for each command and all their related functions. Most functions are used, but some are unused and just exist because I wanted to implement all of [HMTai](https://www.npmjs.com/package/hmtai)

### Features

##### Nhentai reader

This is why I made the bot. It started off as a meme, but like all bonkable memes I got too deep and couldn't pull out. The reader pings an nHentai api to retrieve the pages of a requested doujin, loads them into an object labeled with the message id and sends an embed controlled by buttons to read it in chat.

##### SauceNAO

I've implemented (most?) of the saucenao api into the sauce command. This currently retrieves 10 results and loads them into an object labeled with the message id that's controlled by buttons, letting you scroll through the different results without spamming chat.

##### Your standard action gifs

Something I like about bots is being able to slap people with them, so I implemented a bunch of actions you can do.
* `lick`
* `slap`
* `spank`
* `pat`
* `hug`
* `kiss`
* `cry`
* `smug`
* `punch`
* `kill`
* `stare`
* `dance`

##### Other stuff

NSFW content is disabled inside of non NSFW chats by checking at the switch statement for commands, and often in the commands themselves. So that's nice I suppose, although with some of the wholesome anime pic commands you may end up popping a tiddy or two in general.

I dunno, I'm passing out as I write this so I'm sure this will get updated tonight to be a better readme anyways because I get OCD about that kinda thing.

### Installation

Do whatever it is you need to do to install the stuff in package.json. This is the first time I've used nodejs so no clue what that process is, I just `npm install whatever` and call it a day.

Make a file called `.env`. You'll need two tokens in it
* `BOT_TOKEN=whateveryoursis`
* `SAUCENAO_TOKEN=whateveryoursis`

Once that stuff is done, should just be able to run `npm uwu.js` and have yourself a bot.

# UwU nd wutnawt hav eh goodie goodie dai OwO

~ Jesus
