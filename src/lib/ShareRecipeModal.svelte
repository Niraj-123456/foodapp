<script lang="ts">
	import Button from './components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import Input from './components/ui/input/input.svelte';
	export let open: boolean;
</script>

<Dialog.Root bind:open>
	<Dialog.Content class="max-w-sm rounded-2xl">
		<Dialog.Header class="mt-4 text-left">
			<Dialog.Title class="text-3xl">Recipe Link</Dialog.Title>
			<Dialog.Description class="pt-2 text-gray-600 leading-relaxed">
				Copy recipe link and share your recipe link with friends and family.
			</Dialog.Description>
		</Dialog.Header>
		<div class="my-2">
			<div class="px-3 py-4 border border-gray-100 text-gray-600 bg-gray-100 text-sm rounded-md">
				https://www.recipe1.com/djflsdfjljl123456
			</div>
		</div>
		<Dialog.Footer>
			<Button size="sm">Copy Link</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
