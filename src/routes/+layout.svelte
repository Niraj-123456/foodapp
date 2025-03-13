<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { miniAppInit } from '../miniAppInitializer';
	import '../app.css';
	import { user } from '$lib/store/user';
	import type { User } from '$lib/types/user';
	import CircularLoading from '$lib/common/CircularLoading.svelte';
	import { isDesktop } from '$lib/store/media-query';
	import { browser } from '$app/environment';

	let initializing = true;

	const handleInit = () => {
		initializing = true;
		miniAppInit()
			.then((u: User) => {
				if (u?.user_profile) {
					user.set(u);
				}
			})
			.catch((e) => {
				console.log('error', e);
				// handle error
			})
			.finally(() => {
				initializing = false;
			});
	};

	onMount(() => {
		handleInit();
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
	{#if initializing}
		<div class="w-full grid place-items-center">
			<CircularLoading size="4" />
		</div>
	{:else}
		<slot />
	{/if}
</main>
