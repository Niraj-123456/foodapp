<script lang="ts">
	import TopNavigation from '$lib/TopNavigation.svelte';
	import SearchInput from '$lib/SearchInput.svelte';
	import SearchCard from '$lib/SearchCard.svelte';

	import { Icon, ArrowLeft } from 'svelte-hero-icons';

	let searchQuery: string = '';
	let foods: any = [];
	let loading: boolean = false;
	let timer: any;
	let showLeftIcon: boolean = true;
	let heading: string = 'Search recipes';
	let showRightIcon: boolean = false;

	$: searchQuery, searchFoodByName();

	const debounce = (e: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			searchQuery = e.target.value;
		}, 750);
	};

	const searchFoodByName = async () => {
		try {
			loading = true;
			const result = fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
			).then((res) => res.json());
			const res: any = await result;
			loading = false;
			foods = res?.meals;
		} catch (ex) {
			loading = false;
			console.log(ex);
		}
	};
</script>

<div class="container">
	<TopNavigation {showLeftIcon} {heading} {showRightIcon} />

	<SearchInput {debounce} />

	<div class="search__result__wrapper">
		<h3>Recent Search</h3>

		{#if loading}
			<div class="text-center text-lg w-full mt-[20px] font-bold">Loading...</div>
		{:else if foods && foods.length > 0}
			<div class="search__result">
				{#each foods as food}
					<a href={`/recipe-details/${food?.idMeal}`}>
						<SearchCard {food} />
					</a>
				{/each}
			</div>
		{:else}
			<div class="text-center w-full mt-[20px] text-lg font-bold">No Results Found</div>
		{/if}
	</div>
</div>

<style>
	.container {
		width: 100%;
		min-height: inherit;
		padding: 50px 30px;
	}

	.search__result__wrapper {
		margin-top: 20px;
	}

	.search__result__wrapper > h3 {
		font-size: 16px;
		font-weight: 600;
		line-height: 24px;
	}

	.search__result {
		margin-top: 20px;
		display: grid;
		gap: 15px;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
