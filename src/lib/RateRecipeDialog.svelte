<script lang="ts">
	import { Star } from 'lucide-svelte';
	import Button from './components/ui/button/button.svelte';
	import * as Dialog from './components/ui/dialog/index';

	export let open: boolean = false;
</script>

<Dialog.Root bind:open>
	<Dialog.Content class="max-w-fit rounded-lg pb-3">
		<Dialog.Header>Rate Recipe</Dialog.Header>
		<div class="flex gap-4 items-center justify-center">
			{#each [0, 1, 2, 3, 4] as _}
				<Star class="text-[#FFAD30]" />
			{/each}
		</div>

		<Dialog.Footer class="justify-center flex-row">
			<Button size="sm" class="w-max" disabled>Submit</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
