// https://garlic-team.js.org/guide/getting-started/first-command.html

const { Command, CommandType } = require('gcommands');

new Command({
    name: 'hello',
    description: 'Say hello!',
    type: [ CommandType.SLASH ],
    run: (ctx) => {
        return ctx.reply(`Hello ${ctx.user.username}`);
    }
})