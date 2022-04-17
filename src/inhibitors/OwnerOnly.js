'use strict';

const { Inhbitor } = require('gcommands');

/**
 * @property {Object<string>} [ids]
 * @typedef {object} OwnerOnlyOptions
 */

class OwnerOnlyInhbitor extends Inhbitor {
	/**
	 * @param {OwnerOnlyOptions} options
	 */
	constructor(options) {
		super(options);

		this.ids = options.ids || ['id1', 'id2'];
	}

	run(ctx) {
		if (!this.ids.includes(ctx.userId)) {
			return ctx.reply(
				this.resolveMessage(ctx) || 'You can not use this command',
			);
		} else {
			return true;
		}
	}
}

module.exports = OwnerOnlyInhbitor;
