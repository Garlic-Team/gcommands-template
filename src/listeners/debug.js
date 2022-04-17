'use strict';

const { Listener } = require('gcommands');

new Listener({
	event: 'debug',
	run: string => {
		console.log(string);
	},
});
