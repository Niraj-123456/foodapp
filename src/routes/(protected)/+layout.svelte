<script>
	import { goto } from '$app/navigation';
	import StickyFooter from '$lib/components/StickyFooter.svelte';
	import { user } from '../../store/user';

	$: if (!$user) {
		goto('/login');
	}
</script>

{#if $user}
	<div class="w-full h-full p-4 pb-28 grid">
		<slot />
		<StickyFooter />
	</div>
{/if}
