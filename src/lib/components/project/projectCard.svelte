<script lang="ts">
	import type { ProjectType } from '$lib/types/projectType'
	import ToolTip from '../ToolTip.svelte'
	import Button from '../ui/button/button.svelte'

	export let project: ProjectType

	let currentIndex = 0

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
	}

	function nextMedia() {
		currentIndex = (currentIndex + 1) % (project.images_url.length + (project.video_url ? 1 : 0))
	}

	function prevMedia() {
		currentIndex =
			(currentIndex - 1 + project.images_url.length + (project.video_url ? 1 : 0)) %
			(project.images_url.length + (project.video_url ? 1 : 0))
	}
</script>

<div
	class="bg-white dark:bg-secondaryBackground/20 rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row border border-white/5 min-h-[534px]"
>
	<div class="relative w-full lg:w-1/2 h-80 lg:h-auto">
		<div class="absolute inset-0 flex items-center justify-center">
			{#if project.video_url && currentIndex === 0}
				<video src={project.video_url} class="w-full h-full object-contain" controls></video>
			{:else}
				<img
					src={project.images_url[project.video_url ? currentIndex - 1 : currentIndex]}
					alt={`${project.name} - Image ${currentIndex}`}
					class="w-full h-full object-contain"
				/>
			{/if}
		</div>
		{#if project.images_url.length + (project.video_url ? 1 : 0) > 1}
			<button
				on:click={prevMedia}
				class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 rounded-full z-10"
			>
				&lt;
			</button>
			<button
				on:click={nextMedia}
				class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 rounded-full z-10"
			>
				&gt;
			</button>
		{/if}
	</div>
	<div class="p-8 flex-1 flex flex-col gap-4">
		<div class="flex flex-col gap-2 flex-1">
			<h4 class="text-2xl font-semibold">{project.name}</h4>
			<p class="text-gray-600 dark:text-gray-300 text-lg">{project.description}</p>
		</div>

		<div class="flex flex-wrap gap-2">
			{#each project.technologies as tech}
				<a href={tech.url} target="_blank" rel="noopener noreferrer">
					<Button>{tech.title}</Button>
				</a>
			{/each}
		</div>

		<div>
			<p class="text-sm text-gray-500">
				{formatDate(project.start_date)} - {project.end_date
					? formatDate(project.end_date)
					: 'Present'}
			</p>
		</div>

		<div class="flex flex-wrap gap-4">
			{#if project.github_url}
				<a
					href={project.github_url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-500 hover:underline text-lg">GitHub</a
				>
			{/if}
			{#if project.live_url}
				{#if project.name === 'iPlayMusic'}
					<ToolTip
						text="Because of spotify api restrictions, the live demo wont work unless you have been whitelisted"
					>
						<button class="text-green-500 hover:underline text-lg"> Live Demo </button>
					</ToolTip>
				{:else}
					<a
						href={project.live_url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-green-500 hover:underline text-lg">Live Demo</a
					>
				{/if}
			{/if}
		</div>
	</div>
</div>
