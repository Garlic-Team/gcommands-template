'use strict';

const { Command, CommandType } = require('gcommands');

new Command({
	name: 'ping',
	description: 'Send ping of bot',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async ctx => {
		const message = await ctx.reply({
			content: 'Loading...',
			ephemeral: true,
			fetchReply: true,
		});

		const restPing = message.createdTimestamp - ctx.createdTimestamp;

		return ctx.reply(
			`My ping is \`${ctx.client.ws.ping}ms\` | \`${restPing}ms\``,
		);
	},
});
