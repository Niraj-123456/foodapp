<script>
	import { Icon, Star, Clock, Bookmark } from 'svelte-hero-icons';
	import RecipeImg from '../assets/images/recipe_2.png';
	import RecipeImg2 from '../assets/images/recipe_3.jpeg';
</script>

<div class="card">
	<img src={RecipeImg2} alt="recipe" />
	<div class="card__content">
		<div class="rating">
			<span
				><Icon src={Star} solid size="9px" class="text-[#FFAD30]" />
				<p>4.0</p></span
			>
		</div>

		<div class="content">
			<div class="recipe__name">
				<h1>Traditional spare ribs baked</h1>
				<p>By Chef John</p>
			</div>
			<div class="preparation__time">
				<Icon src={Clock} size="18px" />
				<span>20 min</span>
				<Icon src={Bookmark} size="20px" class="text-[#130F26] rounded-full p-[3px] bg-white" />
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		width: 100%;
		height: 150px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}

	.card > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card__content {
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px;
	}

	.rating {
		display: flex;
		justify-content: flex-end;
	}

	.rating > span {
		display: flex;
		align-items: center;
		gap: 4px;
		background: #ffe1b3;
		border-radius: 20px;
		padding: 1px 7.5px;
	}

	.rating > span > p {
		font-size: 10px;
	}

	.content {
		color: var(--color-white);
		line-height: 21px;
		display: flex;
		align-items: flex-end;
	}

	.recipe__name {
		max-width: 200px;
	}

	.content > .recipe__name > h1 {
		font-size: 14px;
		font-weight: 600;
		line-height: 16px;
	}

	.content > .recipe__name > p {
		margin-top: 3px;
		font-size: 9px;
		color: var(--color-gray);
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
</style>
