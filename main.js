require('dotenv').config(); //initialize dotenv
// const Discord = require("discord.js");
// const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] });

const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ['CHANNEL', 'MESSAGE'],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// client.on("message", msg => {
//   if (msg.content === "ping") {
//     msg.reply("pong");
//   }
// })

client.on('messageCreate', (message) => {
  if (message.content.startsWith('ping')) {
    message.channel.send('pong!')
  };

  if (message.content.includes('virgos') || (message.content.includes('Virgos'))) {
    message.channel.send(`Yass -- I'm a Virgo bitch!`)
  };

  if (message.content.startsWith('Scarlettabelle?')) {
    message.channel.send(`Umm.. It's Isabel, but thanks.`)
  };

  if (message.content === 'men' || message.content === 'Men') {
    message.channel.send(`Can we just like end the patriarchy already?`)
  };
  
});

client.login(process.env.TOKEN)