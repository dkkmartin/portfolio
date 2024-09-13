<script>
	import Marquee from './Marquee.svelte';
	import Icon from '../Icon.svelte';
	import MagicCard from '../card/MagicCard.svelte';
	import ToolTip from '../ToolTip.svelte';
	import { screenWidth } from '$lib/stores/screenWidth';
	const icons = [
		{
			name: 'React',
			url: 'https://reactjs.org/'
		},
		{
			name: 'Next.js',
			url: 'https://nextjs.org/'
		},
		{
			name: 'TypeScript',
			url: 'https://www.typescriptlang.org/'
		},
		{
			name: 'JavaScript',
			url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
		},
		{
			name: 'Svelte',
			url: 'https://svelte.dev/'
		},
		{
			name: 'Tailwind',
			url: 'https://tailwindcss.com/'
		},
		{
			name: 'CSS3',
			url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
		},
		{
			name: 'HTML5',
			url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
		},
		{
			name: 'Playwright',
			url: 'https://playwright.dev/'
		},
		{
			name: 'Figma',
			url: 'https://www.figma.com/'
		},
		{
			name: 'Expo',
			url: 'https://expo.dev/'
		},

		{
			name: 'Node.js',
			url: 'https://nodejs.org/'
		},
		{
			name: 'Supabase',
			url: 'https://supabase.com/'
		},
		{
			name: 'Git',
			url: 'https://git-scm.com/'
		},
		{
			name: 'Vite.js',
			url: 'https://vitejs.dev/'
		}
	];

	let firstRow = icons.slice(0, icons.length / 2);
	let secondRow = icons.slice(icons.length / 2);
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20"
>
	<Marquee pauseOnHover class="[--duration:20s]">
		{#each firstRow as item}
			<ToolTip text={item.name}>
				<a href={item.url} target="_blank">
					<MagicCard>
						<Icon name={item.name} size={$screenWidth > 768 ? 68 : 40} />
					</MagicCard>
				</a>
			</ToolTip>
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:20s]">
		{#each secondRow as item}
			<ToolTip text={item.name} side="bottom">
				<a href={item.url} target="_blank">
					<MagicCard>
						<Icon name={item.name} size={$screenWidth > 768 ? 68 : 40} />
					</MagicCard>
				</a>
			</ToolTip>
		{/each}
	</Marquee>
	<div
		class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-[#1c1b22]"
	></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-[#1c1b22]"
	></div>
</div>
