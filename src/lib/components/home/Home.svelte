<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index';
	import Skeleton from '$lib/components/common/Skeleton.svelte';
	import SearchInput from '../SearchInput.svelte';
	import RecipeCard from '../RecipeCard.svelte';
	import NewRecipeCard from '../NewRecipeCard.svelte';
	import StickyFooter from '../StickyFooter.svelte';
	import ScrollBox from '$lib/components/common/ScrollBox.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { cn } from '$lib/utils';
	import { user } from '../../../store/user';

	let currentCategoryIndex = 0;
	let isLoading = true;
	let fetchingCategories = true;
	let currentArea = 'American';
	let recipeByAreas: any[] = [];
	let categories: any[] = [];

	$: currentArea, fetchRecipeByaArea();

	const handleCategoryIndexChange = (area: any, idx: number) => {
		currentCategoryIndex = idx;
		currentArea = area?.strArea;
	};

	const fetchCategories = async () => {
		fetchingCategories = true;
		try {
			const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
			const recipes = await res.json();
			categories = recipes.meals;
		} catch (ex) {
			console.log('error 33', ex);
		} finally {
			fetchingCategories = false;
		}
	};

	const fetchRecipeByaArea = async () => {
		try {
			isLoading = true;
			const res = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${currentArea}`).then(
				(res) => res.json()
			);
			const result = await res;
			recipeByAreas = result?.meals;
		} catch (ex) {
			// handle error
		} finally {
			isLoading = false;
		}
	};

	onMount(() => {
		fetchCategories();
	});
</script>

<div class="w-full">
	<div class="flex justify-between items-center">
		<div class="user__name">
			<h1 class="text-[22px] font-semibold">Hello, {$user?.user_profile.display_name}</h1>
			<p class="text-xs text-gray-400">What are you cooking today?</p>
		</div>

		<a href="/profile">
			<Avatar.Root class="cursor-pointer" role="button" tabindex={0}>
				<Avatar.Image src={$user?.user_profile.photo_url} alt="" />
				<Avatar.Fallback class="bg-gray-300 text-lg font-semibold text-gray-600"
					>{$user?.user_profile.display_name?.substring(0, 1)}</Avatar.Fallback
				>
			</Avatar.Root>
		</a>
	</div>

	<!-- search input -->

	<SearchInput onFocus={() => goto('/search-recipe')} inputClass="h-12 mt-8" />

	{#if fetchingCategories}
		<ScrollBox>
			{#each [0, 1, 2, 4, 5] as _}
				<Skeleton class="w-32 h-10" />
			{/each}
		</ScrollBox>
	{:else}
		<ScrollBox>
			{#each categories as area, index}
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
	{/if}

	<div>
		{#if isLoading}
			<ScrollBox>
				{#each [0, 1, 2, 4] as _}
					<Skeleton class="w-[11rem] h-[280px]" />
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

	<StickyFooter />
</div>
