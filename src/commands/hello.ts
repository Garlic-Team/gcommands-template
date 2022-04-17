import { Command, CommandType } from 'gcommands';

new Command({
    name: 'hello',
    description: 'Say hello!',
    type: [ CommandType.SLASH, CommandType.MESSAGE ],
    run: (ctx) => {
        return ctx.reply(`Hello ${ctx.user.username}`);
    }
});