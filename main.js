const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Discord.Client();
const prefix = '!'
client.login(process.env.token);

client.on('ready', () => {
    console.log("Bot is online.");
})

client.on('message', async message => {
     let blue = message.guild.members.get('305316011576655882');
     blue.addRole(739548975027192001)
    
    if (message.channel.name.toLowerCase() == "bunker") {
        if (!message.content.startsWith(prefix) || message.author.bot) {
            setTimeout(() => { message.delete(); console.log('Delete Message') }, 3000);
        }
        else {
            setTimeout(() => { message.delete(); console.log('Delete Message') }, 3000);
        }

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    }
    else {
        console.log("Not Bunker Channel - " + message.channel.name);
    }
});

