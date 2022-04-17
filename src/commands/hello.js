'use strict';

const { Command, CommandType } = require('gcommands');

new Command({
	name: 'hello',
	description: 'Say hello!',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: ctx => ctx.reply(`Hello ${ctx.user.username}`),
});
