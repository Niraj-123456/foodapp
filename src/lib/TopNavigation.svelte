<script lang="ts">
	import { ArrowLeft, Bookmark, Ellipsis, MessageSquareQuote, Share, Star } from 'lucide-svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import Button from './components/ui/button/button.svelte';

	export let showLeftIcon: boolean, heading: string, showRightIcon: boolean, open: boolean;
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
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Ellipsis class="text-gray-900 hover:text-gray-500" />
			</DropdownMenu.Trigger>

			<DropdownMenu.Content class="px-4 py-3">
				<DropdownMenu.Item on:click={() => (open = true)} class="p-2">
					<Share class="w-4 h-4 mr-2 " />
					<span>Share</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item class="p-2">
					<Star class="w-4 h-4 text-gray-600 mr-2 fill-gray-900" />
					<span> Rate Recipe </span>
				</DropdownMenu.Item>
				<DropdownMenu.Item class="p-2">
					<MessageSquareQuote class="w-4 h-4 text-gray-600 mr-2 fill-gray-900" />
					<span> Give Review </span>
				</DropdownMenu.Item>
				<DropdownMenu.Item class="p-2">
					<Bookmark class="w-4 h-4 text-gray-600 mr-2 fill-gray-900" />
					<span> Save </span>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
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
