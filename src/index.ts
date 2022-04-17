import 'dotenv';
import { env } from 'node:process';
import { GClient } from 'gcommands';
import { join } from 'node:path';
import { CollectionProvider } from './providers/CollectionProvider';

const client = new GClient({
	intents: ['GUILDS', 'GUILD_MESSAGES'],
	messagePrefix: '!',
	messageSupport: true,
	devGuildId: env.devGuildId,
	database: new CollectionProvider(),
	dirs: [join(__dirname, 'commands'), join(__dirname, 'listeners')],
});

client.login(env.token);
