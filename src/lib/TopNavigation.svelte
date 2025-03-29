<script lang="ts">
	import { ArrowLeft, Ellipsis } from 'lucide-svelte';
	import Button from './components/ui/button/button.svelte';
	import RecipeActionsMenu from './RecipeActionsMenu.svelte';

	export let showLeftIcon: boolean, heading: string, showRightIcon: boolean;
</script>

<div class="w-full flex justify-between items-center sticky top-0 z-10 bg-white">
	{#if showLeftIcon}
		<Button variant="ghost" class="p-0" on:click={() => history.back()}><ArrowLeft /></Button>
	{:else}
		<div />
	{/if}
	{#if heading}
		<h1 class="text-lg font-semibold">{heading}</h1>
	{:else}
		<div />
	{/if}

	{#if showRightIcon}
		<RecipeActionsMenu>
			<Ellipsis />
		</RecipeActionsMenu>
	{:else}
		<div />
	{/if}
</div>
