<script lang="ts">
	/** @type {import('./$types').PageData} */
	import UserAvatar from '../../../assets/images/user_avatar.png';

	import SearchInput from '$lib/SearchInput.svelte';
	import RecipeCard from '$lib/RecipeCard.svelte';
	import NewRecipeCard from '$lib/NewRecipeCard.svelte';
	import LoadingUi from '$lib/LoadingUi.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import CardLoadingUi from '$lib/common/CardLoadingUi.svelte';
	import { Scroll } from 'lucide-svelte';
	import ScrollBox from '$lib/common/ScrollBox.svelte';
	import { cn } from '$lib/utils';

	export let data: any;
	let currentCategoryIndex = 0;
	let isLoading: boolean = true;
	let currentArea: string = 'American';
	let recipeByAreas: any[] = [];

	$: currentArea, fetchRecipeByaArea();

	const handleCategoryIndexChange = (area: any, idx: number) => {
		currentCategoryIndex = idx;
		currentArea = area?.strArea;
	};

	const fetchRecipeByaArea = async () => {
		try {
			isLoading = true;
			const res = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${currentArea}`).then(
				(res) => res.json()
			);
			const result = await res;
			isLoading = false;
			recipeByAreas = result?.meals;
		} catch (ex) {
			isLoading = false;
		}
	};

	onMount(() => {
		fetchRecipeByaArea();
	});
</script>

<div class="w-full">
	<div class="flex justify-between items-center">
		<div class="user__name">
			<h1 class="text-[22px] font-semibold">Hello Jega</h1>
			<p class="text-xs text-gray-400 mt-3">What are you cooking today?</p>
		</div>
		<a class="w-10 h-10 bg-[#ffce80] rounded-[10px]" href="/profile">
			<img src={UserAvatar} alt="user-avatar" class="w-full h-full object-cover" />
		</a>
	</div>

	<!-- search input -->

	<SearchInput onFocus={() => goto('/search-recipe')} inputClass="h-12 mt-8" />

	<ScrollBox>
		{#each data?.areas as area, index}
			<button
				class={cn(
					currentCategoryIndex === index ? 'bg-primary text-white' : 'text-primary/80',
					'py-2 px-5 rounded-[10px]'
				)}
				on:click={() => handleCategoryIndexChange(area, index)}
			>
				{area?.strArea}
			</button>
		{/each}
	</ScrollBox>

	<div>
		{#if isLoading}
			<ScrollBox>
				{#each [0, 1, 2, 4] as idx}
					<CardLoadingUi />
				{/each}
			</ScrollBox>
		{:else if recipeByAreas?.length < 0}
			<div class="w-full flex justify-center items-center">No Data Found...</div>
		{:else}
			<ScrollBox>
				{#each recipeByAreas as recipeByArea}
					<a href={`/recipe-detail/${recipeByArea?.idMeal}`}>
						<RecipeCard recipe={recipeByArea} />
					</a>
				{/each}
			</ScrollBox>
		{/if}
	</div>

	<div class="mt-9">
		<h1 class="text-lg font-semibold">New Recipe</h1>
		<ScrollBox containerClass="pt-10">
			<NewRecipeCard />
			<NewRecipeCard />
		</ScrollBox>
	</div>
</div>
