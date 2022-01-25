import type { Snowflake } from 'discord.js';
import { CommandContext, ComponentContext, Inhibitor } from 'gcommands';

export interface OwnerOnlyOptions extends Inhibitor.InhibitorOptions {
	ids: Array<Snowflake>;
}

export class OwnerOnlyInhbitor extends Inhibitor.Inhibitor {
    public readonly ids: Array<Snowflake>;

	constructor(options) {
		super(options);

		this.ids = options.ids || ['id1', 'id2'];
	}

	run(ctx: CommandContext | ComponentContext): boolean | any {
		if (!this.ids.includes(ctx.userId)) return ctx.reply(this.resolveMessage(ctx) || 'You can not use this command');
		else return true;
	}
}
