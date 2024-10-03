<script>
	import LayersCard from '$lib/components/card/LayersCard.svelte'
	import Hero from '$lib/components/Hero.svelte'
</script>

<section class="h-[calc(100dvh-72px)] flex flex-col justify-around">
	<Hero />
</section>

<section class="h-screen flex items-center justify-around bg-secondaryBackground/20">
	<div class="flex flex-col items-center gap-4">
		<h2 class="text-4xl font-bold">About me</h2>
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

<section class="h-screen flex justify-around">
	<h3 class="text-4xl font-bold">Projects</h3>
</section>
