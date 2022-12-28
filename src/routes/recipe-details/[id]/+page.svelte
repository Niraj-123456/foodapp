<script lang="ts">
	/** @type {import('./$types').PageData} */

	import TopNavigation from '$lib/TopNavigation.svelte';
	import IngredientAndProcedure from '$lib/IngredientAndProcedure.svelte';
	import Owner from '../../../assets/images/chef.png';

	import {
		Icon,
		ArrowLeft,
		DotsHorizontal,
		Clock,
		Bookmark,
		Star,
		LocationMarker,
		Heart,
		Play
	} from 'svelte-hero-icons';

	export let data: any;

	let showLeftIcon: boolean = true;
	let heading: string = '';
	let showRightIcon: boolean = true;
	let ingredients: [] = [];
	let measurements: [] = [];
	let procedures: [] = [];
	let isFollowing: boolean = false;

	//get all recipe ingredients and procedures
	Object.entries(data?.recipe).forEach(([key, value]: any) => {
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

<div class="container">
	<TopNavigation {showLeftIcon} {heading} {showRightIcon} />

	<div class="recipe__wrapper">
		<img src={data?.recipe?.strMealThumb} alt={data?.recipe?.strMeal} />
		<div class="content">
			<div class="rating">
				<Icon src={Star} solid size="15px" class="text-[#FFAD30]" />
				<span>4.0</span>
			</div>
			<span class="play__icon" on:click={() => console.log('play')} on:keydown
				><Icon src={Play} size="60px" class="text-white opacity-50" /></span
			>
			<div class="preparation__time">
				<Icon src={Clock} size="18px" />
				<span>20 min</span>
				<Icon src={Bookmark} size="20px" class="text-[#130F26] rounded-full p-[3px] bg-white" />
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
				<p>Laura Wilson</p>
				<span>
					<Icon src={LocationMarker} solid size="14px" class="text-[#71B1A1]" /> Lagos, Nigeria
				</span>
			</div>
			<button class="follow__btn" on:click={() => (isFollowing = !isFollowing)}>
				{!isFollowing ? 'Follow' : 'Following'}
				<Icon
					src={Heart}
					size="22px"
					solid
					class={`${
						isFollowing ? 'text-red-500' : 'text-white'
					} transition-[color] ease-in-out delay-1s`}
				/>
			</button>
		</div>
	</div>

	<IngredientAndProcedure {ingredients} {measurements} {procedures} />
</div>

<style>
	.container {
		width: 100%;
		padding-inline: 30px;
		padding-block: 50px 30px;
	}

	.recipe__wrapper {
		margin-top: 10px;
		width: 100%;
		height: 150px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}

	.recipe__wrapper > img {
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
