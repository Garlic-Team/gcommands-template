require('dotenv');
const { GClient } = require('gcommands');
const { join } = require('path');

const client = new GClient({
    intents: [ 'GUILDS', 'GUILD_MESSAGES' ],
    messagePrefix: '!',
    devGuildId: process.env.devGuildId,
    dirs: [
        join(__dirname, 'commands'),
        join(__dirname, 'events')
    ]
})

client.login(process.env.token)