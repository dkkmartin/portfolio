<script lang="ts">
	import { cn } from '$lib/utils'
	import { onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	export let words: string[]
	export let duration: number = 4000

	let className: string = ''
	export { className as class }

	let index = 0
	let chnageIndex = () => {
		index = (index + 1) % words.length
	}
	onMount(() => {
		let interval = setInterval(chnageIndex, duration)
		return () => clearInterval(interval)
	})
</script>

<div class="overflow-hidden py-2">
	{#key index}
		<!-- Change In, Out Animation for Rotate Effects -->
		<h1 in:fly={{ y: -15, delay: 200 }} out:fly={{ y: 20, duration: 200 }} class={cn(className)}>
			{words[index]}
		</h1>
	{/key}
</div>
