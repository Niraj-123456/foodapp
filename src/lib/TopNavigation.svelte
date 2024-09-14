<script lang="ts">
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ArrowLeft, Ellipsis, Share, Star, MessageSquareQuote, Bookmark } from 'lucide-svelte';
	export let showLeftIcon: boolean, heading: string, showRightIcon: boolean, open: boolean;
</script>

<div class="main">
	{#if showLeftIcon}
		<span on:click={() => history.back()} on:keydown><ArrowLeft /></span>
	{:else}
		<div />
	{/if}
	{#if heading}
		<h1>{heading}</h1>
	{:else}
		<div />
	{/if}
	{#if showRightIcon}
		<span role="button" tabindex="0"><Ellipsis /></span>
		<Dropdown class="left-10">
			<DropdownItem on:click={() => (open = true)} class="flex items-center gap-2 py-3 px-4"
				><Share /> Share</DropdownItem
			>
			<DropdownItem class="flex items-center gap-2 py-3 px-4"><Star /> Rate Recipe</DropdownItem>
			<DropdownItem class="flex items-center gap-2 py-3 px-4"
				><MessageSquareQuote /> Review</DropdownItem
			>
			<DropdownItem class="flex items-center gap-2 py-3 px-4"><Bookmark /> Unsave</DropdownItem>
		</Dropdown>
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
