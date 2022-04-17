import { ArgumentType, Command, CommandType } from 'gcommands';
import { inspect } from 'util';
import { OwnerOnlyInhbitor } from '../../inhibitors/OwnerOnly';

new Command({
    name: 'eval',
    description: 'Evalute javascript code!',
    inhibitors: [
        new OwnerOnlyInhbitor()
    ],
    arguments: [
        {
            name: 'code',
            description: 'Code to evalute',
            type: ArgumentType.STRING,
            required: true
        }
    ],
    type: [ CommandType.SLASH, CommandType.MESSAGE ],
    run: async(ctx) => {
        /**
         * Why ctx.message.content.slice(ctx.client.options.messagePrefix.length).trim().split(/ +/g).slice(1).join(' ') ?
         * Because if you use ctx.message.content.slice(ctx.client.options.messagePrefix.length).trim() it will return the whole message
         * Code argument in message command only return first word of message
         */
        const code = ctx.message ? ctx.message.content.slice(ctx.client.options.messagePrefix.length).trim().split(/ +/g).slice(1).join(' ') : ctx.arguments.getString('code');

		let res: string;
		try {
			res = await Promise.resolve(eval(`(async() => { ${code} })()`));
		} catch(e) {
			res = e;
		}

        return ctx.reply({
            content: [
                '```js',
                `${inspect(res)}`,
                '```'
            ].join('\n'),
            ephemeral: true
        });
    }
});