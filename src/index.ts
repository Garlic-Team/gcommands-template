import 'dotenv';
import { GClient } from 'gcommands';
import { join } from 'path';

const client = new GClient({
    intents: [ 'GUILDS', 'GUILD_MESSAGES' ],
    messagePrefix: '!',
    devGuildId: process.env.devGuildId,
    dirs: [
        join(__dirname, 'commands'),
        join(__dirname, 'listeners')
    ]
})

client.login(process.env.token)