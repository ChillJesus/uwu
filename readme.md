
<h1 align="center">UwU hai thur~</h1>

# Overview

UwU is a self-hosted bot with awful code and inefficient functions. If you chose to use it, please only do so after checking out the code for yourself. Because I haven't laid down a single line of it without the need of a lethal injections worth of caffeine. It's not modular, adaptable, or fancy. Now with that out of the way, on to the features!

### Cogs

The cogs folder consists of three sub folders

#### Buttons

This page contains all the button handlers, click something and it gets processed here

#### Commands

I really hope this one is self explanatory, this folder contains individual files for each command and all their related functions. Most functions are used, but some are unused and just exist because I wanted to implement all of [HMTai](https://www.npmjs.com/package/hmtai)

#### DB

This is where I was keeping my db stuff in testing, likely to change, but feel free to yeet the bot db in there. All on you, that js file might get lonely if you don't.

### Features

#### MongoDB

Because databases are better than objects, and mongodb is the best database. Subscribe to my religion, only twenty braincells a function.

#### Nhentai reader

This is why I made the bot. It started off as a meme, but like all bonkable memes I got too deep and couldn't pull out. The reader pings an nHentai api to retrieve the pages of a requested doujin, loads them into the mongodb database and scrolls through the pages via buttons.

#### SauceNAO

I've implemented (most?) of the saucenao api into the sauce command. This currently retrieves 10 results and loads them into the mongodb database and lets you scroll through the different sources via buttons. No more spamming the chat for lots of results.

#### Your standard action gifs

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

#### Other stuff

NSFW content is disabled inside of non NSFW chats by checking at the switch statement for commands, and often in the commands themselves. So that's nice I suppose, although with some of the wholesome anime pic commands you may end up popping a tiddy or two in general.

I dunno, I'm passing out as I write this so I'm sure this will get updated tonight to be a better readme anyways because I get OCD about that kinda thing.

### Installation

You'll need to have mongodb installed and setup, [read the docs](https://docs.mongodb.com/manual/installation/).
Change the name of `config.json.editme` to `config.json` and fill out everything blank in there.
If you're using a discord bot, you know how to get that token already.
[Here's](https://saucenao.com/user.php) where you can pick up a saucenao api key.
After that it's as simple as running
`$npm install`
In the root folder, modifying the config.json file to your liking, and running
`$npm uwu.js`
To run the bot. You can optionally put dev at the end to run with separate commands and a separate token if you're like me and use a different bot for testing.

# UwU nd wutnawt hav eh goodie goodie dai OwO

~ Jesus
