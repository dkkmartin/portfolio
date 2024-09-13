<script lang="ts">
	import { cn } from '$lib/utils';
	export let name: string;
	export let size: number = 24;
	export let className: string | undefined = undefined;
	let svg: string;

	$: import(`$lib/svg/${name}.svg`).then((module) => (svg = module.default));
</script>

{#if svg}
	<img
		loading="eager"
		src={svg}
		alt={name}
		width={size}
		height={size}
		class={className ? cn(className) : ''}
	/>
{/if}
