<script lang="ts">
	import { Star } from 'lucide-svelte';
	import { categoryMatrix, rateMatrix, timeMatrix } from '../../utils/searchFilterMatrix';
	import Button from './ui/button/button.svelte';
	import * as Drawer from './ui/drawer/index';
	import { cn } from '$lib/utils';

	export let label: string | undefined = '';
	export let icon: any | undefined = undefined;
	export let open: boolean = false;

	let selectedTimeFilter = 'ALL';
	let selectedRateFilter = '5';
	let selectedCategoryFilter = 'ALL';

	const handleChangeTimeFilter = (key: string) => {
		selectedTimeFilter = key;
	};

	const handhleChangeRateFilter = (value: string) => {
		selectedRateFilter = value;
	};

	const handleChangeCategoryFilter = (key: string) => {
		selectedCategoryFilter = key;
	};
</script>

<Drawer.Root bind:open>
	<Drawer.Trigger asChild let:builder>
		<Button on:click={() => (open = true)}>
			{#if label}
				{label}
			{/if}
			{#if icon}
				<svelte:component this={icon} class="w-5 h-6" />
			{/if}
		</Button>
	</Drawer.Trigger>
	<Drawer.Content class="border border-black rounded-t-[40px]">
		<div class="px-8 pb-8 w-full">
			<Drawer.Header class="p-2 font-bold">Filter Search</Drawer.Header>
			<div class="flex gap-4 flex-col">
				<h4 class="font-bold">Time</h4>
				<div class="flex items-center gap-4">
					{#each timeMatrix as time}
						<div
							role="button"
							tabindex="-1"
							class={cn('filter_opt', selectedTimeFilter === time.key ? 'active' : '')}
							on:click={() => handleChangeTimeFilter(time.key)}
							on:keydown
						>
							{time.value}
						</div>
					{/each}
				</div>
			</div>
			<div class="flex gap-4 flex-col mt-8">
				<h4 class="font-bold">Rate</h4>
				<div class="flex items-center gap-4">
					{#each rateMatrix as rate}
						<div
							role="button"
							tabindex="-1"
							class={cn('filter_opt rate', selectedRateFilter === rate ? 'active' : '')}
							on:click={() => handhleChangeRateFilter(rate)}
							on:keydown
						>
							{rate}
							<Star class="fill-primary w-5 h-5" />
						</div>
					{/each}
				</div>
			</div>
			<div class="flex gap-4 flex-col mt-8">
				<h4 class="font-bold">Category</h4>
				<div class="flex items-center gap-4 flex-wrap">
					{#each categoryMatrix as category}
						<div
							role="button"
							tabindex="-1"
							class={cn('filter_opt', selectedCategoryFilter === category.key ? 'active' : '')}
							on:click={() => handleChangeCategoryFilter(category.key)}
							on:keydown
						>
							{category.value}
						</div>
					{/each}
				</div>
			</div>
			<div class="mt-10 w-full">
				<Button class="w-full h-12 text-lg">Filter</Button>
			</div>
		</div>
	</Drawer.Content>
</Drawer.Root>

<style>
	.filter_opt {
		@apply border border-primary text-primary px-2 py-1 rounded-[10px];
	}

	.filter_opt.rate {
		@apply flex gap-1 items-center;
	}

	.filter_opt.active {
		@apply bg-primary text-white;
	}
</style>
