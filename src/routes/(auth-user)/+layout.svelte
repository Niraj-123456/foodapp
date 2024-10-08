<script>
	import StickyFooter from '$lib/StickyFooter.svelte';
</script>

<div class="w-full h-full px-6 pt-6 pb-28 grid">
	<slot />
	<StickyFooter />
</div>
