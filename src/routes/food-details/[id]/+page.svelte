<script lang="ts">
	import { goto } from '$app/navigation';
	/** @type {import('./$types').PageData} */

	import IngredientAndProcedure from '$lib/IngredientAndProcedure.svelte';

	import {
		Icon,
		ArrowLeft,
		DotsHorizontal,
		Clock,
		Bookmark,
		Star,
		LocationMarker
	} from 'svelte-hero-icons';
	import Owner from '../../../assets/images/chef.png';

	export let data: any;

	let ingredients: [] = [];
	let procedures: [] = [];

	//get all recipe ingredients
	Object.entries(data?.food).forEach(([key, value]) => {
		if (key.match('strIngredient') && value !== null && value !== undefined && value !== '') {
			ingredients.push(value);
		}
		if (key === 'strInstructions') {
			const procedureSteps = data?.food?.strInstructions?.split(/[./]/g);
			procedures = procedureSteps.filter((procedure: string) => procedure !== '');
		}
	});
</script>

<div class="container">
	<div class="navigation">
		<Icon src={ArrowLeft} size="25px" class="text-sm" on:click={() => goto('/login')} on:keydown />
		<Icon src={DotsHorizontal} size="35px" class="text-sm" />
	</div>

	<div class="food__wrapper">
		<img src={data?.food?.strMealThumb} alt={data?.food?.strMeal} />
		<div class="content">
			<div class="rating">
				<Icon src={Star} solid size="15px" class="text-[#FFAD30]" />
				<span>4.0</span>
			</div>
			<div class="preparation__time">
				<Icon src={Clock} size="18px" />
				<span>20 min</span>
				<Icon src={Bookmark} size="20px" class="text-[#130F26] rounded-full p-[3px] bg-white" />
			</div>
		</div>
	</div>

	<div class="food__details">
		<div class="food__name__review">
			<h1>
				{data?.food?.strMeal}
			</h1>
			<span class="reviews"> (13k Reviews) </span>
		</div>
		<div class="recipe__owner">
			<img src={Owner} alt="owner" />
			<div class="name__location">
				<p>Laura Wilson</p>
				<span>
					<Icon src={LocationMarker} solid size="14px" class="text-[#71B1A1]" /> Lagos, Nigeria
				</span>
			</div>
			<button class="follow__btn">Follow</button>
		</div>
	</div>

	<IngredientAndProcedure {ingredients} {procedures} />
</div>

<style>
	.container {
		width: 100%;
		padding-inline: 30px;
	}

	.navigation {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.food__wrapper {
		margin-top: 10px;
		width: 100%;
		height: 150px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}

	.food__wrapper > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
		padding: 10px;
	}

	.rating {
		display: flex;
		align-items: center;
		gap: 4px;
		background: #ffe1b3;
		border-radius: 20px;
		padding: 1px 7.5px;
	}

	.rating > span {
		font-size: 12px;
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

	.food__details {
		margin-top: 10px;
	}

	.food__name__review {
		display: flex;
		justify-content: space-between;
		line-height: 25px;
	}

	.food__name__review > h1 {
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
		padding: 10px 30px;
		font-size: 14px;
		font-weight: 600;
		line-height: 16px;
		border-radius: 10px;
	}
</style>
