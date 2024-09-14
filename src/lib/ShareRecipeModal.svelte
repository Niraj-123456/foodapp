<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Modal, Input } from 'flowbite-svelte';
	export let open: boolean;
</script>

<Modal title="Recipe Link" bind:open autoclose outsideclose>
	<p class="text-sm">Copy recipe link and share your recipe link with friends and family.</p>
	<Input
		type="text"
		class="w-full rounded-md mt-2 text-xs text-gray-500"
		value="https://www.recipe1.com/djflsdfjljl123456"
	/>
	<svelte:fragment slot="footer">
		<Button size="sm" color="primary">Copy Link</Button>
	</svelte:fragment>
</Modal>
