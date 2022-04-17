import { Collection } from 'discord.js';
import { Provider, ProviderTypes, Logger } from 'gcommands';

export class CollectionProvider extends Provider {
	client: Collection<unknown, unknown>;
	type: ProviderTypes;

	constructor() {
		super();

		this.type = 'collection';

		this.client = new Collection();
	}

	init(): void {
		Logger.debug('Template initializated!');
		this.emit('connected', this.client);

		return;
	}

	async insert(key: string, value: any) {
		const data = await this.update(key, value);

		return data;
	}

	async get(key: string) {
		const data = await this.client.get(key);

		return data;
	}

	async update(key: string, value: any) {
		const data = await this.client.set(key, value);

		return data;
	}

	async delete(key: string) {
		const data = await this.client.delete(key);

		return data;
	}

	clear() {
		return this.client.clear();
	}
}
