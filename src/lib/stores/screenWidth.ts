import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createScreenWidthStore() {
	const { subscribe, set } = writable(browser ? window.innerWidth : 0);

	if (browser) {
		const updateWidth = () => set(window.innerWidth);
		window.addEventListener('resize', updateWidth);

		return {
			subscribe,
			destroy: () => window.removeEventListener('resize', updateWidth)
		};
	}

	return { subscribe };
}

export const screenWidth = createScreenWidthStore();
