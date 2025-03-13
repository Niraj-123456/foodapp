<script lang="ts">
	import { Star } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index';
	import * as Drawer from '$lib/components/ui/drawer/index';
	import { cn } from './utils';
	import { isDesktop } from './store/media-query';

	export let open: boolean = false;

	let totalStars = 5;
	let activeStar = -1;
	let precision = 0.5;
	let hoverActiveStar = -1;
	let isHovered = false;

	const handleClick = (e: MouseEvent) => {
		activeStar = calculateRating(e);
		isHovered = false;
	};

	const calculateRating = (e: MouseEvent) => {
		const ratingContainer = document.querySelector('#ratingContainer') as HTMLElement;
		const { width, left } = ratingContainer.getBoundingClientRect();
		let percent = (e.clientX - left) / width;
		const numberInStars = percent * totalStars;
		const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;
		return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
	};

	const handleMouseEnter = (e: MouseEvent) => {
		isHovered = true;
		hoverActiveStar = calculateRating(e);
	};

	const handleMouseLeave = () => {
		hoverActiveStar = -1;
		isHovered = false;
	};
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content class="w-full max-w-md rounded-lg pb-3">
			<Dialog.Header>
				<Dialog.Title>Rate Recipe</Dialog.Title>
			</Dialog.Header>
			<div class="flex justify-center">
				<div
					role="button"
					tabindex="0"
					class="inline-flex gap-2 justify-center relative text-left pointer cursor-pointer w-max"
					id="ratingContainer"
					on:click={handleClick}
					on:mousemove={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					on:keydown={() => {}}
				>
					{#each [0, 1, 2, 3, 4] as _, index}
						{@const activeState = isHovered ? hoverActiveStar : activeStar}
						{@const showEmptyIcon = activeState === -1 || activeState < index + 1}
						{@const isActiveRating = activeState !== 1}
						{@const isRatingWithPrecision = activeState % 1 !== 0}
						{@const isRatingEqualToIndex = Math.ceil(activeState) === index + 1}
						{@const showRatingWithPrecision =
							isActiveRating && isRatingWithPrecision && isRatingEqualToIndex}

						<div class="relative transition-all duration-200 ease-in-out hover:scale-110">
							<div
								class={cn('overflow-hidden absolute')}
								style={`width: ${showRatingWithPrecision ? (activeState % 1) * 100 + '%' : '0%'}`}
							>
								<Star class="text-[#FFAD30] w-8 h-8 fill-[#FFAD30]" />
							</div>
							<div>
								{#if showEmptyIcon}
									<Star class="text-[#FFAD30] w-8 h-8" />
								{:else}
									<Star class="text-[#FFAD30] w-8 h-8 fill-[#FFAD30]" />
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<Dialog.Footer class="justify-center flex-row mt-2">
				<Button size="sm" class="w-max" disabled>Submit</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content>
			<Drawer.Header>
				<Drawer.Title>Rate Recipe</Drawer.Title>
			</Drawer.Header>

			<div class="flex justify-center">
				<div
					role="button"
					tabindex="0"
					class="inline-flex gap-2 justify-center relative text-left pointer cursor-pointer w-max"
					id="ratingContainer"
					on:click={handleClick}
					on:mousemove={handleMouseEnter}
					on:mouseleave={handleMouseLeave}
					on:keydown={() => {}}
				>
					{#each [0, 1, 2, 3, 4] as _, index}
						{@const activeState = isHovered ? hoverActiveStar : activeStar}
						{@const showEmptyIcon = activeState === -1 || activeState < index + 1}
						{@const isActiveRating = activeState !== 1}
						{@const isRatingWithPrecision = activeState % 1 !== 0}
						{@const isRatingEqualToIndex = Math.ceil(activeState) === index + 1}
						{@const showRatingWithPrecision =
							isActiveRating && isRatingWithPrecision && isRatingEqualToIndex}

						<div class="relative transition-all duration-200 ease-in-out hover:scale-110">
							<div
								class={cn('overflow-hidden absolute')}
								style={`width: ${showRatingWithPrecision ? (activeState % 1) * 100 + '%' : '0%'}`}
							>
								<Star class="text-[#FFAD30] w-8 h-8 fill-[#FFAD30]" />
							</div>
							<div>
								{#if showEmptyIcon}
									<Star class="text-[#FFAD30] w-8 h-8" />
								{:else}
									<Star class="text-[#FFAD30] w-8 h-8 fill-[#FFAD30]" />
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
			<Drawer.Footer class="flex-row mt-4 justify-center">
				<Drawer.Close asChild let:builder>
					<Button variant="outline" class="w-max" builders={[builder]}>Cancel</Button>
				</Drawer.Close>
				<Button size="sm" class="w-max" disabled>Submit</Button>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
