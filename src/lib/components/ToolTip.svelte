<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import { fade } from 'svelte/transition';
	export let openDelay = 0;
	export let transitionConfig = { y: 8, duration: 150 };
	export let sideOffset = 8;
	export let side: 'top' | 'bottom' | 'left' | 'right' = 'top';
	export let text: string = '';
</script>

<Tooltip.Root {openDelay}>
	<Tooltip.Trigger>
		<slot></slot>
	</Tooltip.Trigger>
	<Tooltip.Content transition={fade} {transitionConfig} {sideOffset} {side}>
		<div class="bg-background">
			<Tooltip.Arrow class="rounded-[2px] border-l border-t border-dark-10" />
		</div>
		<div
			class="flex items-center rounded-md justify-center rounded-input border border-dark-10 bg-background p-3 text-sm font-medium shadow-popover outline-none"
		>
			{text}
		</div>
	</Tooltip.Content>
</Tooltip.Root>
