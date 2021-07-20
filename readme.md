# UwU

UwU is a self-hosted bot with awful code and inefficient functions. If you chose to use it, please only do so after checking out the code for yourself. Because I haven't laid down a single line of it without the need of a lethal injections worth of caffeine. It's not modular, adaptable, or fancy. Now with that out of the way, on to the features!

## Installation

You'll need [NodeJS](https://nodejs.org) and [MongoDB](https://www.mongodb.com/) installed

```bash
apt install nodejs npm
curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt update
sudo apt install mongodb-org
```

Then just go into where you cloned the repo and install dependencies via npm

```bash
npm install
```

## Usage

There's two ways to launch the bot, either the standard way or with the dev flag. If you launch with the dev flag, it will use the dev api key and dev prefix, so make sure you set those

```python
node uwu.js
node uwu.js dev
```

## Features

### General

#### Server configs

*[Being worked on]* This bot will feature server configs, which will allow admins to modify certain aspect, for example if the nsfw commands should be allowed, a white/blacklist of who can access commands, etc. These will be managed in the mongodb and accessed by a dm'd embed which uses dropdown menus to navigate and toggle features.

#### Send

A pretty basic command that allows you to send a message as the bot. Useful for channels where being anonymous is nice, such as ranting channels or places to to talk about personal stuff. When used it will first send a copied message of what you sent, then attempt to delete the original message.

### SFW

#### SauceNAO

The `.n sauce` feature utilizes the [SauceNAO](https://saucenao.com/) api to retrieve similar results of the image either replied to or sent. The results are loaded into a paginated embed that can be scrolled through with buttons, showing details on each results as well as similarity. In future updates I'll likely replace the buttons wth a dropdown menu.

#### Reaction / Action gifs

Like many other bots out there, this one utilizes a couple different api's to send reaction gifs. For example the command `.n lick` will send a gif relating to licking, it can be used in two ways, either with text afterwards such that the message references it, or by itself such that the message references the sender.

#### General Images / Gifs

Like above, the bot utilizes a couple different api's to retrieve images or gifs of general stuff. I.e. `.n kitsune` to retrieve some cute kitsune pics, or `.n anime` to retrieve some random anime pic.

### NSFW

#### nHentai

This is a reader for nhentai, running `.n nread {doujin}` will create a reader in chat that uses buttons to scroll through the pages, as well as a drop-down menu to jump to specific pages. Menus are limited to 25 items, so if the doujin is above that limit the menu spaces them out accordingly (for example, a 50 page doujin will have a menu for pages 1, 3, 5, 7, 9, etc).

#### Images / Gifs

This bot, like many others, uses a couple apis to send images and gifs. The `.n hgif` and `.n hentai` commands will each send random ones out of their respective tags. You can append one of the tags to specify the content you want.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[GPL v3.0](https://github.com/ChillJesus/uwu/blob/master/LICENSE)

# UwU nd wutnawt hav eh goodie goodie dai OwO

~ Jesus
