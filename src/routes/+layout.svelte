<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import '../app.css';
	import { user } from '$lib/store/user';
	import { isDesktop } from '$lib/store/media-query';
	import { browser } from '$app/environment';

	$: console.log('user', $user);

	onMount(() => {
		if (browser) window.addEventListener('resize', handleDetectScreenSize);
	});

	const handleDetectScreenSize = () => {
		if (window.innerWidth < 768) {
			isDesktop.set(false);
		} else {
			isDesktop.set(true);
		}
	};

	onDestroy(() => {
		if (browser) window.removeEventListener('resize', handleDetectScreenSize);
	});
</script>

<main class="w-full min-h-lvh grid">
	<slot />
</main>
