<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '../components/header/header/Header.svelte';
</script>

<ModeWatcher />
<Header />
<main>
	<slot />
</main>
