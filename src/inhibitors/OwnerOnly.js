// https://garlic-team.js.org/guide/inhibitors/first-inhibitor.html

const { Inhbitor } = require('gcommands');

class OwnerOnlyInhbitor extends Inhbitor {
	constructor(options) {
		super(options);

		this.ownerIds = options.ids || ['id1', 'id2'];
	}

	run(ctx) {
		if (!this.ownerIds.includes(ctx.userId)) return ctx.reply(this.resolveMessage(ctx) || 'You can not use this command');
		else return true;
	}
}

module.exports = OwnerOnlyInhbitor;
