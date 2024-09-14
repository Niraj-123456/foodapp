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

	export let data: any;
	let currentCategoryIndex = 0;
	let isLoading: boolean = false;
	let currentArea: string = 'American';
	let recipeByAreas: [] = [];

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
			console.log(ex);
		}
	};

	onMount(() => {
		fetchRecipeByaArea();
	});
</script>

<div class="main">
	<div class="header">
		<div class="user__name">
			<h1>Hello Jega</h1>
			<p>What are you cooking today?</p>
		</div>
		<a class="user__img" href="/profile">
			<img src={UserAvatar} alt="user-avatar" />
		</a>
	</div>

	<!-- search input -->
	<SearchInput debounce={() => {}} onFocus={() => goto('/search-recipe')} />

	<div class="catergory__navs">
		{#each data?.areas as area, index}
			<button
				class={currentCategoryIndex === index ? 'category__btn active' : 'category__btn'}
				on:click={() => handleCategoryIndexChange(area, index)}
			>
				{area?.strArea}
			</button>
		{/each}
	</div>

	<div class="recipe__card__wrapper">
		{#if isLoading}
			<div class="w-full flex gap-4">
				{#each [0, 1, 2] as idx}
					<CardLoadingUi />
				{/each}
			</div>
		{:else if recipeByAreas?.length < 0}
			<div class="no__data__wrapper">No Data Found...</div>
		{:else}
			{#each recipeByAreas as recipeByArea}
				<RecipeCard recipe={recipeByArea} />
			{/each}
		{/if}
	</div>

	<div class="newrecipe__card__container">
		<h1>New Recipe</h1>
		<div class="newrecipe__card__wrapper">
			<div class="newrecipe">
				<NewRecipeCard />
				<NewRecipeCard />
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		width: 100%;
		padding-inline: 30px;
		padding-block: 50px 130px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.user__name > h1 {
		font-size: 22px;
		font-weight: 600;
	}

	.user__name > p {
		font-size: 12px;
		color: var(--color-gray-2);
		margin-top: 5px;
	}

	.user__img {
		width: 40px;
		height: 40px;
		background: #ffce80;
		border-radius: 10px;
	}

	.user__img > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.catergory__navs {
		display: flex;
		overflow: auto;
		margin-top: 25px;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	/* Hide scrollbar for Chrome, Safari and Opera */
	.catergory__navs::-webkit-scrollbar,
	.recipe__card__wrapper::-webkit-scrollbar,
	.newrecipe__card__wrapper::-webkit-scrollbar {
		display: none;
	}

	.catergory__navs .category__btn {
		padding: 7px 20px;
		color: var(--color-green-2);
		border-radius: 10px;
	}

	.catergory__navs .category__btn.active {
		background: var(--color-green);
		color: var(--color-white);
	}

	.recipe__card__wrapper,
	.newrecipe__card__wrapper {
		margin-top: 25px;
		width: 100%;
		height: 100%;
		overflow: auto;
		display: flex;
		gap: 10px;
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.no__data__wrapper {
		width: 100%;
		height: 217px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.newrecipe__card__container {
		margin-top: 35px;
	}

	.newrecipe__card__container > h1 {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	.newrecipe__card__wrapper {
		margin-top: 5px;
		height: 140px;
		overflow: auto;
	}

	.newrecipe {
		margin-top: 35px;
		display: flex;
	}
</style>
