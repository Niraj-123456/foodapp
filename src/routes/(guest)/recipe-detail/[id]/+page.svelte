<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import IngredientAndProcedure from '$lib/IngredientAndProcedure.svelte';
	import ShareRecipeModal from '$lib/ShareRecipeModal.svelte';
	import TopNavigation from '$lib/TopNavigation.svelte';
	import Owner from '../../../../assets/images/chef.png';

	import { Bookmark, Clock, Heart, MapPin, Play, Star } from 'lucide-svelte';

	export let data: any;

	let showLeftIcon: boolean = true;
	let heading: string = '';
	let showRightIcon: boolean = true;
	let ingredients: string[] = [];
	let measurements: string[] = [];
	let procedures: string[] = [];
	let isFollowing: boolean = false;
	let openRecipeShareDialog: boolean = false;

	//get all recipe ingredients and procedures
	Object.entries(data?.recipe).forEach(([key, value]: [string, any]) => {
		if (key.match('strIngredient') && value !== null && value !== undefined && value !== '') {
			ingredients.push(value);
		}
		if (key.match('strMeasure') && value !== null && value !== undefined && value !== ' ') {
			measurements.push(value);
		}
		if (key === 'strInstructions') {
			const procedureSteps = data?.recipe?.strInstructions?.split(/[./]/g);
			procedures = procedureSteps.filter((procedure: string) => procedure !== '');
		}
	});
</script>

<div class="w-full">
	<TopNavigation {showLeftIcon} {heading} {showRightIcon} open={openRecipeShareDialog} />

	<div class="recipe__wrapper">
		<img src={data?.recipe?.strMealThumb} alt={data?.recipe?.strMeal} />
		<div class="content">
			<div class="rating">
				<Star class="text-[#FFAD30] w-4 h-4" />
				<span>4.0</span>
			</div>
			<div class="flex justify-center w-full">
				<Button class="bg-transparent hover:bg-gray-300/70 h-12"
					><Play class="text-white opacity-50 w-10 h-10" /></Button
				>
			</div>
			<div class="preparation__time">
				<Clock class="w-5 h-5" />
				<span>20 min</span>
				<Bookmark class="text-[#130F26] rounded-full p-[3px] bg-white w-5 h-5" />
			</div>
		</div>
	</div>

	<div class="recipe__details">
		<div class="recipe__name__review">
			<h1>
				{data?.recipe?.strMeal}
			</h1>
			<span class="reviews"> (13k Reviews) </span>
		</div>
		<div class="recipe__owner">
			<img src={Owner} alt="owner" />
			<div class="name__location">
				<p><a href="/profile">Laura Wilson</a></p>
				<span>
					<MapPin class="text-[#71B1A1] w-3 h-3" /> Lagos, Nigeria
				</span>
			</div>
			<button class="follow__btn" on:click={() => (isFollowing = !isFollowing)}>
				{!isFollowing ? 'Follow' : 'Following'}
				{#if isFollowing}
					<Heart class="text-red-500 fill-red-500 w-4 h-4" />
				{/if}
			</button>
		</div>
	</div>

	<IngredientAndProcedure {ingredients} {measurements} {procedures} />

	<ShareRecipeModal open={openRecipeShareDialog} />
</div>

<style>
	.recipe__wrapper {
		@apply mt-3 w-full aspect-video rounded-lg overflow-hidden relative;
	}

	.recipe__wrapper > img {
		@apply w-full h-full object-cover;
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: 100%;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		padding: 10px;
	}

	.rating {
		@apply flex items-center gap-1 bg-[#ffe1b3] rounded-3xl py-0.5 px-2;
	}

	.rating > span {
		font-size: 12px;
	}

	.play__icon {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.preparation__time {
		display: flex;
		align-items: center;
		gap: 7px;
		color: #fff;
	}

	.preparation__time > span {
		font-size: 12px;
	}

	.recipe__details {
		margin-top: 10px;
	}

	.recipe__name__review {
		display: flex;
		justify-content: space-between;
		line-height: 25px;
	}

	.recipe__name__review > h1 {
		font-size: 18px;
		font-weight: 600;
		max-width: 194px;
	}

	.reviews {
		font-size: 16px;
		color: #a9a9a9;
	}

	.recipe__owner {
		margin-top: 10px;
		display: flex;
		align-items: center;
	}

	.name__location {
		margin-left: 10px;
	}

	.name__location > p {
		font-size: 16px;
		font-weight: 600;
		line-height: 25px;
	}

	.name__location > span {
		font-size: 12px;
		display: flex;
		align-items: center;
		gap: 3px;
		color: #a9a9a9;
	}

	.follow__btn {
		background: #129575;
		color: #fff;
		margin-left: auto;
		padding: 10px 25px;
		font-size: 14px;
		font-weight: 600;
		line-height: 16px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
