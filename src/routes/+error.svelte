<script>
	import { page } from '$app/stores';
</script>

<div>
	{#if $page.status === 404}
		<div>404 Not Found</div>
	{:else}
		<div>Some error occurred</div>
	{/if}
</div>
