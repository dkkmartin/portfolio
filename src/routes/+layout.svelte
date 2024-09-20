<script lang="ts">
	import '../app.css'
	import { ModeWatcher } from 'mode-watcher'
	import Header from '$lib/components/header/Header.svelte'
</script>

<ModeWatcher />
<Header />
<main class="poppins-light">
	<slot />
</main>
