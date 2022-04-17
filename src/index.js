'use strict';

require('dotenv');
const { join } = require('node:path');
const { env } = require('node:process');
const { GClient } = require('gcommands');
const { CollectionProvider } = require('./providers/CollectionProvider');

const client = new GClient({
	intents: ['GUILDS', 'GUILD_MESSAGES'],
	messagePrefix: '!',
	messageSupport: true,
	devGuildId: env.devGuildId,
	database: new CollectionProvider(),
	dirs: [join(__dirname, 'commands'), join(__dirname, 'listeners')],
});

client.login(env.token);
