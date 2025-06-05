<script lang="ts">
	import { page } from '$app/stores';
	import { Home, Bookmark, Bell, User, Plus } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import AddRecipe from './AddRecipe.svelte';
	import Button from './ui/button/button.svelte';
	import CustomSheet from './common/custom-sheet/CustomSheet.svelte';

	let options = [
		{ link: '/', label: 'Home', icon: Home },
		{ link: '/saved-recipes', label: 'Bookmark', icon: Bookmark },
		{ link: '/add-recipes', label: 'Add', icon: Plus },
		{ link: '/notifications', label: 'Notifications', icon: Bell },
		{ link: '/profile', label: 'Profile', icon: User }
	];

	let openAddRecipeSheet = false;
</script>

<div class="w-full fixed bottom-0 left-0 py-4 px-6 bg-white border border-gray-300 rounded-t-xl">
	<ul class="flex justify-between items-center">
		{#each options as option}
			<li>
				{#if option.label === 'Add'}
					<Button
						class="bg-primary text-white w-[52px] h-[52px] p-2 rounded-full absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4"
						on:click={() => (openAddRecipeSheet = true)}
					>
						<svelte:component this={option.icon} />
					</Button>
				{:else}
					<a
						href={option?.link}
						class={cn(
							option?.link === $page.url.pathname ? 'text-primary' : 'text-gray-700',
							'flex flex-col items-center gap-1'
						)}
					>
						<svelte:component
							this={option.icon}
							class={cn(option.link === $page.url.pathname ? 'stroke-primary' : '')}
						/>
						<span class="text-xs">{option.label}</span>
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<!-- <AddRecipe bind:open={openAddRecipeSheet} /> -->

<CustomSheet bind:open={openAddRecipeSheet} onClose={() => (openAddRecipeSheet = false)}>
	<h2>Native Dialog Component</h2>

	<p>This dialog behaves like native mobile dialog component</p>

	<button on:click={() => (openAddRecipeSheet = false)}>close</button>
</CustomSheet>
