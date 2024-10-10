<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Bookmark, MessageSquareQuote, Share, Star } from 'lucide-svelte';
	import ShareRecipeModal from './ShareRecipeModal.svelte';
	import RateRecipeDialog from './RateRecipeDialog.svelte';
	import { goto } from '$app/navigation';

	let openShare: boolean = false,
		openRate: boolean = false;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<slot />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="text-nowrap">
		<DropdownMenu.Item on:click={() => (openShare = true)} class="px-4 py-3">
			<Share class="w-4 h-4 mr-2" />
			<span>Share</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => (openRate = true)} class="px-4 py-3">
			<Star class="w-4 h-4 text-gray-600 mr-2" />
			<span> Rate Recipe </span>
		</DropdownMenu.Item>
		<DropdownMenu.Item class="px-4 py-3" on:click={() => goto('/reviews')}>
			<MessageSquareQuote class="w-4 h-4 text-gray-600 mr-2" />
			<span> Reviews </span>
		</DropdownMenu.Item>
		<DropdownMenu.Item class="px-4 py-3">
			<Bookmark class="w-4 h-4 text-gray-600 mr-2" />
			<span> Save </span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>

<ShareRecipeModal bind:open={openShare} />
<RateRecipeDialog bind:open={openRate} />
