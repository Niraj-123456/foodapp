<script lang="ts">
	import { fly } from 'svelte/transition';

	export let refresh: string;
</script>

{#key refresh}
	<div in:fly={{ y: -50, duration: 250, delay: 300 }} out:fly={{ y: -50, duration: 250 }}>
		<slot />
	</div>
{/key}
