import 'dotenv';
import { GClient } from 'gcommands';
import { join } from 'path';
import { CollectionProvider } from './providers/CollectionProvider';

const client = new GClient({
    intents: [ 'GUILDS', 'GUILD_MESSAGES' ],
    messagePrefix: '!',
    devGuildId: process.env.devGuildId,
    database: new CollectionProvider(),
    dirs: [
        join(__dirname, 'commands'),
        join(__dirname, 'listeners')
    ]
})

console.log(client.getDatabase(CollectionProvider.prototype).get('test'));

client.login(process.env.token)