<script lang="ts">
	import '../app.css'
	import { ModeWatcher } from 'mode-watcher'
	import Header from '$lib/components/header/Header.svelte'
</script>

<svelte:head>
	<title>Martin Bruun | Portfolio</title>
	<meta name="description" content="Martin Bruun's portfolio" />
</svelte:head>

<ModeWatcher />
<Header />
<main class="poppins-light">
	<slot />
</main>
