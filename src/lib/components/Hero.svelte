<script>
	import WordsFadeIn from '$lib/components/words/WordsFadeIn.svelte'
	import WordsPullUp from '$lib/components/words/WordsPullUp.svelte'
	import { Motion } from 'svelte-motion'
	import Button from './ui/button/button.svelte'
	import MarqueeWithIcons from '$lib/components/marquee/MarqueeWithIcons.svelte'
	import WordRotate from './words/WordRotate.svelte'

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5
			}
		}
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 }
	}
</script>

<Motion variants={containerVariants} initial="hidden" animate="visible" let:motion>
	<div class="flex flex-col items-center justify-center" use:motion>
		<Motion variants={itemVariants} let:motion>
			<div use:motion>
				<WordsPullUp words="Hi, I'm" class="text-4xl md:text-6xl" />
			</div>
		</Motion>

		<Motion variants={itemVariants} let:motion>
			<div use:motion>
				<WordsFadeIn words="Martin" class="text-6xl md:text-8xl font-bold" />
			</div>
		</Motion>

		<Motion variants={itemVariants} let:motion>
			<div use:motion>
				<div>
					<WordsFadeIn
						words="Front-end developer"
						class="text-xl md:text-3xl text-gray-600 dark:text-primary-dark"
					/>
				</div>
			</div>
		</Motion>

		<Motion variants={itemVariants} let:motion>
			<div class="pt-6" use:motion>
				<a href="https://rxresu.me/dkkmartin/cv" target="_blank">
					<Button>Resume</Button>
				</a>
			</div>
		</Motion>
	</div>
</Motion>

<MarqueeWithIcons />
