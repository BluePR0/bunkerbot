const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const prefix = '!'
client.login(process.env.token);

client.on('ready', () => {
    console.log("Bot is online.");
})

client.on('message', async message => {
    if (message.channel.id == "798463800730583091") {
        if (!message.content.startsWith(prefix) || message.author.bot) {
            setTimeout(() => { message.delete(); console.log('Delete Message') }, 5000);
        }
        else {
            setTimeout(() => { message.delete(); console.log('Delete Message') }, 5000);
        }

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    }
});

