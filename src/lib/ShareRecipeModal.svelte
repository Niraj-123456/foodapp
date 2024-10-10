<script lang="ts">
	import Button from './components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index';
	export let open: boolean;
</script>

<Dialog.Root bind:open>
	<Dialog.Content class="max-w-sm rounded-3xl gap-2 p-4">
		<Dialog.Header class="mt-4 text-left">
			<Dialog.Title class="text-xl">Recipe Link</Dialog.Title>
			<Dialog.Description class="pt-2 text-gray-500 leading-relaxed">
				Copy recipe link and share your recipe link with friends and family.
			</Dialog.Description>
		</Dialog.Header>
		<div class="my-1 relative">
			<div
				class="pl-3 pr-20 py-3 border border-gray-200 text-gray-600 font-semibold bg-gray-100 text-xs rounded-md"
			>
				https://www.recipe1.com/djflsdfjlj
			</div>

			<Button size="sm" class="absolute top-0 right-0 h-10 rounded-md">Copy Link</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
