<script lang="ts">
	import { onMount } from 'svelte'
	import { activeSection } from '$lib/stores/activeSection'

	export let sectionId: string

	let sectionRef: HTMLElement

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection.set(sectionId)
					}
				})
			},
			{
				threshold: 0.2,
				rootMargin: '-20% 0px -20% 0px'
			}
		)

		if (sectionRef) {
			observer.observe(sectionRef)
		}

		return () => {
			if (sectionRef) {
				observer.unobserve(sectionRef)
			}
		}
	})
</script>

<div bind:this={sectionRef}>
	<slot />
</div>
