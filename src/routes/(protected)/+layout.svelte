<script>
	import { goto } from '$app/navigation';
	import StickyFooter from '$lib/StickyFooter.svelte';
	import { user } from '$lib/store/user';

	$: if (!$user?.user_profile) {
		goto('/login');
	}
</script>

{#if $user?.user_profile}
	<div class="w-full h-full p-4 pb-28 grid">
		<slot />
		<StickyFooter />
	</div>
{/if}
