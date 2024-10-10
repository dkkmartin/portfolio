<script lang="ts">
	import LayersCard from '$lib/components/card/LayersCard.svelte'
	import Hero from '$lib/components/Hero.svelte'
	import ProjectCard from '$lib/components/project/projectCard.svelte'
	import type { Root } from '$lib/types/projectType'

	export let data: Root
</script>

<section class="h-[calc(100dvh-72px)] flex flex-col justify-around">
	<Hero />
</section>

<section
	class="min-h-screen flex gap-4 flex-col md:flex-row items-center justify-around bg-secondaryBackground/20 p-4"
>
	<div class="flex flex-col items-center gap-4">
		<h2 class="text-4xl font-bold">$~: whoami</h2>
		<p class="max-w-2xl text-center">
			I'm a recently graduated front-end developer with a passion for creating beautiful and
			functional web applications. While I'm new to the professional world of development, I've
			honed my skills through numerous personal projects, consistently striving for pixel-perfect
			designs and seamless user experiences. I thrive on problem-solving and enjoy tackling complex
			challenges to find elegant solutions. My keen attention to detail and commitment to clean,
			efficient code make me a dedicated and thorough developer. When I'm not coding, you can find
			me exploring the latest web technologies and frameworks to stay at the cutting edge of
			front-end development.
		</p>
	</div>

	<LayersCard>
		<img src="https://placehold.co/400x600" alt="Placeholder" />
	</LayersCard>
</section>

<section class="py-16 container mx-auto px-4 min-h-screen">
	<h3 class="text-4xl font-bold mb-12 text-center">Projects</h3>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
		{#each data.projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
