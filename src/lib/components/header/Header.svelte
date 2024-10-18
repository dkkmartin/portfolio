<script lang="ts">
	import { activeSection } from '$lib/stores/activeSection'
</script>

<header
	class="flex justify-around items-center py-4 max-h-[72px] sticky top-0 z-50 bg-background/80 backdrop-blur-md"
>
	<div class="w-16 h-16">
		<img src="/mb-logo.png" alt="Martin Bruun" />
	</div>
	<nav class="text-2xl font-thin">
		<ul class="flex gap-10">
			<li class="uppercase">
				<a
					href="#section-2"
					class="nav-link hover:text-primary transition-colors"
					class:text-primary={$activeSection === 'section-2'}
					data-section="section-2">About</a
				>
			</li>
			<li class="uppercase">
				<a
					href="#section-3"
					class="nav-link hover:text-primary transition-colors"
					class:text-primary={$activeSection === 'section-3'}
					data-section="section-3">Projects</a
				>
			</li>
			<li class="uppercase">
				<a
					href="#section-4"
					class="nav-link hover:text-primary transition-colors"
					class:text-primary={$activeSection === 'section-4'}
					data-section="section-4">Contact</a
				>
			</li>
		</ul>
	</nav>
</header>
