<script>
	import { Star, Clock, Bookmark, Play } from 'lucide-svelte';
	import RecipeImg2 from '../assets/images/recipe_2.png';
</script>

<div class="card">
	<img src={RecipeImg2} alt="recipe" />
	<div class="card__content">
		<div class="rating">
			<Star class="text-[#FFAD30] w-4 h-4" />
			<p>4.0</p>
		</div>
		<Play class="text-white opacity-[0.5] flex w-14 h-14" />
		<div class="preparation__time">
			<Clock />
			<span>20 min</span>
			<Bookmark class="text-[#130F26] rounded-full p-[3px] bg-white" />
		</div>
	</div>
</div>

<style>
	@keyframes slideFromLeft {
		from {
			transform: translateX(-100%);
		}

		to {
			transform: translateX(0%);
		}
	}

	.card {
		width: 100%;
		height: 150px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		animation: slideFromLeft 750ms linear;
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
		align-items: flex-end;
		padding: 10px;
	}

	.rating {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 4px;
		background: #ffe1b3;
		border-radius: 20px;
		padding: 1px 7.5px;
	}

	.rating > p {
		font-size: 10px;
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
