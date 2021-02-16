const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '~'

client.once('ready', () => {
    console.log('I\'m Subreddit bot! I was programmed by @Roy (@kame).');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'meme'){
        message.channel.send('Have some memes:')
        message.channel.send('https://www.reddit.com/r/memes')
    } else if(command == 'dankmeme'){
        message.channel.send('Have some dank memes:')
        message.channel.send('https://www.reddit.com/r/dankmemes')
    } else if(command == 'minecraft'){
        message.channel.send('You like Minecraft? Me too! Have some Minecraft:')
        message.channel.send('https://www.reddit.com/r/minecraft')
    } else if(command == 'moddedminecraft'){
        message.channel.send('You like mods? Me too! Have some mods:')
        message.channel.send('https://www.reddit.com/r/feedthebeast')
    } else if(command == 'fortnite'){
        message.channel.send('*Gives bad look and shakes head*')
        message.channel.send('*sighs* Here\'s some Fortnite:')
        message.channel.send('https://www.reddit.com/r/fortnite')
    }
});

client.login('ODExMjQ3NTczMjA5MzE3NDQ5.YCvbLQ.D8B6prExhmv0zWafCx9pFAfVYvE');