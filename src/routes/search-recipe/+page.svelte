<script lang="ts">
	import SearchInput from '$lib/SearchInput.svelte';
	import SearchCard from '$lib/SearchCard.svelte';

	import { Icon, ArrowLeft } from 'svelte-hero-icons';
	import { onMount } from 'svelte';

	let searchQuery: string = '';
	let foods: any = [];
	let loading: boolean = false;

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

	onMount(() => {
		searchFoodByName();
		console.log(foods);
	});
</script>

<div class="container">
	<div class="navigate">
		<Icon src={ArrowLeft} size="20px" class="text-[#292D32]" />
		<h3>Search recipes</h3>
	</div>

	<SearchInput {searchQuery} {searchFoodByName} />

	<div class="search__result__wrapper">
		<h3>Recent Search</h3>

		{#if loading}
			<div class="text-center text-lg w-full mt-[20px] font-bold">Loading...</div>
		{:else if foods && foods.length > 0}
			<div class="search__result">
				{#each foods as food}
					<a href={`/food-details/${food?.idMeal}`}>
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
	.navigate {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.navigate > h3 {
		display: flex;
		flex: 1;
		justify-content: center;
		font-size: 18px;
		font-weight: 600;
		line-height: 27px;
		color: #181818;
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
