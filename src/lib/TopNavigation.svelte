<script lang="ts">
	import { ArrowLeft, Ellipsis } from 'lucide-svelte';
	import Button from './components/ui/button/button.svelte';
	import RecipeActionsMenu from './RecipeActionsMenu.svelte';

	export let showLeftIcon: boolean, heading: string, showRightIcon: boolean;
</script>

<div class="main">
	{#if showLeftIcon}
		<Button variant="ghost" class="p-0" on:click={() => history.back()}><ArrowLeft /></Button>
	{:else}
		<div />
	{/if}
	{#if heading}
		<h1>{heading}</h1>
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

<style>
	.main {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.main > h1 {
		font-size: 18px;
		font-weight: 600;
	}
</style>
