<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { isDesktop } from '../store/media-query';
	import { browser } from '$app/environment';
	import '../app.css';

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

<main
	class="w-full min-h-lvh bg-white"
	data-vaul-drawer-wrapper
	style="transform-origin: center top; transition-property: transform, border-radius; transition-duration: 0.5s; transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);"
>
	<slot />
</main>
