<script>
	import { Icon, Star, Clock } from 'svelte-hero-icons';

	import RecipeOwner from '../assets/images/recipe_owner.png';
	import NewRecipeImg from '../assets/images/new_recipe_1.png';
</script>

<div class="card__container">
	<img src={NewRecipeImg} alt="new-recipe" />

	<div class="card__content">
		<h1 class="card__heading">Steak with tomato</h1>
		<span class="star">
			{#each [1, 2, 3, 4, 5] as star}
				<Icon src={Star} solid size="20px" class="text-[#FFAD30]" />
			{/each}
		</span>
		<div class="card__footer">
			<div class="recipe__owner">
				<img src={RecipeOwner} alt="owner" />
				<p>By James Milner</p>
			</div>
			<div class="preparation__time">
				<Icon src={Clock} size="20px" />
				<span>15 Mins</span>
			</div>
		</div>
	</div>
</div>

<style>
	.card__container {
		width: 251px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 10px;
		position: relative;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}

	.card__container > img {
		width: 75px;
		height: 75px;
		border-radius: 50%;
		object-fit: cover;
		position: absolute;
		top: -30%;
		right: 3%;
	}

	.card__content > h1 {
		width: 150px;
		height: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.card__heading {
		color: var(--color-black-2);
		font-size: 16px;
		font-weight: 600;
		line-height: 21px;
	}
	.star {
		margin-top: 5px;
		display: flex;
	}

	.card__footer {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}

	.recipe__owner {
		display: flex;
		gap: 10px;
		align-items: center;
	}

	.recipe__owner > img {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		object-fit: cover;
	}

	.recipe__owner > p {
		color: var(--color-gray-2);
		font-size: 12px;
	}

	.preparation__time {
		color: var(--color-gray-2);
		display: flex;
		gap: 5px;
		font-size: 12px;
	}
</style>
