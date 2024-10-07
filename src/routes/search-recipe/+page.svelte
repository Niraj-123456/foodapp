<script lang="ts">
	import SearchFilter from '$lib/components/SearchFilter.svelte';
	import SearchCard from '$lib/SearchCard.svelte';
	import SearchInput from '$lib/SearchInput.svelte';
	import TopNavigation from '$lib/TopNavigation.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton/index';
	import { SlidersHorizontal } from 'lucide-svelte';
	import RecipeNotFound from '$lib/components/icons/RecipeNotFound.svelte';

	let searchQuery: string = '';
	let foods: any[] = [];
	let loading: boolean = false;
	let timer: any;
	let showLeftIcon: boolean = true;
	let heading: string = 'Search recipes';
	let showRightIcon: boolean = false;
	let openRecipeShareDialog: boolean = false;
	let openFilterDialog: boolean = false;
	let searchMode: boolean = false;
	let error: boolean = false;

	$: searchQuery, searchFoodByName();

	const debounce = (e: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			searchQuery = e.target.value;

			if (!e.target.value) searchMode = false;
			else searchMode = true;
		}, 750);
	};

	const searchFoodByName = async () => {
		try {
			error = false;
			loading = true;
			const result = fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
			).then((res) => res.json());
			const res: any = await result;
			loading = false;
			foods = res?.meals;
		} catch (ex) {
			loading = false;
			error = true;
		}
	};
</script>

<div class="w-full h-full">
	<TopNavigation {showLeftIcon} {heading} {showRightIcon} open={openRecipeShareDialog} />

	<div class="flex items-center gap-4 mt-5">
		<SearchInput {debounce} />

		<SearchFilter icon={SlidersHorizontal} open={openFilterDialog} />
	</div>

	<div class="mt-5 w-full h-full">
		<div class="flex justify-between items-center w-full">
			{#if searchMode}
				<h3 class="font-semibold leading-6">Search Result</h3>
				<span class="text-sm text-gray-400">{foods?.length > 0 ? foods?.length : 0} results</span>
			{:else}
				<h3 class="font-semibold leading-6">Recent Search</h3>
			{/if}
		</div>

		{#if loading}
			<div class="loading">
				{#each [0, 1, 2, 3, 4, 5, 6, 7] as _}
					<Skeleton class="w-full h-[178px] rounded-[10px] bg-gray-200 shadow-sm" />
				{/each}
			</div>
		{:else if foods && foods?.length > 0 && !error}
			<div class="search__result">
				{#each foods as food}
					<a href={`/recipe-detail/${food?.idMeal}`}>
						<SearchCard {food} />
					</a>
				{/each}
			</div>
		{:else}
			<div class="text-center w-full mt-28 text-lg font-bold">
				<RecipeNotFound />

				<p class="pt-4">No Results Found</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.search__result,
	.loading {
		margin-top: 20px;
		display: grid;
		gap: 15px;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
